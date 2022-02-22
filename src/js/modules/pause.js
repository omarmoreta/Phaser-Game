import Phaser from 'phaser'

var pausekey;
var resumekey;

export default class PauseScene extends Phaser.Scene {
    constructor(){
    super('Pause');
    this.paused = false;

    }
    preload(){
    }
    create(){
    pausekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    resumekey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

}
    update(){
        if (pausekey.isDown && this.paused === false) {
            this.paused = true;
            this.scene.pause('thisGame');
            this.scene.launch('PScreen');}
        else if(resumekey.isDown && this.paused === true){
            this.paused = false;
            this.scene.resume('thisGame');
            this.scene.stop('PScreen');}
        };


}