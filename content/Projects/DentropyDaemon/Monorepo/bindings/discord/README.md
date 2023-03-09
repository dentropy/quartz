---
id: mU9Bny78MvwSU7VX4Bv0q
title: Discord Datapipeline
desc: ''
updated: 1641490559320
created: 1641461354916
---

## Requirements

* Unix Environment
  * [wiki.software.list.WSL](../../../../../Software/List/WSL.md) for [wiki.software.List.Windows](../../../../../Software/List/Windows.md)
  * [wiki.software.List.MacOS](../../../../../Software/List/MacOS.md)
  * [wiki.software.List.linux](../../../../../Software/List/linux.md)
* ddaemon-monorepo
* [wiki.software.List.DiscordChatExporter](../../../../../Software/List/DiscordChatExporter.md)
  * [wiki.software.List.docker](../../../../../Software/List/docker.md) (Optional, will have to change commands to export guilds)
* [wiki.ddaemon.monorepo.bindings.discord.Get Discord User Token](Discord%20User%20Token)
* [wiki.software.list.nodejs](../../../../../Software/List/nodejs.md) or [wiki.software.List.nvm](../../../../../Software/List/nvm.md)
* [](Elasticsearch%7Cwiki.software.List.Elasticsearch#elasticsearch) Instance

## Scraping

``` bash
git clone keybase://team/dentropydaemon/ddaemon-monorepo
cd ddaemon-monorepo/discord-binding
mkdir inputs

# Export your guilds
docker run -v \
  `pwd`:/app/out tyrrrz/discordchatexporter:stable exportguild \
  -t "DISCORD_USER_TOKEN" -g GUILD_ID \
  --dateformat "yyyy-MM-dd H:mm:ss.ffff"\
   -f Json -p 80mb
```

## Indexing 

``` bash
cd ddaemon-monorepo
cp .env_sample .env

# Edit .env file with environment variables
vim .env

## RUN THESE ONE AT A TIME
cd discord-binding
npm install
node index.js
cd ..
bash ./discord-binding/test_connection.sh
bash ./discord-binding/set_mapping.sh
bash ./discord-binding/delete_index.sh
bash ./discord-binding/elastic_index.sh
bash ./discord-binding/set_mapping.sh
```
