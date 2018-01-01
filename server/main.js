const express = require('express')
const path = require('path')
const webpack = require('webpack')
const logger = require('../build/lib/logger')
const webpackConfig = require('../build/webpack.config')
const project = require('../project.config')
const compress = require('compression')

const { Client } = require('pg')
const client = new Client();
client.connect();

// Run

const app = express()

app.get('/api/:id', function (req, res) {
  var id = req.params.id
  var winslosses = [];
  var query = 'select * from matchdata where championid=' + id;

  client.query(query, (err, ress) => {
    if (err) {
      console.log(err.stack + "@@@")
    } else {

      for (var i in ress.rows) {
        winslosses.push(ress.rows[i]["win"]);
      }

      var wins = getAllIndexes(winslosses,true);
      var losses = getAllIndexes(winslosses,false);
      console.log("##### " + (wins.length / (wins.length + losses.length)));

      var json = {"winrate": wins.length / (wins.length + losses.length)}
      res.json(json);
    }
    });
})

app.get('/api/:name/enemywinrates', function(req, res) {
  var name = req.params.name;
  var query = 'select * from ' + name;
  console.log(query);

  client.query(query, (err, rep) => {
    if (err) {
      console.log(err.stack + "@@@")
    } else {

      var pickedData;
      for (var i = 0; i < rep.rows.length; i++) {
        if (rep.rows[i].id === 1) {
          pickedData = rep.rows[i];
        }
      }
      var ress = pickedData["winrates"];

      res.json(ress);
    }
  });

})


app.use(compress())

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
  const compiler = webpack(webpackConfig)

  logger.info('Enabling webpack development and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : path.resolve(project.basePath, project.srcDir),
    hot         : true,
    quiet       : false,
    noInfo      : false,
    lazy        : false,
    stats       : 'normal',
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }))

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(path.resolve(project.basePath, 'public')))

  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.
  app.use('*', function (req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
} else {
  logger.warn(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(path.resolve(project.basePath, project.outDir)))

}

module.exports = app

function getAllIndexes(arr, val) {
  var indexes = [], i;
  for(i = 0; i < arr.length; i++)
    if (arr[i] === val)
      indexes.push(i);
  return indexes;
}
