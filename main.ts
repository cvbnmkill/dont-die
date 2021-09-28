sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
info.onLifeZero(function () {
    game.over(false)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 5 5 5 5 5 
    3 3 3 3 3 3 3 3 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 . 3 3 3 3 3 . . 3 3 3 3 3 3 3 
    3 3 3 . 3 . . . . 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 . . . . 3 3 3 3 3 3 3 3 3 
    3 3 3 . . . 3 . 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 . 3 3 3 3 3 3 
    3 3 . . 3 3 3 . . 3 3 3 3 3 3 3 
    3 3 . 3 . 3 3 . . . 3 3 . 3 3 3 
    3 3 3 . . 3 3 3 . 3 3 . 3 3 3 3 
    3 3 3 3 3 . 3 3 3 . . . 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Enemy)
let myEnemy2 = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 . 3 3 3 3 3 . . 3 3 3 3 3 3 3 
    3 3 3 . 3 . . . . 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 . . . . 3 3 3 3 3 3 3 3 3 
    3 3 3 . . . 3 . 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 . 3 3 3 3 3 3 
    3 3 . . 3 3 3 . . 3 3 3 3 3 3 3 
    3 3 . 3 . 3 3 . . . 3 3 . 3 3 3 
    3 3 3 . . 3 3 3 . 3 3 . 3 3 3 3 
    3 3 3 3 3 . 3 3 3 . . . 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite, 100, 100)
mySprite2.follow(mySprite, 50)
myEnemy2.follow(mySprite, 75)
mySprite.setPosition(70, 115)
mySprite.setVelocity(50, 0)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(8)
tiles.setTilemap(tilemap`level1`)
effects.bubbles.endScreenEffect()
info.setScore(3)
mySprite.setBounceOnWall(true)
