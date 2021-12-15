import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
    constructor(){
        super('Boot');
    }
    preload(){
        this.load.atlas('knight', 
        'src/img/mc/knight.png',
        'src/img/mc/knight_atlas.json');
        this.load.atlas(
        "troll-enemy",
        "src/img/mobs/troll-enemy.png",
        "src/img/mobs/troll-enemy_atlas.json");
        this.load.image("tiles", "src/img/map/tf_jungle_tileset.png");
        this.load.tilemapTiledJSON("map", "src/tilemaps/Map.json");
    }
    create(){
        this.scene.start('Preloader');
    }
}