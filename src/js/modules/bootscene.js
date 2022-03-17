import Phaser from 'phaser'
import logo1 from '../img/logo.png'
import knight1 from '../img/mc/knight.png'
import knight2 from '../img/mc/knight_atlas.json'
import ogre1 from '../img/mobs/troll-enemy.png'
import ogre2 from '../img/mobs/troll-enemy_atlas.json'
import map1 from '../img/map/tf_jungle_tileset.png'
import map2 from '../tilemaps/Map.json'
import pausebutton from '../img/musicButton/pause-play.png'
import mainmusic from '../audio/maintitlemusic.mp3'
import bgmusic from '../audio/backgroundMusic.wav'
import evilsfx from '../audio/evil.mp3'
import walksfx from '../audio/walk.wav'

export default class BootScene extends Phaser.Scene {
    constructor(){
        super('Boot');
    }

    preload(){
        // LOAD PROGRESS
        var width = this.cameras.main.worldView.x + this.cameras.main.width ;
        var height = this.cameras.main.worldView.y + this.cameras.main.height ;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.6);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 10,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.6);

        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.6);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
        });

        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });
        this.load.on('complete', function () {
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });

        // MAIN CHARACTER ASSETS
        this.load.atlas('knight',
        knight1,
        knight2);
        // ENEMY ASSETS
        this.load.atlas(
        "troll-enemy",
        ogre1,
        ogre2);
        // MAP ASSETS
        this.load.image("tiles", map1);
        this.load.tilemapTiledJSON("map", map2);
        // CAMERA ASSETS
        this.cameras.main.setBackgroundColor(0x9900e3);
        this.cameras.main.height = 256;
        this.cameras.main.width = 336;
        this.cameras.main.setPosition(32,32);
        // SFX & UI ASSETS
        this.load.image('logo', logo1);
        this.load.image("pauseButton", pausebutton);
        this.load.audio("maintitlemusic", mainmusic);
        this.load.audio("backgroundMusic", bgmusic);
        this.load.audio("evil", evilsfx)
        this.load.audio("walking", walksfx)
    }
    create(){
    this.cameras.main.fadeOut(1000, 0, 0, 0);
	this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
		this.scene.start('Mainmenu');
	})
    }
}