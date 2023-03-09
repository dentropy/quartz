---
id: CbCaN5SGi6YDxApmHTBlU
title: DiscordChatExporter
desc: ''
updated: 1641336639032
created: 1637785533856
---

## [Docker usage instructions · Tyrrrz/DiscordChatExporter Wiki](https://github.com/Tyrrrz/DiscordChatExporter/wiki/Docker-usage-instructions)

* Export Discord Chat
  * [Tyrrrz/DiscordChatExporter: Exports Discord chat logs to a file](https://github.com/Tyrrrz/DiscordChatExporter)
  * [Docker usage instructions · Tyrrrz/DiscordChatExporter Wiki](https://github.com/Tyrrrz/DiscordChatExporter/wiki/Docker-usage-instructions)


[How To Get Your Discord Token [2021 Guide] - PC Strike](https://pcstrike.com/how-to-get-discord-token/)


docker run --rm -v /path/on/machine:/app/out tyrrrz/discordchatexporter:stable export -t TOKEN -c CHANNELID

    # Waldbridge Investments TensleBeard
``` bash
mkdir exports
docker run -v /home/paul/Projects/exports:/app/out tyrrrz/discordchatexporter:stable exportguild -t "ODYxNTcwNDU2MTIxMTE0NjI1.YZgiGA.WePSsMm6TuOzF_K0lwVaBdg3fAQ" -g 453243919774253079 --dateformat "yyyy-MM-dd H:mm:ss.ffff" -f Json -p 80mb


docker run --rm -it -v /home/paul/Projects/exports:/app/out tyrrrz/discordchatexporter:stable exportguild -t "ODYxNTcwNDU2MTIxMTE0NjI1.YZgiGA.WePSsMm6TuOzF_K0lwVaBdg3fAQ" -g 453243919774253079



docker run --rm -it -v /home/paul/Projects/exports:/app/out \
    tyrrrz/discordchatexporter:stable \
    exportguild -t "MzA5MTY2NDc3MzM5MDAwODMy.YE0LFg.1opl5POmwzrwS8EvMcGOYXMmheA" -g 699772380163211354 \
    --dateformat "yyyy-MM-dd HH:mm:ss.ffff" -f Json --media -o TheCofeehouse.json
```