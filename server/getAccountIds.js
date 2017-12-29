
const pg = require('pg');
const path = require('path');
const db = require('../db')
const { Client } = require('pg')
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
const client = new Client()
client.connect();

var apikey = process.argv.slice(2)[0];
var region = process.argv.slice(2)[1];

    var https = require('https');
 	var res;
 	var playerIdsInTable = [];

 	function doTimeout(url,i,res) {
 		setTimeout(function() {
 		var getJSON = require('get-json')

 		console.log(url);
		getJSON(url, function(error, rep){
	 		res = rep;
			});

		setTimeout(function(){
				try {
					var values = [res["accountId"],playerIdsInTable[i]];
				    client.query("UPDATE players" + region + " SET accountId=$1 WHERE playerId=$2", values, (err, res) => {
									console.log(err);
									console.log(res);
								});
				    }
				   catch (e) {
				   	console.log(e);
				   }

		}, 1000);
		}, (i * 50));
 	}

	 client.query('select * from players' + region + ' where accountid is null', (err, res) => {
			  if (err) {
			    console.log(err.stack + "@@@")
			  } else {

			    for (var i in res.rows) {

			    	playerIdsInTable.push(res.rows[i]["playerid"]);
			    }

				for (var i = 0; i < playerIdsInTable.length; i++ ) {
					var url = "https://"+region+".api.riotgames.com/lol/summoner/v3/summoners/" + playerIdsInTable[i] + "?api_key=" + apikey;
					doTimeout(url,i,res);


				}

		}

	});

