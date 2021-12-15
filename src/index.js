import Phaser from 'phaser'

import {config} from './js/config.js'
import MyGame from "./js/modules/game.js"
import BootScene from './js/modules/bootscene.js'
import PreloaderScene from './js/modules/preloader.js'

class Game extends Phaser.Game {
  constructor(){
    super(config);
    this.scene.add('thisGame', MyGame);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    
    this.scene.start('Boot');
  }
}

window.onload = function(){
  window.game = new Game();
}
