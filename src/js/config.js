import Phaser from 'phaser'
 
export const config = {
    type: Phaser.AUTO,
    width: 512,
    height: 512,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
      },
    },
    scale: {zoom: 1.5} 
    // { 
    //   mode: Phaser.Scale.FIT,
    //   autoCenter: Phaser.Scale.CENTER_BOTH,
    // }
  };
