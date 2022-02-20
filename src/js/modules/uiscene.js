import Phaser from 'phaser'
import HealthBar from './healthbar.js'

export default class UI extends Phaser.Scene {
    constructor(){
        super('interface');
    }

    preload(){
    this.HealthBar;
    }
    create(){
    this.HealthBar = new HealthBar(this,5,5,100);
    }
}