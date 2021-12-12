import Phaser from "phaser";

export default class Mc {
  constructor() {}

  preload() {
    this.load.spritesheet("mc", "srs/img/mc/23.png", {
      frameWidth: 32,
      frameHeight: 48,
    });

    create();
    {
      player = this.physics.add.sprite(100, 450, "mc");
      player.setCollideWorldBounds(true);
      this.anims.create({
        key: "down",
        frames: this.anims.generateFrameNumbers("mc", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });

      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("mc", { start: 4, end: 7 }),
        frameRate: 10,
        repeat: -1,
      });
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("mc", { start: 8, end: 11 }),
        frameRate: 10,
        repeat: -1,
      });
      this.anims.create({
        key: "up",
        frames: this.anims.generateFrameNumbers("mc", { start: 12, end: 15 }),
        frameRate: 10,
        repeat: -1,
      });
      // this.player = this.physics.add.image(280, 440, "mc");
      // this.player.setCollideWorldBounds(true);
      // this.inputKeys = this.input.keyboard.addKeys({
      //   up: Phaser.Input.Keyboard.KeyCodes.W,
      //   down: Phaser.Input.Keyboard.KeyCodes.S,
      //   left: Phaser.Input.Keyboard.KeyCodes.A,
      //   right: Phaser.Input.Keyboard.KeyCodes.D,
      // });
    }
    update();
    {
      const speed = 2.5;
      let playerVelocity = new Phaser.Math.Vector2();
      if (this.inputKeys.left.isDown) {
        playerVelocity.x = -1;
        player.anims.play("left", true);
      } else if (this.inputKeys.right.isDown) {
        playerVelocity.x = 1;
        player.anims.play("right", true);
      }
      if (this.inputKeys.up.isDown) {
        playerVelocity.y = -1;
        player.anims.play("up", true);
      } else if (this.inputKeys.down.isDown) {
        playerVelocity.y = 1;
        player.anims.play("down", true);
      }
      playerVelocity.scale(speed);
      this.player.setVelocity(playerVelocity.x, playerVelocity.y);
    }
  }
}
