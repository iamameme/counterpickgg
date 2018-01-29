
const { Client } = require('pg')
const client = new Client({
  user: process.env.USER,
  host: 'localhost',
  database: 'stevenbarsam',
  password: null,
  port: 5432,
});
client.connect();

var apikey = process.argv.slice(2)[0];
var region = process.argv.slice(2)[1];
var count = 0;

    var https = require('https');
 	var res;
 	var playerIdsInTable = [], matchesInTable = [];
 	var matchesObject = {"matches": []};
    var matchdataGameIDInTable = [], matchdataChampionIDInTable = [];
    function getAllIndexes(arr, val) {
        var indexes = [], i;
        for(i = 0; i < arr.length; i++)
            if (arr[i] === val)
                indexes.push(i);
        return indexes;
    }

     client.query('select * from matchdata ORDER BY timeadded DESC', (err, res) => {
                  if (err) {
                    console.log(err.stack + "@@@")
                  } else {

                    for (var i in res.rows) {
                        matchdataGameIDInTable.push(res.rows[i]["gameid"]);
                        matchdataChampionIDInTable.push(res.rows[i]["championid"]);
                    }
                }
            });

    var playerNamesInTable = [], playerAccountIdsInTable = [], playerProNames = [];
    client.query('select * from players' + region, (err, res) => {
      if (err) {
        console.log(err.stack + "@@@")
      } else {

        for (var i in res.rows) {

          playerNamesInTable.push(res.rows[i]["playername"]);
          playerAccountIdsInTable.push(res.rows[i]["accountid"]);
          playerProNames.push(res.rows[i]["proname"]);
        }
      }
    });

var request = require('request');

 	function doTimeout(url,i,res,gameidpassed) {
 		setTimeout(function() {
 		var getJSON = require('get-json');
        var err;

 		console.log(url);
// ADD FUNCTION TO DYNAMICALLY ADD DIAMOND PLAYERS
      // transition: all .4s ease;
      request(url, function (error, response, body) {
        try {
          res = JSON.parse(body);
        } catch(e) {
          client.query("DELETE FROM matches" + region + " WHERE gameId=$1", [gameidpassed], (err, res) => {
            console.log(err);
            console.log(res);
          });
          return;
        }
        console.log(error);
        //console.log(rep.headers);
        count++;
        console.log("COUNT: " + count);


        if (err == null) {
          setTimeout(function(){
            if (res != undefined) {
              for (var z in res["participants"])
                try {
                  var allGameIDs = getAllIndexes(matchdataGameIDInTable,res["gameId"]);
                  for (var g = 0; g < allGameIDs.length; g++) {
                    if (matchdataChampionIDInTable[allGameIDs[g]] == res["participants"][z]["championId"]) {
                      client.query("UPDATE matches" + region + " SET ifadded=true WHERE gameId=$1", [res["gameId"]], (err, res) => {
                        console.log(err);
                        console.log(res);
                      });

                      throw("ALREADY IN TABLE");
                    }
                  }

                  var season = res["participants"][z]["highestAchievedSeasonTier"];
                  if (season == "BRONZE" || season == "SILVER" || season == "GOLD") {
                    client.query("UPDATE matches" + region + " SET ifadded=true WHERE gameId=$1", [res["gameId"]], (err, res) => {
                      console.log(err);
                      console.log(res);
                    });
                    throw("TOO LOW OF RANK");
                  }

                  var queueId = res["queueId"];
                  if (queueId == 420 || queueId == 400 || queueId == 430 || queueId == 440) {

                  } else {
                    client.query("UPDATE matches" + region + " SET ifadded=true WHERE gameId=$1", [res["gameId"]], (err, res) => {
                      console.log(err);
                      console.log(res);
                    });
                    throw("NOT RIGHT GAME TYPE")
                  }

                  if (season == "DIAMOND") {
                    var playerName = res["participantIdentities"][z]["player"]["summonerName"];
                    var accountId = res["participantIdentities"][z]["player"]["accountId"];
                    var playerId = res["participantIdentities"][z]["player"]["playerId"];
                    if (playerNamesInTable.indexOf(playerName) == -1) {
                      client.query("INSERT INTO players" + region + "(playerName, rank, accountId, playerId) VALUES ($1,'diamond',$2, $3)", [playerName, accountId, playerId], (err, res) => {
                        console.log(err);
                        console.log(res);
                        console.log("ADDED DIAMOND PLAYER")

                      });
                    }

                  }

                  var lane = res["participants"][z]["timeline"]["lane"].toLowerCase();
                  var j;

                  for (var a in res["participants"]) {
                    if (a == z ) {
                    } else {
                      if (lane == "bottom" ) {
                        if (res["participants"][z]["timeline"]["role"].toLowerCase() == res["participants"][a]["timeline"]["role"].toLowerCase()) {
                          j = a;
                        }
                      } else {
                        if (res["participants"][a]["timeline"]["lane"].toLowerCase() == lane) {
                          j = a;
                        }
                      }
                    }
                  }

                  if (lane == "bottom") {
                    if (res["participants"][z]["timeline"]["role"].toLowerCase() == "duo_support") {
                      lane = "support";
                    }
                    if (res["participants"][z]["timeline"]["role"].toLowerCase() == "duo_carry") {
                      lane = "marksman";
                    }
                  }

                  var gameid = res["gameId"];
                  var participantId = res["participantIdentities"][z]["participantId"];
                  var championId = res["participants"][z]["championId"];
                  var recentSum1Id = res["participants"][z]["spell1Id"];
                  var recentSum2Id = res["participants"][z]["spell2Id"];
                  var runes = [res["participants"][z]["stats"]["perk0"],res["participants"][z]["stats"]["perk1"],res["participants"][z]["stats"]["perk2"],res["participants"][z]["stats"]["perk3"],res["participants"][z]["stats"]["perk4"],res["participants"][z]["stats"]["perk5"]];
                  var runes2 = [res["participants"][z]["stats"]["perkPrimaryStyle"], res["participants"][z]["stats"]["perkSubStyle"]];
                  var recentRunes = runes;
                  var recentMasteries = runes2;
                  var item1 = res["participants"][z]["stats"]["item0"];
                  var item2 = res["participants"][z]["stats"]["item1"];
                  var item3 = res["participants"][z]["stats"]["item2"];
                  var item4 = res["participants"][z]["stats"]["item3"];
                  var item5 = res["participants"][z]["stats"]["item4"];
                  var item6 = res["participants"][z]["stats"]["item5"];
                  var win = (res["participants"][z]["stats"]["win"] == true);
                  var echampion = res["participants"][j]["championId"];
                  var time = Date.now() / 1000.0;
                  var accountId = res["participantIdentities"][z]["player"]["accountId"];
                  var index = playerAccountIdsInTable.indexOf(accountId);
                  console.log("INDEX: " + index);
                  console.log("PRONAME: " +  playerProNames[index])
                  var proName = "";
                  if (playerProNames[index] !== "" && playerProNames[index] !== undefined) {
                    proName = playerProNames[index];
                  }

                  var values = [championId,echampion,lane,win,recentSum1Id,recentSum2Id,JSON.stringify(recentRunes),JSON.stringify(recentMasteries),item1,item2,item3,item4,item5,item6,gameid,time,proName, participantId, region];
                  var queryString;
                  /*if (win == true) {*/
                  queryString = "INSERT INTO matchdata (championid,echampionid,lane,win,summoner1,summoner2,runes,masteries,item1id,item2id,item3id,item4id,item5id,item6id,gameid,timeadded,proname, participantid, region) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,to_timestamp($16),$17, $18, $19)";
                  /*} else {
                      queryString = "INSERT " + lane + " SET item1Vs" + echampion + "=array_append(item1Vs" + echampion + ",$2), item2Vs"+ echampion + "=array_append(item2Vs" + echampion +",$3), item3Vs"+ echampion + "=array_append(item3Vs" + echampion +",$4), lossesVs" + echampion + "=$5 WHERE id=$1";
                  }*/
                  console.log(queryString);
                  client.query(queryString, values, (err, res) => {
                    console.log(err);
                    console.log(res);
                  });
                  client.query("UPDATE matches" + region + " SET ifadded=true WHERE gameId=$1", [gameid], (err, res) => {
                    console.log(err);
                    console.log(res);
                  });



                }
                catch (e) {
                  console.log(e);
                }

            }

          }, 2000);
        }
      });



		}, (i * 40));
 	}

 	client.query('SELECT DISTINCT gameid FROM matches'+region+' WHERE gameid NOT IN (SELECT gameid FROM matches'+region+' WHERE ifadded is not null )', (errr, ress) => {
 		if (errr) {
			console.log(errr.stack + "@@@")
		} else {
			for (var i in ress.rows) {
				matchesInTable.push(ress.rows[i]["gameid"]);
			}

			for (var i = 0; i < matchesInTable.length; i++ ) {
				if (matchesInTable[i] != null) {
					var url = "https://"+region+".api.riotgames.com/lol/match/v3/matches/" + matchesInTable[i] + "?api_key=" + apikey;
					doTimeout(url,i,res,matchesInTable[i]);
				}

			}

		}
	});

