import Phaser from 'phaser'
import Player from './player.js'
import Troll from './troll.js';


export default class MyGame extends Phaser.Scene
{
    
    constructor ()
    {
    super('thisGame');

    }

    preload ()
    {
    this.player
    this.keys
    this.troll 
    this.cameras
    }

    create ()
    {
    // MAP
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("tf_jungle_tileset", "tiles");
    map.createLayer("Background", tileset, 0, 0);
    const blockedLayer = map.createLayer("Blocked", tileset, 0, 0);
    blockedLayer.setCollisionByExclusion(-1, true);

    // CAMERA
    this.physics.world.bounds.width = map.widthInPixels
    this.physics.world.bounds.height = map.heightInPixels
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
    this.cameras.main.setRoundPixels(true);
    


    // PLAYER
    this.player = new Player(this,225,343, 'knight').setScale(1);
    this.player.body.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1)
    

    // TROLLS
    this.troll = new Troll(this,360, 50, "troll-enemy").setScale(1);
    this.troll = new Troll(this,90, 50, "troll-enemy").setScale(1);
    this.troll = new Troll(this,240, 50, "troll-enemy").setScale(1.5);
    this.troll.body.setCollideWorldBounds(true);
    }

    update(time,delta){
        this.player.update()
    }
}
