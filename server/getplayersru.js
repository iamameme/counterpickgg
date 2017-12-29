
const pg = require('pg');
const path = require('path');
const db = require('../db')
const { Client } = require('pg')
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';
const client = new Client()
client.connect();

var apikey = process.argv.slice(2);

    var https = require('https');
 	var res;
	 
	var getJSON = require('get-json')
 	var url = "https://na1.api.riotgames.com/lol/league/v3/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=" + apikey;
	getJSON(url, function(error, rep){
 		res = rep;
		});
//
setTimeout(function(){ 

	        

	        //process.stdout.write(res);
	        console.info('\n\nCall completed');
	      	var playerNames = [], playerId = [];

	        for(var i in res["entries"]) {
		    	playerNames.push(res["entries"][i]["playerOrTeamName"]);
		    	
		    	playerId.push(res["entries"][i]["playerOrTeamId"]);
		    	}

		    var playerNamesInTable = [];
		    client.query('select * from players', (err, res) => {
			  if (err) {
			    console.log(err.stack + "@@@")
			  } else {
			    
			    for (var i in res.rows) {
			    	
			    	playerNamesInTable.push(res.rows[i]["playername"]);
			    }
			
					for (var i = 0; i < playerNames.length; i++) {
						
						if (playerNamesInTable.indexOf(playerNames[i]) != -1) {
							console.log("IN TABLE");
						} else {
							var values = [playerNames[i],playerId[i]];
						    // SQL Query > Insert Data
						    client.query("INSERT INTO players(playerName,rank,playerId) values($1, 'challenger', $2)", values, (err, res) => {
								console.log(err);
								console.log(res);
							});
						}
						 			
					} 
			    console.log("done");
			  }
			})
			


	   
	}, 10000);

