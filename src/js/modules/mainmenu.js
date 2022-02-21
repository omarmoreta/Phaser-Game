import Phaser from 'phaser'
import TweenHelper from './flashtext';

var spacek;
let music;

export default class MainmenuScene extends Phaser.Scene {
    constructor(){
    super('Mainmenu');
    }
    preload(){
    }
    create(){
    // MUSIC
    music = this.sound.add("maintitlemusic", {
        volume: 0.06,
        loop: true,
      });
      music.play();
    // SCREEN POSITIONING
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    // VERSION
    const gameversion = this.add.text(5, 5, '', { font: '16px Courier', fill: '#ffffff' });
    gameversion.setText([
        'Version: ' + game.config.gameVersion
    ]);
    // LOGO
    this.add.image(screenCenterX, screenCenterY -60, 'logo').setScale(0.43)
    // GAME TITLE
    const maintitle = this.add.text(screenCenterX /2-80, screenCenterY +40, game.config.gameTitle, { font: '32px Courier', fill: '#DD636E' });
    // TweenHelper.flashElement(this, maintitle)
    // START INSTRUCTIONS
    const instruction = this.add.text(screenCenterX /2, screenCenterY +80, 'Press Space to start', { font: '16px Courier', fill: '#ffffff' });
    TweenHelper.flashElement(this, instruction)
    // INPUT
    spacek = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update(){

        if (spacek.isDown) {
            music.pause();
            this.scene.start('thisGame');
            this.scene.start('Interface');
            this.scene.start('Pause');
        }};
}