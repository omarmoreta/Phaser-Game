import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
    constructor(){
        super('Boot');
    }
    
    preload(){
        // MAIN CHARACTER ASSETS
        this.load.atlas('knight', 
        'src/img/mc/knight.png',
        'src/img/mc/knight_atlas.json');
        this.load.atlas(
        "troll-enemy",
        "src/img/mobs/troll-enemy.png",
        "src/img/mobs/troll-enemy_atlas.json");
        this.load.image("tiles", "src/img/map/tf_jungle_tileset.png");
        this.load.tilemapTiledJSON("map", "src/tilemaps/Map.json");
        this.cameras.main.setBackgroundColor(0x9900e3)
        this.cameras.main.height = 256
        this.cameras.main.width = 336
        this.cameras.main.setPosition(32,32)
    }
    create(){
        this.scene.start('Preloader');
    }
}