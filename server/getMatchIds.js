
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

 	var playerIdsInTable = [], matchesInTable = [];

 	function doTimeout(url,i,res) {
 		setTimeout(function() {
 		var getJSON = require('get-json')

 		console.log(url);
		getJSON(url, function(error, rep){
			console.log(error);
	 		res = rep;
			});

		setTimeout(function(){
			if (res != undefined) {
				for (var z in res["matches"]) {
					try {
					var time = Date.now() / 1000.0;
					if (matchesInTable.indexOf(res["matches"][z]["gameId"]) == -1) {
						var values = [res["matches"][z]["gameId"], time];
					    client.query("INSERT INTO matches" + region + "(gameId,timeadded) VALUES ($1,to_timestamp($2))", values, (err, res) => {
										console.log(err);
										console.log(res);
									});
						} else {
					  console.log("IN TABLE");
          }
				    }
				   catch (e) {
				   	console.log(e);
				   }

				}
				}
		}, 2000);
		}, (i * 50));
 	}

 	client.query("select * from matches" + region + " ORDER BY timeadded DESC", (errr, ress) => {
 		if (errr) {
			console.log(errr.stack + "@@@")
		} else {
			for (var i in ress.rows) {
				matchesInTable.push(ress.rows[i]["gameid"]);
			}

		 client.query('select * from players' + region + ' where accountid is not null', (err, res) => {
				  if (err) {
				    console.log(err.stack + "@@@")
				  } else {

				    for (var i in res.rows) {
				    	playerIdsInTable.push(res.rows[i]["accountid"]);
				    }

					for (var i = 0; i < playerIdsInTable.length; i++ ) {
						if (playerIdsInTable[i] != null) {
							var url = "https://" + region + ".api.riotgames.com/lol/match/v3/matchlists/by-account/" + playerIdsInTable[i] + "/recent?api_key=" + apikey;
							doTimeout(url,i,res);
						}

					}

			}
		});
		}
	});

