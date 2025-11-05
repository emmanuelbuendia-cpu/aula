basic.showNumber(input.temperature())
while (input.temperature() == 22) {
    basic.showString("AMBIENTE")
}
while (input.temperature() >= 21) {
    music.play(music.stringPlayable("- C5 - B G F E C ", 120), music.PlaybackMode.UntilDone)
    basic.showString("FRIO")
}
