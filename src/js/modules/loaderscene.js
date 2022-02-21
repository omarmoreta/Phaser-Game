import Phaser from 'phaser'

export default class LoaderScene extends Phaser.Scene {
    constructor(){
        super('loader');
    }

    preload(){
    }
    create(){
        this.scene.start('Mainmenu');
    }
}