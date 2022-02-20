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
    // HEALTHBAR
    this.HealthBar = new HealthBar(this,5,5,100);
    // LEVEL INFO
    this.data.set('lives', 1);
    this.data.set('level', 1);
    this.data.set('score', 2000);
    var text = this.add.text(5, 180, '', { font: '12px Verdana', fill: '#72D6CE' , background: '#fffff'});

        text.setText([
            'Level: ' + this.data.get('level'),
            'Lives: ' + this.data.get('lives'),
            'Score: ' + this.data.get('score')
        ]);
    }
}