import Phaser from 'phaser'
 
export const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 225,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
      },
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,},
    pixelArt: true,
  };
