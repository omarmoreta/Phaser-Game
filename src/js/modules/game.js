
import Player from "./player.js";
import Troll from "./troll.js";

let walksfx;

export default class MyGame extends Phaser.Scene {
  constructor() {
    super("thisGame");
  }
  create() {
    // FADE IN
    this.cameras.main.fadeIn(1000, 0, 0, 0)
    // MAP
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("tf_jungle_tileset", "tiles");
    const backgroundLayer = map.createLayer("Background", tileset, 0, 0);
    const blockedLayer = map.createLayer("Blocked", tileset, 0, 0);
    const overheadLayer = map.createLayer("Overhead", tileset, 0, 0);
    overheadLayer.setDepth(20);

    // CAMERA
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setRoundPixels(true);

    // PLAYER
    this.player = new Player(this, 225, 343, "knight").setScale(1);
    this.player.body.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
    // walksfx = this.sound.add("walking", {volume: 1.0, loop: true,})

    // TROLLS
    this.trollRight = new Troll(this, 360, 50, "troll-enemy").setScale(1);
    this.trollRight.body.setCollideWorldBounds(true).setImmovable(true);
    this.trollLeft = new Troll(this, 90, 50, "troll-enemy").setScale(1);
    this.trollLeft.body.setCollideWorldBounds(true).setImmovable(true);
    this.trollBig = new Troll(this, 240, 50, "troll-enemy").setScale(1.5);
    this.trollBig.body.setCollideWorldBounds(true).setImmovable(true);

    blockedLayer.setCollisionByProperty({ collide: true });
    this.physics.add.collider(this.player, blockedLayer);
    this.physics.add.collider(this.player, this.trollRight);
    this.physics.add.collider(this.player, this.trollLeft);
    this.physics.add.collider(this.player, this.trollBig);
  }

  update(time, delta) {
    this.player.update();
  }
}
