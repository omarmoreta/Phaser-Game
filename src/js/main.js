import Phaser from 'phaser';

export default class MyGame extends Phaser.Scene
{
    
    constructor ()
    {
    super('100%', '100%', Phaser.AUTO, 'gameArea');
    // THIS IS FOR FUTURE GAME STATES
    // this.state.add('Boot', Boot, false);
    // this.state.add('Preload', Preload, false);
    // this.state.add('GameTitle', GameTitle, false);
    // this.state.add('Main', Main, false);
    // this.state.add('GameOver', GameOver, false);
    // this.state.start('Boot');
    }

    preload ()
    {
        // PRELOADING MAP
    this.load.image("tiles", "src/img/map/tf_jungle_tileset.png");
    this.load.tilemapTiledJSON("map", "src/tilemaps/Map.json");
    this.load.atlas(
        "troll-enemy",
        "src/img/mobs/troll-enemy.png",
        "src/img/mobs/troll-enemy_atlas.json");
    this.load.atlas('mc', 
    'src/img/mc/hi.png',
    'src/img/mc/mc_atlas.json');
    }

    create ()
    {
        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage("tf_jungle_tileset", "tiles");
        map.createLayer("Background", tileset, 0, 0);
        const blockedLayer = map.createLayer("Blocked", tileset, 0, 0);
        blockedLayer.setCollisionByExclusion(-1, true);
        const troll = this.physics.add.image(240, 50, "troll-enemy");
        troll.setCollideWorldBounds(true);
        const player = this.physics.add.image(50,300, 'mc');
        player.setCollideWorldBounds(true);
        // troll.collider(troll, blockedLayer); //doesnt work rn but not sure if will need later
        // Create animations for the troll to walk and idle using the frames in the atlas
        // Set troll to roam around freely, then chase and attack the player when he comes close

    }
    update(){

    }
}

