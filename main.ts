xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.forever(function () {
    if (input.lightLevel() >= 150) {
        basic.showIcon(IconNames.Happy)
        xgo.execution_action(xgo.action_enum.Stretch_oneself)
        xgo.execution_action(xgo.action_enum.Play_pendulum)
        music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 100) {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        xgo.execution_action(xgo.action_enum.Go_prone)
    } else if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Heart)
        xgo.execution_action(xgo.action_enum.Request_feeding)
        xgo.execution_action(xgo.action_enum.Handshake)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    } else {
        let x = 0
        if (x == 0) {
            basic.showIcon(IconNames.Asleep)
            xgo.execution_action(xgo.action_enum.Go_prone)
        }
    }
})
