controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ColorChange) {
        Ball.setImage(assets.image`1Ball`)
        ColorChange = false
    } else {
        Ball.setImage(assets.image`1BallColorChange`)
        ColorChange = true
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    Ball.setVelocity(randint(-1 * Ball_Speed, Ball_Speed), randint(-1 * Ball_Speed, Ball_Speed))
    _2Ball.setVelocity(randint(-1 * _2Ball_Speed, _2Ball_Speed), randint(-1 * _2Ball_Speed, _2Ball_Speed))
    info.changeScoreBy(1)
})
let ColorChange = false
let _2Ball_Speed = 0
let Ball_Speed = 0
let _2Ball: Sprite = null
let Ball: Sprite = null
let Cage = sprites.create(assets.image`cage`, SpriteKind.Player)
Ball = sprites.create(assets.image`1Ball`, SpriteKind.Player)
_2Ball = sprites.create(assets.image`2Ball`, SpriteKind.Player)
let BigCage = sprites.create(assets.image`bigcage`, SpriteKind.Player)
let Paddle = sprites.create(assets.image`paddle`, SpriteKind.Player)
Ball.setPosition(randint(70, 90), randint(50, 70))
_2Ball.setPosition(randint(70, 90), randint(50, 70))
Paddle.setPosition(80, 75)
Ball_Speed = 20
_2Ball_Speed = 25
Ball.setVelocity(randint(-1 * Ball_Speed, Ball_Speed), randint(-1 * Ball_Speed, Ball_Speed))
_2Ball.setVelocity(randint(-1 * _2Ball_Speed, _2Ball_Speed), randint(-1 * _2Ball_Speed, _2Ball_Speed))
ColorChange = false
game.onUpdate(function () {
    let score = 0
    if (score >= 1000) {
        game.over(false)
    }
})
