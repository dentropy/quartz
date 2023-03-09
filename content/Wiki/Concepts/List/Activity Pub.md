---
id: maha6za4yg4z334yh6q5pky
title: Activity Pu
desc: ''
updated: 1666818571454
created: 1666812268775
---

* [ActivityPub](https://www.w3.org/TR/activitypub/)
* [GitHub - dsblank/activitypub: A general Python ActivityPub library](https://github.com/dsblank/activitypub)

## TODO

* [GitHub - fenwick67/mastofeed: ActivityPub feed => iframe embed. https://www.mastofeed.com](https://github.com/fenwick67/mastofeed)
* [dentropy/ActivityPub-Scraping-Research](https://github.com/dentropy/ActivityPub-Scraping-Research)
* [fediverse/delightful-activitypub-development: A curated list of developer resources related to ActivityPub and the Fediverse. - delightful-activitypub-development - Codeberg.org](https://codeberg.org/fediverse/delightful-activitypub-development/#user-content-frameworks)

## API

* [Pleroma/Soykaf](https://pleroma.soykaf.com/lain)
* [https://pleroma.soykaf.com/users/lain/outbox](https://pleroma.soykaf.com/users/lain/outbox)
* [https://pleroma.soykaf.com/users/lain/outbox?page=true](https://pleroma.soykaf.com/users/lain/outbox?page=true)

## How to index all messages from a activity pub user 

* Example user, https://pleroma.soykaf.com/lain
* [Fetching ActivityPub Feeds - Gokberk Yaltirakli](https://www.gkbrk.com/2018/06/fetching-activitypub-feeds/)
  * Code example works for `lain@pleroma.soykaf.com`
* [GitHub - dariusk/express-activitypub: A very simple reference implementation of an ActivityPub server using Express.js](https://github.com/dariusk/express-activitypub)
  * Full server implementation, I just want to read a feed right now
* [How to implement a basic ActivityPub server - Official Mastodon Blog](https://blog.joinmastodon.org/2018/06/how-to-implement-a-basic-activitypub-server/)
  * Uses Ruby
* [GitHub - bookwyrm-social/bookwyrm: Social reading and reviewing, decentralized with ActivityPub](https://github.com/bookwyrm-social/bookwyrm)
  * Too complex a project I want something simple
* [fediverse/delightful-activitypub-development: A curated list of developer resources related to ActivityPub and the Fediverse. - delightful-activitypub-development - Codeberg.org](https://codeberg.org/fediverse/delightful-activitypub-development/)
  * 
``` bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data 'profile="https://www.w3.org/ns/activitystreams",' \
  http://localhost:3000/api/login
```