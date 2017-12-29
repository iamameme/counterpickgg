
const pg = require('pg');
const path = require('path');
const db = require('../db')
const { Client } = require('pg')
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
const client = new Client()
client.connect();
var apikey = process.argv.slice(2);


    var https = require('https');
 	var playerIdsInTable = [];

 	 	function doTimeout(summonerid) {
 		var url = "https://na1.api.riotgames.com/lol/league/v3/leagues/by-summoner/" + summonerid + "?api_key=" + apikey;
 		var res;
 		setTimeout(function() { 
 		var getJSON = require('get-json')

 		console.log(url);
		getJSON(url, function(error, rep){
	 		res = rep;
			});
	
		setTimeout(function(){    	      	
				try {
					for (var i in res[0]["entries"]) {
						if (playerIdsInTable.indexOf(parseInt(res[0]["entries"][i]["playerOrTeamId"])) == -1) {
							var values = [res[0]["entries"][i]["playerOrTeamName"],res[0]["entries"][i]["playerOrTeamId"]];
						    client.query("INSERT INTO players(playerName,rank,playerId) values($1, 'diamond', $2)", values, (err, res) => {
										console.log(err);
										console.log(res);
									});
							} else {
							console.log("Already in Table");
							}
						} 
					}
				   catch (e) {
				   	console.log(e);
				   }
				    				   
			}, 2000);
		}, 1000);
 	}

 		 client.query('select * from players', (err, res) => {
			  if (err) {
			    console.log(err.stack + "@@@")
			  } else {
			    
			    for (var i in res.rows) {
			    	playerIdsInTable.push(res.rows[i]["playerid"]);
			    }
				
				doTimeout(7428);
 				doTimeout(44989337);
 				doTimeout(19751520);
		}
	});



 	




