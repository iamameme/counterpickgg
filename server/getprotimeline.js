
const { Client } = require('pg')
const client = new Client()
client.connect();

var apikey = process.argv.slice(2)[0];
var count = 0;

var res;
var matchesInTable = [], regionsInTable = [], participantIdInTable = [], idInTable = [];
var matchdataGameIDInTable = [], matchdataChampionIDInTable = [];

function getAllIndexes(arr, val) {
  var indexes = [], i;
  for(i = 0; i < arr.length; i++)
    if (arr[i] === val)
      indexes.push(i);
  return indexes;
}

client.query("select * from matchdata where proname!='' ORDER BY timeadded DESC", (err, res) => {
  if (err) {
    console.log(err.stack + "@@@")
  } else {

    for (var i in res.rows) {
      matchdataGameIDInTable.push(res.rows[i]["gameid"]);
      matchdataChampionIDInTable.push(res.rows[i]["championid"]);
    }
  }
});


var request = require('request');

function doTimeout(url,i,res,participantId, passedId) {
  setTimeout(function() {
    var err;

    console.log(url);
    request(url, function (error, response, body) {
      try {
        res = JSON.parse(body);
      } catch(e) {

        return;
      }
      console.log(error);
      count++;
      console.log("COUNT: " + count);


      if (err == null) {
        setTimeout(function(){
          var timeline = {
            "levelUps" : [],
            "items" : []
          };

          if (res !== undefined) {
            for (var z in res["frames"]) {
              try {
                console.log('hi')

                var itemEvent = {
                  "itemsPurchased": [],
                  "itemsUndid": []
                };
                for (var event in res["frames"][z]["events"]) {
                  if (parseInt(res["frames"][z]["events"][event]["participantId"]) == parseInt(participantId)) {
                    if (res["frames"][z]["events"][event]["type"] ===  "ITEM_PURCHASED") {
                      itemEvent["itemsPurchased"].push(res["frames"][z]["events"][event]["itemId"]);
                    }
                    if (res["frames"][z]["events"][event]["type"] ===  "ITEM_UNDO") {
                      itemEvent["itemsUndid"].push(res["frames"][z]["events"][event]["itemId"]);
                    }
                    if (res["frames"][z]["events"][event]["type"] ===  "SKILL_LEVEL_UP") {
                      timeline["levelUps"].push(res["frames"][z]["events"][event]["skillSlot"]);
                    }
                  }
                }
                if (itemEvent["itemsPurchased"].length > 0) {
                  timeline["items"].push(itemEvent);
                }

              }
              catch (e) {
                console.log(e);
              }
            }
          }


          client.query("UPDATE matchdata SET timeline=$1 WHERE id=$2", [timeline, passedId], (err, res) => {
            console.log(err);
            console.log(res);
          });
        }, 2000);
      }
    });



  }, (i * 40));
}

client.query("select * from matchdata where proname!='' ORDER BY timeadded DESC", (errr, ress) => {
  if (errr) {
    console.log(errr.stack + "@@@")
  } else {
    for (var i in ress.rows) {
      matchesInTable.push(ress.rows[i]["gameid"]);
      participantIdInTable.push(ress.rows[i]["participantid"]);
      regionsInTable.push(ress.rows[i]["region"]);
      idInTable.push(ress.rows[i]["id"]);
    }

    for (var i = 0; i < matchesInTable.length; i++ ) {
      if (matchesInTable[i] != null) {
        var url = "https://"+ regionsInTable[i] +".api.riotgames.com/lol/match/v3/timelines/by-match/" + matchesInTable[i] + "?api_key=" + apikey;
        doTimeout(url,i,res,participantIdInTable[i], idInTable[i]);
      }

    }

  }
});

