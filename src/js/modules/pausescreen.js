import Phaser from 'phaser'


export default class PauseScreen extends Phaser.Scene {
    constructor(){
        super('PScreen');
    }

    preload(){
    }
    create(){
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    var text = this.add.text(screenCenterX, screenCenterY, '', { font: '12px Verdana', fill: '#ffffff' , background: '#fffff'}).setOrigin(0.5);

        text.setText([
            "---------PAUSED----------",
            "PRESS [ESC] TO RESUME"
        ]);
    }
}