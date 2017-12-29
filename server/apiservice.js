
const pg = require('pg');
const path = require('path');
const db = require('../db');
const { Client } = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
const client = new Client();
const runes = "../league_data/runes.json";
client.connect();


function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

function topInArray(arr) {
  var obj = {};
  for (var i = 0, j = arr.length; i < j; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    }
    else {
      obj[arr[i]] = 1;
    }
  }

  var sortable = [];
  for (var i in obj) {
    sortable.push([i, obj[i]]);
  }

  sortable.sort(function(a, b) {
    return a[1] - b[1];
  });
  sortable = sortable.reverse();

  var finalObj = [];
  if (sortable[0] != undefined) { finalObj.push(sortable[0]); }
  if (sortable[0] != undefined) { finalObj.push(sortable[1]); }
  if (sortable[0] != undefined) { finalObj.push(sortable[2]); }
  if (sortable[0] != undefined) { finalObj.push(sortable[3]); }
  if (sortable[0] != undefined) { finalObj.push(sortable[4]); }
  if (sortable[0] != undefined) { finalObj.push(sortable[5]); }
  if (sortable[0] != undefined) { finalObj.push(sortable[6]); }
  if (sortable[0] != undefined) { finalObj.push(sortable[7]); }
  if (sortable[0] != undefined) { finalObj.push(sortable[8]); }

  return sortable;
}

module.exports = {
	getChampionWinRatesVs: function (championid, echampionid, lane, numreturn, lanereturn, namereturn, callback) {
 	var winslosses = [], proname = [], rune1 = [], rune2 = [], rune3 = [], rune4 = [], rune5 = [], rune0 = [], item0 = [], item1 = [], item2 = [], item3 = [], item4 = [], item5 = [], summoner1 = [], summoner2 = [];
    var query = 'select * from matchdata where championid=' + championid + ' AND echampionid=' + echampionid + " AND lane='" + lane + "'";

     client.query(query, (err, res) => {
                  if (err) {
                    console.log(err.stack + "@@@")
                  } else {
                    for (var i in res.rows) {
                        winslosses.push(res.rows[i]["win"]);
                        item0.push(res.rows[i]["item1id"]);
                      item1.push(res.rows[i]["item2id"]);
                      item2.push(res.rows[i]["item3id"]);
                      item3.push(res.rows[i]["item4id"]);
                      item4.push(res.rows[i]["item5id"]);
                      item5.push(res.rows[i]["item6id"]);
                      summoner1.push(res.rows[i]["summoner1"]);
                      summoner2.push(res.rows[i]["summoner2"]);
                      rune0.push(res.rows[i]["runes"][0]);
                      rune1.push(res.rows[i]["runes"][1]);
                      rune2.push(res.rows[i]["runes"][2]);
                      rune3.push(res.rows[i]["runes"][3]);
                      rune4.push(res.rows[i]["runes"][4]);
                      rune5.push(res.rows[i]["runes"][5]);
                      proname.push(res.rows[i]["proname"]);
                    }

                    var proBuilds = [];

                    for (var i = 0; i < proname.length; i++) {
                      if (proname[i] !== undefined && proname[i] !== "") {
                        var probuild = {
                          win: winslosses[i],
                          item0: item0[i],
                          item1: item1[i],
                          item2: item2[i],
                          item3: item3[i],
                          item4: item4[i],
                          item5: item5[i],
                          summoner0: summoner1[i],
                          summoner1: summoner2[i],
                          rune0: rune0[i],
                          rune1: rune1[i],
                          rune2: rune2[i],
                          rune3: rune3[i],
                          rune4: rune4[i],
                          rune5: rune5[i],
                          proname: proname[i]
                        };
                        proBuilds.push(probuild);
                      }
                    }

                    var finalRuneBuilds = [];

                    if (res.rows.length > 0) {
                      var mainRuneObj = [], subRuneObj = [], keystoneList = [];
                      for (var i = 0; i < rune0.length; i++) {
                        var keystone;
                        if (rune0[i] != undefined) {
                          keystone = rune0[i]
                        } else {
                          keystone = "0"
                        }
                        console.log(keystone);
                        console.log("#####");
                        var runeObj = {
                          "keystoneType" : keystone,
                          "subrunes": [rune1[i], rune2[i], rune3[i]]
                        };
                        mainRuneObj.push(runeObj);

                        var found = false;
                        for (var p = 0; p < keystoneList.length; p++) {
                          if (keystoneList[p]["keystone"] === keystone) {
                            keystoneList[p]["count"] = keystoneList[p]["count"] + 1;
                            found = true;
                          }
                        }
                        if (found == false) {
                          var key = {
                            "keystone" : keystone,
                            "count" : 1
                          };
                          keystoneList.push(key);
                        }

                        var runeSecondaryObj = {
                          "keystoneType" : keystone,
                          "subrunes": [rune4[i],rune5[i]]
                        };
                        subRuneObj.push(runeSecondaryObj);
                      }

                      keystoneList.sort(function(a, b) {
                        return a.count - b.count;
                      });


                      for (var p = 0; p < keystoneList.length; p++) {
                        var keystone = keystoneList[p]["keystone"];
                        var finalMainRunes = [], finalSecondaryRunes = [];

                        for (var j = 0; j < mainRuneObj.length; j++) {
                          if (mainRuneObj[j]["keystoneType"] === keystone) {
                            finalMainRunes = finalMainRunes.concat(mainRuneObj[j]["subrunes"]);
                          }
                        }
                        for (var j = 0; j < subRuneObj.length; j++) {
                          if (subRuneObj[j]["keystoneType"] === keystone) {
                            finalSecondaryRunes = finalSecondaryRunes.concat(subRuneObj[j]["subrunes"]);
                          }
                        }
                        var build = {
                          "keystone" : keystone,
                          "runesMain" : topInArray(finalMainRunes),
                          "runesSub" : topInArray(finalSecondaryRunes)
                        };

                        finalRuneBuilds.push(build);
                      }

                    }


                    var totalItems = item0.concat(item1).concat(item2).concat(item3).concat(item4).concat(item5);

                    var finalObj = {
                      "allItems" : topInArray(totalItems),
                      "summoner1" : topInArray(summoner1),
                      "summoner2" : topInArray(summoner2),
                      "runeBuilds" : finalRuneBuilds,
                      "proBuilds" : proBuilds
                    };

                    var wins = getAllIndexes(winslosses,true);
                    var losses = getAllIndexes(winslosses,false);
                    console.log(query);

                    callback([wins.length / (wins.length + losses.length),numreturn,lanereturn,namereturn,(wins.length + losses.length), finalObj]);
                }
            });
	},

  getChampionWinRate: function (championid) {

    var https = require('https');
    var res;
    var winslosses = [];
    var matchesObject = {"matches": []};
    var query = 'select * from matchdata where championid=' + championid;

    client.query(query, (err, res) => {
      if (err) {
        console.log(err.stack + "@@@")
      } else {

        for (var i in res.rows) {
          winslosses.push(res.rows[i]["win"]);
        }

        var wins = getAllIndexes(winslosses,true);
        var losses = getAllIndexes(winslosses,false);
        console.log("##### " + (wins.length / (wins.length + losses.length)));

        return (wins.length / (wins.length + losses.length));
      }
    });
  }

}












