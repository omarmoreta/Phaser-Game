//config, new Phaser.Game, preload, create, update functions https://photonstorm.github.io/phaser3-docs/index.html

//Loads WebGL in automatically with the display, physics, and scene functions
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
  scene: {
    preload: preload,
    create: create,
    // update: update
  },
};

//Preloads all of the assets into the game before creating them
function preload() {
  this.load.image("tiles", "assets/tilesets/tf_jungle_tileset.png");
  this.load.tilemapTiledJSON("map", "assets/tilemaps/Map.json");
  this.load.atlas(
    "troll-enemy",
    "assets/images/troll-enemy.png",
    "assets/images/troll-enemy_atlas.json"
  );
}

//Creates the map, background layer with tileset, adds a layer with collision, and enemy coming from cave
function create() {
  const map = this.make.tilemap({ key: "map" });
  const tileset = map.addTilesetImage("tf_jungle_tileset", "tiles");
  map.createLayer("Background", tileset, 0, 0);
  const blockedLayer = map.createLayer("Blocked", tileset, 0, 0);
  blockedLayer.setCollisionByExclusion(-1, true);
  const troll = this.physics.add.image(240, 50, "troll-enemy");
  troll.setCollideWorldBounds(true);
  // troll.collider(troll, blockedLayer); //doesnt work rn but not sure if will need later
}

//Create animations for the troll to walk and idle using the frames in the atlas

//Set troll to roam around freely, then chase and attack the player when he comes close

const game = new Phaser.Game(config);
