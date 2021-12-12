import Phaser from "phaser";

export default class MyGame extends Phaser.Scene {
  constructor() {
    super("100%", "100%", Phaser.AUTO, "gameArea");
    // THIS IS FOR FUTURE GAME STATES
    // this.state.add('Boot', Boot, false);
    // this.state.add('Preload', Preload, false);
    // this.state.add('GameTitle', GameTitle, false);
    // this.state.add('Main', Main, false);
    // this.state.add('GameOver', GameOver, false);
    // this.state.start('Boot');
  }

  preload() {
    // PRELOADING MAP
    this.load.image("tiles", "src/img/map/tf_jungle_tileset.png");
    this.load.tilemapTiledJSON("map", "src/tilemaps/Map.json");
    this.load.atlas(
      "troll-enemy",
      "src/img/mobs/troll-enemy.png",
      "src/img/mobs/troll-enemy_atlas.json"
    );
    this.load.atlas("mc", "src/img/mc/hi.png", "src/img/mc/mc_atlas.json");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("tf_jungle_tileset", "tiles");
    map.createLayer("Background", tileset, 0, 0);
    const blockedLayer = map.createLayer("Blocked", tileset, 0, 0);
    blockedLayer.setCollisionByExclusion(-1, true);
    const troll = this.add.sprite(360, 20, "troll-enemy");
    const secondTroll = this.add.sprite(240, 20, "troll-enemy");
    const thirdTroll = this.add.sprite(90, 20, "troll-enemy");
    let frameNames = this.textures.get("troll-enemy").getFrameNames();
    console.log(frameNames);
    this.trollAnims();
    troll.play("idle");
    secondTroll.play("idle");
    thirdTroll.play("idle");
    //type error
    // troll.setCollideWorldBounds(true);
    // secondTroll.setCollideWorldBounds(true);
    // thirdTroll.setCollideWorldBounds(true);
    const player = this.physics.add.image(50, 300, "mc");
    player.setCollideWorldBounds(true);
    // troll.collider(troll, blockedLayer); //doesnt work rn but not sure if will need later
    // Set troll to roam around freely, then chase and attack the player when he comes close
  }
  // Create animations for the troll to walk and idle using the frames in the atlas
  //trying out a shorter way to make animations
  trollAnims() {
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNames("troll-enemy", {
        start: 1,
        end: 4,
        zeroPad: 1,
        prefix: "troll_walk_",
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNames("troll-enemy", {
        start: 1,
        end: 4,
        zeroPad: 1,
        prefix: "troll_idle_",
      }),
      frameRate: 8,
      repeat: -1,
    });
  }
  update() {}
}

//longer way to create animations
// this.anims.create({
//   key: "walk",
//   frames: [
//     {
//       key: "troll-enemy",
//       frame: "troll_walk_1",
//     },
//     {
//       key: "troll-enemy",
//       frame: "troll_walk_2",
//     },
//     {
//       key: "troll-enemy",
//       frame: "troll_walk_3",
//     },
//     {
//       key: "troll-enemy",
//       frame: "troll_walk_4",
//     },
//   ],
//   frameRates: 8,
//   repeat: -1,
// });
// this.anims.create({
//   key: "idle",
//   frames: [
//     {
//       key: "troll-enemy",
//       frame: "troll_idle_1",
//     },
//     {
//       key: "troll-enemy",
//       frame: "troll_idle_2",
//     },
//     {
//       key: "troll-enemy",
//       frame: "troll_idle_3",
//     },
//     {
//       key: "troll-enemy",
//       frame: "troll_idle_4",
//     },
//   ],
//   frameRates: 8,
//   repeat: -1,
// });
// troll.play("idle");
// secondTroll.play("idle");
// thirdTroll.play("idle");
