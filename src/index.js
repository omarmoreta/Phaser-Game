import Phaser from 'phaser'
import MyGame from "./js/main.js"

const config = {
    type: Phaser.AUTO,
    width: 512,
    height: 512,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
      },
    },
    scale: {zoom:1.5,},
    scene: [MyGame],
  };

const game = new Phaser.Game(config);
