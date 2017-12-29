var schedule = require('node-schedule');
var spawn = require('child_process').spawn;

var apikey = process.argv.slice(2)[0];

var time = 0;
var js = "getAccountIds.js";
var child;
setTimeout(function() {
  child = spawnProcess(js,"KR");
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"EUW1");
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"NA1");
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"BR1");
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"OC1");
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"JP1");
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"EUN1");
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"RU");
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"TR1");
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"LA1");
}, time);
time += 60000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"LA2");
}, time);
time += 60000;
/*
js = "getmatchdata2.js";
setTimeout(function() {
  child = spawnProcess(js,"NA1");
}, time);
time += 600000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"RU");
}, time);
time += 600000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"KR");
}, time);
time += 600000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"BR1");
}, time);
time += 600000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"OC1");
}, time);
time += 600000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"JP1");
}, time);
time += 600000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"EUN1");
}, time);
time += 600000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"EUW1");
}, time);
time += 600000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"TR1");
}, time);
time += 600000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"LA1");
}, time);
time += 600000;

setTimeout(function() {
  child.kill('SIGINT');
  child = spawnProcess(js,"LA2");
}, time);
time += 600000;
*/

function spawnProcess(js, region) {
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
