import Phaser from 'phaser'

export default class PreloaderScene extends Phaser.Scene {
    constructor(){
        super('Preloader');
    }
    preload(){
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        this.add.image(width /2, height /2 - 100, 'logo');

    }
    create(){
        this.scene.start('thisGame');   // once main title is done, it will replace thisGame.
        this.scene.start('interface');
    }
    update(){

    }
}