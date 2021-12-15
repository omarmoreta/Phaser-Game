import Phaser from 'phaser'
import Entity from './entity.js'

export default class Troll extends Entity{
    constructor(scene,x,y,textureKey, damage, type, speed){
        super(scene,x,y,textureKey, 'Troll', type);

        const anims = scene.anims
        this.textureKey = textureKey
        this.damage = damage
        this.type = type
        this.speed = speed
        anims.create({
            key: "walk",
            frames: anims.generateFrameNames("troll-enemy", {
              start: 1,
              end: 4,
              zeroPad: 1,
              prefix: "troll_walk_",
            }),
            frameRate: 8,
            repeat: -1,
          });
        anims.create({
            key: "idle",
            frames: anims.generateFrameNames("troll-enemy", {
              start: 1,
              end: 4,
              zeroPad: 1,
              prefix: "troll_idle_",
            }),
            frameRate: 8,
            repeat: -1,
          });
    }
    update(){
        this.anims.play("idle",true)
        // this.body.setVelocity(0)

        // if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
        //     this.anims.play('idle', true)
        // } 
    }
}