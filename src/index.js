import Phaser from 'phaser'

import {config} from './js/config.js'
import MyGame from "./js/modules/game.js"
import BootScene from './js/modules/bootscene.js'
import MainmenuScene from './js/modules/mainmenu.js'
import UI from './js/modules/uiscene.js'
import PauseScene from './js/modules/pause.js'
import PauseScreen from './js/modules/pausescreen.js'

class Game extends Phaser.Game {
  constructor(){
    super(config);
    this.scene.add('thisGame', MyGame);
    this.scene.add('Boot', BootScene);
    this.scene.add('Mainmenu', MainmenuScene);
    this.scene.add('Interface', UI)
    this.scene.add('Pause', PauseScene);
    this.scene.add('PScreen', PauseScreen);
    this.scene.start('Boot');
  }
}
window.onload = function(){
  window.game = new Game();
}

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');

const PORT = process.env.PORT || 3000;
const app = express();
const socketio = require('socket.io');

const createApp = () => {
  app.use(morgan('dev'));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(compression());

  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });
};

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const startListening = () => {
  const server = app.listen(PORT, () =>
    console.log(`Serving it up on port ${PORT}`)
  );

//   const io = socketio(server);
//   require('./socket')(io);
};

async function bootApp() {
  await createApp();
  await startListening();
}

//this evaluates as true when this file is run directly from our commandline,
//aka if we want to sun it on our browser (localhost) app will load and mount onto localhost,
//if tirggered by test specs it will only creat app but not run on localhost again

if (require.main === module) {
  bootApp();
} else {
  createApp();
}

module.exports = app;