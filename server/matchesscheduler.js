var schedule = require('node-schedule');
var spawn = require('child_process').spawn;

var apikey = process.argv.slice(2)[0];

var regions = ["NA1", "RU", "KR", "BR1", "OC1", "JP1", "EUN1", "EUW1", "TR1", "LA1", "LA2"];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(regions);

//setInterval(function () {
  var time = 0;
  var js = "getMatchIds.js";
  var child;
  setTimeout(function() {
    child = spawnProcess(js,regions[0]);
  }, time);
  time += 30000;

  setTimeout(function() {
    child.kill('SIGINT');
    child = spawnProcess(js,regions[1]);
  }, time);
  time += 30000;

  setTimeout(function() {
    child.kill('SIGINT');
    child = spawnProcess(js,regions[2]);
  }, time);
  time += 30000;

  setTimeout(function() {
    child.kill('SIGINT');
    child = spawnProcess(js,regions[3]);
  }, time);
  time += 30000;

  setTimeout(function() {
    child.kill('SIGINT');
    child = spawnProcess(js,regions[4]);
  }, time);
  time += 30000;

  setTimeout(function() {
    child.kill('SIGINT');
    child = spawnProcess(js,regions[5]);
  }, time);
  time += 30000;

  setTimeout(function() {
    child.kill('SIGINT');
    child = spawnProcess(js,regions[6]);
  }, time);
  time += 30000;

  setTimeout(function() {
    child.kill('SIGINT');
    child = spawnProcess(js,regions[7]);
  }, time);
  time += 30000;

  setTimeout(function() {
    child.kill('SIGINT');
    child = spawnProcess(js,regions[8]);
  }, time);
  time += 30000;

  setTimeout(function() {
    child.kill('SIGINT');
    child = spawnProcess(js,regions[9]);
  }, time);
  time += 30000;

  setTimeout(function() {
    child.kill('SIGINT');
    child = spawnProcess(js,regions[10]);
  }, time);
  time += 30000;
//}, 1 * 60 * 60 * 1000);


function spawnProcess(js, region) {
  console.log("SPAWN: " + js + " " + apikey + " " + region);
  var child = spawn('node', [js, apikey, region]);
  child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
  });
  child.stderr.on('data', function(data) {
    console.log('stderr: ' + data);
  });
  child.on('close', function(code) {
    console.log('closing code: ' + code);
  });
  return child;
}
