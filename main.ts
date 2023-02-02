input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
    basic.showNumber(8)
})
input.onGesture(Gesture.TiltRight, function () {
    music.playMelody("- B E - D F C C5 ", 120)
    music.playTone(698, music.beat(BeatFraction.Breve))
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("salut")
})
