import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
    constructor(){
        super('Boot');
    }

    preload(){
        // LOAD PROGRESS
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });

        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });
        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });

        // MAIN CHARACTER ASSETS
        this.load.atlas('knight',
        'src/img/mc/knight.png',
        'src/img/mc/knight_atlas.json');
        this.load.atlas(
        "troll-enemy",
        "src/img/mobs/troll-enemy.png",
        "src/img/mobs/troll-enemy_atlas.json");
        this.load.image("tiles", "src/img/map/tf_jungle_tileset.png");
        this.load.image('logo', 'src/img/logo.png');
        this.load.tilemapTiledJSON("map", "src/tilemaps/Map.json");
        this.cameras.main.setBackgroundColor(0x9900e3);
        this.cameras.main.height = 256;
        this.cameras.main.width = 336;
        this.cameras.main.setPosition(32,32);
        this.load.image("pauseButton", "../../src/img/musicButton/pause-play.png");
        this.load.audio("maintitlemusic", "../../src/audio/maintitlemusic.mp3");
        this.load.audio("backgroundMusic", "../../src/audio/backgroundMusic.wav");
    }
    create(){
        this.scene.start('Mainmenu');
    }
}