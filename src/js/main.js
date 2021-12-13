import Phaser from 'phaser';
var cursors;
var player;
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
    this.load.atlas('knight', 
    'src/img/mc/knight.png',
    'src/img/mc/knight_atlas.json');
    }

    create ()
    {
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("tf_jungle_tileset", "tiles");
    map.createLayer("Background", tileset, 0, 0);
    const blockedLayer = map.createLayer("Blocked", tileset, 0, 0);
    blockedLayer.setCollisionByExclusion(-1, true);
    // MOB
    const troll = this.physics.add.image(240, 50, "troll-enemy");
    troll.setCollideWorldBounds(true);
    // PLAYER
    cursors = this.input.keyboard.createCursorKeys();
    player = this.physics.add.image(225,343, 'knight');
    player.setCollideWorldBounds(true);
    // troll.collider(troll, blockedLayer); //doesnt work rn but not sure if will need later
    // Create animations for the troll to walk and idle using the frames in the atlas
    // Set troll to roam around freely, then chase and attack the player when he comes close

    }
    update(){
    player.setVelocity(0);

    if (cursors.left.isDown)
    {
    player.setVelocityX(-100);
    }
    else if (cursors.right.isDown)
    {
    player.setVelocityX(100);
    }
    
    if (cursors.up.isDown)
    {
    player.setVelocityY(-100);
    }
    else if (cursors.down.isDown)
    {
    player.setVelocityY(100);
    }

    }
}

