---
id: TejzgSlSsuwy2XxtymvTB
title: Pulse Audio
desc: ''
updated: 1628444413859
created: 1628444413859
---
# Pulse Audio
The Following Works:

[pulseaudio - Set default sound device output - Ask Ubuntu](https://askubuntu.com/questions/145135/set-default-sound-device-output)

[How to run a command at login? - Ask Ubuntu](https://askubuntu.com/questions/270049/how-to-run-a-command-at-login)

The following command will work without rebooting, make sure you use `pactl list` to get the correct device, grep it if needed

`echo "set-default-sink alsa_output.Headset" | pacmd` 

The following did not work:

[sound - How do you set a default audio output device in Ubuntu 18.04? - Ask Ubuntu](https://askubuntu.com/questions/1038490/how-do-you-set-a-default-audio-output-device-in-ubuntu-18-04)

[Playback of sound is delayed from clicking play - Support / Sound - Manjaro Linux Forum](https://forum.manjaro.org/t/playback-of-sound-is-delayed-from-clicking-play/4646/3)

    systemctl --user restart pulseaudio
