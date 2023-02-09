input.onButtonPressed(Button.A, function () {
    vibora[2].turn(Direction.Right, 90)
})
let list: game.LedSprite = null
let vibora: game.LedSprite[] = []
let lista = [game.createSprite(0, 2), game.createSprite(1, 2), game.createSprite(2, 2)]
basic.pause(1000)
basic.pause(100)
basic.pause(200)
game.setScore(0)
basic.forever(function () {
    let pausa = 0
    let cabeza: game.LedSprite = null
    for (let index = 0; index <= 2; index++) {
        vibora.move(index.removeAt(45))
    }
    if (cabeza.isTouching(lista[0])) {
    	
    }
    for (let index = 0; index <= 2; index++) {
        let siguiente: game.LedSprite = null
        list = vibora[index * 1]
        vibora[index].set(LedSpriteProperty.Direction, siguiente.get(LedSpriteProperty.Direction))
    }
    basic.pause(pausa)
})
