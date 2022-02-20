import Phaser from "phaser";

export default class HealthBar {
    constructor(scene,x,y,health){
        this.bar = new Phaser.GameObjects.Graphics(scene);
        this.x = x;
        this.y = y;
        this.value = 100;
        this.p = 100/100;
        this.health = health;

        this.draw();
        scene.add.existing(this.bar)
    }
    decrease (amount)
    {
        this.value -= amount;

        if (this.value < 0)
        {
            this.value = 0;
        }

        this.draw();

        return (this.value === 0);
    }
    draw(){
        this.bar.clear();
        // bg
        // this.bar.fillStyle(0x000000);
        // this.bar.fillRect(this.x, this.y, 104, 16);
        // health
        // this.bar.fillStyle(0xffffff);
        // this.bar.fillRect(this.x + 2, this.y + 2, 4, 4);

        if (this.value < 30)
        {
            this.bar.fillStyle(0xE01414);
        }
        else
        {
            this.bar.fillStyle(0x72D6CE);
        }

        var d = Math.floor(this.p * this.value);

        this.bar.fillRect(this.x + 2, this.y + 2, d, 12);
    }
}