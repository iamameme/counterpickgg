var request = require('request');
var apikey = process.argv.slice(2)[0];
var fs = require('fs');
var url = "https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false&api_key=" + apikey;
  request(url, function (error, response, body) {

    var res = JSON.parse(body);
    var data = res["data"];

    var ordered = Object.entries(data).sort(function(a, b) {
      var nameA= a[1].name.toLowerCase(), nameB= b[1].name.toLowerCase()
      if (nameA < nameB) //sort string ascending
        return -1
      if (nameA > nameB)
        return 1
      return 0
    });

    var finalData = {};
    for (var i = 0; i < ordered.length; i++) {
      finalData[ordered[i][0]] = ordered[i][1];
    }

    res["data"] = finalData;
    res = JSON.stringify(res);
    fs.writeFile('../league_data/champions.json', res, function () {
      console.log("DONE");
    });

  });

