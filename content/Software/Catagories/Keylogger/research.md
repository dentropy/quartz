---
id: 4zI7TCRVN4AqHOJlschIv
title: research
desc: ''
updated: 1628449250371
created: 1628449250371
---
# Keylogger Software
*   List of keyloggers I was able to get to work
    *   [Bad display name "" when running via ssh · Issue #6 · moses-palmer/pynput](https://github.com/moses-palmer/pynput/issues/6)
    *   [How to Make a Keylogger in Python - Python Code](https://www.thepythoncode.com/article/write-a-keylogger-python)
    *   [keylogger · PyPI](https://pypi.org/project/keylogger/)
    *   [raspbian - How to start a python script at boot - Raspberry Pi Stack Exchange](https://raspberrypi.stackexchange.com/questions/108694/how-to-start-a-python-script-at-boot)
*   Links to Keyloggers I could not get to work
    *   [gsingh93/keylogger: A keylogger written in Rust](https://github.com/gsingh93/keylogger)
    *   [GiacomoLaw/Keylogger: A simple keylogger for Windows, Linux and Mac](https://github.com/GiacomoLaw/Keylogger)
    *   [deadblackclover/keylogger: Register various user actions - keystrokes on the computer keyboard, movements and mouse keystrokes](https://github.com/deadblackclover/keylogger)
*   The Key logger I want to use is called LogKeys but I could not get the correct key mapping
    *   [How to Monitor Keyboard Keystrokes Using 'LogKeys' in Linux](https://www.tecmint.com/how-to-monitor-keyboard-keystrokes-using-logkeys-in-linux/)
        *   Troubleshoot → [Linux keyboard event capturing /dev/inputX - Stack Overflow](https://stackoverflow.com/questions/2775461/linux-keyboard-event-capturing-dev-inputx)

    /proc/bus/input/devices
    
    ls -l /dev/input/by-id
    
    sudo logkeys -d event3 --export-keymap /home/dentropy/Documents/Software/keylogger/keymap.txt
    
    sudo logkeys -d event3 --keymap /home/dentropy/Documents/Software/keylogger/keymap.txt  -s
    
    sudo logkeys -d event3 --us-keymap -s

    # keylogger.py
    import keyboard # for keylogs
    from datetime import datetime
    
    # https://www.thepythoncode.com/article/write-a-keylogger-python
    # https://github.com/boppreh/keyboard#keyboard.hook
    
    class Keylogger:
        def callback_pressed(self, event):
            # print(event.name)
            # print(event.event_type)
            with open(f"./test-keylog.txt", "a") as f:
                event_string = str(datetime.now().isoformat()) + " " + event.event_type + " "+  event.name
                print(event_string, file=f)
        def start(self):
            keyboard.hook(callback=self.callback_pressed)
            keyboard.wait()
    if __name__ == "__main__":
        keylogger = Keylogger()
        keylogger.start()
    

    # install.sh
    #!/bin/bash
    sudo cp keylogger.service /etc/systemd/system/keylogger.service
    sudo systemctl enable keylogger.service
    sudo systemctl start keylogger.service

    # keylogger.service
    [Unit]
    Description=Keylogger Service
    After=multi-user.target
    
    [Service]
    ExecStart=/usr/bin/python3 /home/dentropy/Software/keylogger/keylogger.py /home/dentropy/Software/keylogger/keylogger.out
    
    [Install]
    WantedBy=multi-user.target
