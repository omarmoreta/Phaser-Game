import Phaser from "phaser";
import { config } from "./js/config.js";
import MyGame from "./js/modules/game.js";
import BootScene from "./js/modules/bootscene.js";
import MainmenuScene from "./js/modules/mainmenu.js";
import UI from "./js/modules/uiscene.js";
import PauseScene from "./js/modules/pause.js";
import PauseScreen from "./js/modules/pausescreen.js";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("thisGame", MyGame);
    this.scene.add("Boot", BootScene);
    this.scene.add("Mainmenu", MainmenuScene);
    this.scene.add("Interface", UI);
    this.scene.add("Pause", PauseScene);
    this.scene.add("PScreen", PauseScreen);
    this.scene.start("Boot");
  }
}
window.onload = function () {
  window.game = new Game();
};
