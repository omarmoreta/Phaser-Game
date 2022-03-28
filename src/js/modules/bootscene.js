import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    // LOAD PROGRESS
    var width = this.cameras.main.worldView.x + this.cameras.main.width;
    var height = this.cameras.main.worldView.y + this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: "Loading...",
      style: {
        font: "20px monospace",
        fill: "#ffffff",
      },
    });
    loadingText.setOrigin(0.6);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 10,
      text: "0%",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    percentText.setOrigin(0.6);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: "",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    assetText.setOrigin(0.6);

    this.load.on("progress", function (value) {
      percentText.setText(parseInt(value * 100) + "%");
    });

    this.load.on("fileprogress", function (file) {
      assetText.setText("Loading asset: " + file.key);
    });
    this.load.on("complete", function () {
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });

    // MAIN CHARACTER ASSETS
    this.load.atlas(
      "knight",
      "src/assets/img/mc/knight.png",
      "src/assets/img/mc/knight_atlas.json"
    );
    // ENEMY ASSETS
    this.load.atlas(
      "troll-enemy",
      "src/assets/img/mobs/troll-enemy.png",
      "src/assets/img/mobs/troll-enemy_atlas.json"
    );
    // MAP ASSETS
    this.load.image("tiles", "src/assets/img/map/tf_jungle_tileset.png");
    this.load.tilemapTiledJSON("map", "src/assets/tilemaps/Map.json");
    // CAMERA ASSETS
    this.cameras.main.setBackgroundColor(0x9900e3);
    this.cameras.main.height = 256;
    this.cameras.main.width = 336;
    this.cameras.main.setPosition(32, 32);
    // SFX & UI ASSETS
    this.load.image("logo", "src/assets/img/logo.png");
    this.load.image(
      "pauseButton",
      "../../src/assets/img/musicButton/pause-play.png"
    );
    this.load.audio(
      "maintitlemusic",
      "../../src/assets/audio/maintitlemusic.mp3"
    );
    this.load.audio(
      "backgroundMusic",
      "../../src/assets/audio/backgroundMusic.wav"
    );
    this.load.audio("evil", "../../src/assets/audio/evil.mp3");
  }
  create() {
    this.cameras.main.fadeOut(1000, 0, 0, 0);
    this.cameras.main.once(
      Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
      (cam, effect) => {
        this.scene.start("Mainmenu");
      }
    );
  }
}
