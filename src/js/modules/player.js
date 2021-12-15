import Phaser from 'phaser'
import Entity from './entity.js'

export default class Player extends Entity {
    constructor(scene,x,y,textureKey)
    {
        super(scene,x,y,textureKey, 'Player')
        const anims = scene.anims
        anims.create({
            key: 'idle',
            frames: anims.generateFrameNames(this.textureKey,{
                start:0,
                end: 3,
                prefix: "knight_idle_",
            }),
            frameRate: 8,
            repeat: -1,
        });
        anims.create({
            key: 'run',
            frames: anims.generateFrameNames(this.textureKey, {
                start: 0,
                end: 3,
                prefix: "knight_run_",
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

    this.body.setVelocity(0)

    if (keys.left.isDown || keys.a.isDown ) {
        this.body.setVelocityX(-speed)
        // console.log('Hi')
    } else if (keys.right.isDown || keys.d.isDown) {
        this.body.setVelocityX(speed)
    }

    if (keys.up.isDown || keys.w.isDown) {
        this.body.setVelocityY(-speed)
    } else if (keys.down.isDown || keys.s.isDown) {
        this.body.setVelocityY(speed)
    }

    this.body.velocity.normalize().scale(speed)

    if (keys.up.isDown || keys.w.isDown || keys.down.isDown || keys.s.isDown || keys.left.isDown || keys.a.isDown || keys.right.isDown || keys.d.isDown ) {
        this.anims.play('run', true)
    } 

    //
    
    if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
        this.anims.play('idle', true)
    }
    // else{
    //     this.anims.stop()
    // }

    }
}