var schedule = require('node-schedule');
var spawn = require('child_process').spawn;
var cp = require('child_process');

var apikey = process.argv.slice(2)[0];

var time = 0;
var child;
var js2 = "getmatchdata2.js";
var regions = ["NA1", "RU", "KR", "BR1", "OC1", "JP1", "EUN1", "EUW1", "TR1", "LA1", "LA2"];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(regions);

setTimeout(function() {
  child = spawnProcess(js2,regions[0]);
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js2,regions[1]);
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js2,regions[2]);
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js2,regions[3]);
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js2,regions[4]);
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js2,regions[5]);
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js2,regions[6]);
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js2,regions[7]);
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js2,regions[8]);
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js2,regions[9]);
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js2,regions[10]);
}, time);
time += 60000;


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
