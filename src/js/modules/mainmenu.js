import Phaser from 'phaser'
import TweenHelper from './flashtext';

let music;
let laugh;

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
    // SFX
    laugh = this.sound.add("evil",{
        volume: 0.6,
        loop: false,
    });
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
    // START INSTRUCTIONS
    const instruction = this.add.text(screenCenterX /2, screenCenterY +80, 'Press Space to start', { font: '16px Courier', fill: '#ffffff' });
    // INSTRUCTION FLASH
    TweenHelper.flashElement(this, instruction)
    // FADE IN
    this.cameras.main.fadeIn(1000, 0, 0, 0)
    // FADE OUT
    this.input.keyboard.once('keydown-SPACE', () => {
    music.pause()
    laugh.play();
	this.cameras.main.fadeOut(1000, 0, 0, 0)
	})
	this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
        this.time.delayedCall(1000, () => {
        // music.pause();
		this.scene.start('thisGame');
        this.scene.start('Interface');
        this.scene.start('Pause');
        })
	})
    }
    update(){

        // if (spacek.isDown) {
        //     music.pause();
        //     this.scene.start('thisGame');
        //     this.scene.start('Interface');
        //     this.scene.start('Pause');
        // }
    };
}