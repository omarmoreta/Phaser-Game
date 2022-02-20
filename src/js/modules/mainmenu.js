import Phaser from 'phaser'

var spacek;

export default class MainmenuScene extends Phaser.Scene {
    constructor(){
    super('Mainmenu');

    }
    preload(){
    }
    create(){

    spacek = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    const gameversion = this.add.text(0, 0, '', { font: '16px Courier', fill: '#ffffff' });

    gameversion.setText([
        'Game Title: ' + game.config.gameTitle,
        'Version: ' + game.config.gameVersion
    ]);

    const instruction = this.add.text(100, 180, '', { font: '16px Courier', fill: '#ffffff' });

    instruction.setText([
        'Press Space to start'
    ]);
        // this.scene.start('thisGame');   // once main title is done, it will replace thisGame.
        // this.scene.start('interface');
    }
    update(){

        if (spacek.isDown) {
            this.scene.start('thisGame');
            this.scene.start('interface');
        }};
}