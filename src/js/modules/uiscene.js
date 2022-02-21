import Phaser from "phaser";
import HealthBar from "./healthbar.js";

let music;

export default class UI extends Phaser.Scene {
  constructor() {
    super("Interface");
    this.paused = false;
  }

  preload() {
    this.HealthBar;
  }
  create() {
    // MUSIC
    music = this.sound.add("backgroundMusic", {
      volume: 0.06,
      loop: true,
    });
    music.play();
    // MUSIC BUTTON
    this.add
      .image(380, 15, "pauseButton")
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        if (!this.paused) {
          this.paused = true;
          music.pause();
        } else {
          this.paused = false;
          music.resume();
        }
      });

    // HEALTHBAR
    this.HealthBar = new HealthBar(this, 5, 5, 100);

    // LEVEL INFO
    this.data.set("lives", 1);
    this.data.set("level", 1);
    this.data.set("score", 2000);
    var text = this.add.text(5, 180, "", {
      font: "12px Verdana",
      fill: "#FFFFFF",
    });
    text.alpha = 0.8;

    text.setText([
      "Level: " + this.data.get("level"),
      "Lives: " + this.data.get("lives"),
      "Score: " + this.data.get("score"),
    ]);
    var control = this.add.text(310, 210, "", {
      font: "8px Verdana",
      fill: "#FFFFFF",
    });
    text.alpha = 0.8;

    control.setText(["[SPACE] to pause"]);
  }
}
