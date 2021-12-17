import Phaser from 'phaser'
import Entity from './entity.js'

export default class Player extends Entity {
    constructor(scene,x,y,textureKey)
    {
        super(scene,x,y,textureKey, 'Player')
        this.facing = false;
        const anims = scene.anims
        anims.create({
            key: 'idleright',
            frames: anims.generateFrameNames(this.textureKey,{
                start:0,
                end: 3,
                prefix: "knight_idle_r",
            }),
            frameRate: 8,
            repeat: -1,
        });
        anims.create({
            key: 'idleleft',
            frames: anims.generateFrameNames(this.textureKey, {
                start: 0,
                end: 3,
                prefix: "knight_idle_l",
            }),
            frameRate: 8,
            repeat: -1,
        });
        anims.create({
            key: 'runright',
            frames: anims.generateFrameNames(this.textureKey, {
                start: 0,
                end: 3,
                prefix: "knight_run_r",
            }),
            frameRate: 8,
            repeat: -1,
        });
        anims.create({
            key: 'runleft',
            frames: anims.generateFrameNames(this.textureKey, {
                start: 0,
                end: 3,
                prefix: "knight_run_l",
            }),
            frameRate: 8,
            repeat: -1,
        });
        const {LEFT,RIGHT,UP,DOWN,W,A,S,D} = Phaser.Input.Keyboard.KeyCodes
        this.keys = scene.input.keyboard.addKeys({
            left: LEFT,
            right: RIGHT,
            up: UP,
            down: DOWN,
            w: W,
            a: A,
            s: S,
            d: D
        })
    }
    update()
    {
    const {keys} = this
    const speed = 100
    const previousVelocity = this.body.velocity.clone()
    this.body.setVelocity(0)

    if (keys.left.isDown || keys.a.isDown ) {
        this.body.setVelocityX(-speed)
        // console.log('Hi')
    } else if (keys.right.isDown || keys.d.isDown) {
        this.body.setVelocityX(speed)
        this.anims.flipY = true
    }

    if (keys.up.isDown || keys.w.isDown) {
        this.body.setVelocityY(-speed)
    } else if (keys.down.isDown || keys.s.isDown) {
        this.body.setVelocityY(speed)
    }

    this.body.velocity.normalize().scale(speed)

        // ANIMATION ORIENTATION !
    if (keys.left.isDown || keys.a.isDown) {
        this.facing = true
        this.anims.play('runleft', true)
    } else if (keys.right.isDown || keys.d.isDown) {
        this.facing = false
        this.anims.play('runright', true)
    } 

    if(this.body.velocity.y !== 0){
        if(this.facing){
            this.anims.play('runleft', true)
        }else{
            this.anims.play('runright', true)
        }
    }
    if(this.body.velocity.y === 0 && this.body.velocity.x === 0){
        if(this.facing){
            this.anims.play('idleleft', true)
        }else{
            this.anims.play('idleright', true)
        }
    }
   
    }
}