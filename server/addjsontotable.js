const express = require('express')
const path = require('path')
const webpack = require('webpack')
const logger = require('../build/lib/logger')
const webpackConfig = require('../build/webpack.config')
const project = require('../project.config')
const compress = require('compression')

var apiservice = require('./apiservice')
var league = require('../league_data/champions.json')
const db = require('../db')
const pg = require('pg');
const { Client } = require('pg')
const client = new Client()
client.connect();
var https = require('https');

var lanes = ['middle', 'bottom', 'support', 'top', 'jungle'];
var res;



  for (var z in league["data"]) {
    var id = league["data"][z]["id"];
    var matchesObject = {"data" : "", "winrates": {"middle": [], "top": [], "bottom": [], "support": [], "jungle": []}};

    for (var i = 0; i < Object.keys(league["data"]).length; i++) {
      var id2 = id;
      var name = (Object.keys(league["data"])[i]);
      for (var p = 0; p < 5; p++) {
        apiservice.getChampionWinRatesVs(id2, league["data"][name]["id"], lanes[p], i, p, z, function (winrate) {
          var name2 = (Object.keys(league["data"])[winrate[1]]);
          var total = winrate[4];
          console.log(matchesObject["winrates"]["middle"].length);
          matchesObject["winrates"][lanes[winrate[2]]].push({
            "champion": league["data"][name2]["key"],
            "winrate": winrate[0],
            "total": total,
            "data" : winrate[5]
          });

          if (winrate[1] === (Object.keys(league["data"]).length - 1)) {
            var response = JSON.stringify(matchesObject);
            var query = 'UPDATE ' + winrate[3] + ' SET winrates=$1 WHERE id=1';

            client.query(query,[response], (err, res) => {
              if (err) {
                console.log(err.stack + "@@@")
              } else {
                console.log(response);
                console.log(query);
                console.log("SUCCESS");
                console.log("FINAL: " + matchesObject["winrates"]["middle"].length);
                if (winrate[2] == 4) {
                  matchesObject = {"winrates": {"middle": [], "top": [], "bottom": [], "support": [], "jungle": []}, "data" : ""};
                }
              }
            });
          }
        });

      }
    }


  }

