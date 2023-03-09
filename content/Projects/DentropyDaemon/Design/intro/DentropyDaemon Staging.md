## Planning

* Audience
  * half technical normies, family, friends, acquaintance
* Marketing
  * How do VPN's market themselves
  * "run your own server" is like "be your own bank" meme of BTC
    * Some people want to be/run a bank/server.But for many people they'd rather just go to the bank, or use someone else's server.
  * Do normies even deserve to be in control of their own data?
  * Data sovereignty / knowledge management / productivity / freedom (anti-Big Tech surveilAnts capitalism) communications angle.

## Writing

I am on a mission to build infrastructure cyberpunks would admire. I plan to do this by writing a software stack that makes running server applications as desirable, secure, and as easy as installing an app on a phone. Putting people in absolute control of their data, who has accesses to it, and what is done to it is a paradime shifting change not only changing how users interact with computers but how they relate to one another.

* Users in control of their apps and data changes the human computer interaction paradime. Rather than spreading out our data across dozens of platforms all the data can be gathered in one place.

The websites, apps, and software we use are extensions of our mind, I like to think of them as our external brain, exo brain for short. For example one can use pen and paper as part of their exobrain to store information externally from their brain in a way that can be understood by others and oneself at a future date. The websites, apps, and software we all use are also part of our exobrain. These websites, apps, and sotware, not only log the information, text, photos, and so forth but every interaction we have with them. The same way one can read understand and access an essay they themsevles wrote or a book someone else wrote we should be able to easily access all data we generate about oursleves and share it with who we desire on our own terms. Sadly almost every app conceals and obfuscates our personal information and stores it on servers equivalent to walled gardens. This makes us all very scatter brained because our exobrain is all over the place. Having another app to install on ones laptop or smartphone is not going to fix this because those devices change, have limited storage, break, and are not always on connected to the internet. We need a always on server, that we personally own and control, connected to the cloud to help us put our exobrain back together again. People need control over their data without losing the functionality provided by the centralized big tech platforms. The pieces of our cyberpunk future are there we just need to put them together.

* Felix
  * Stop using the term exo brain
* Use simpler words, obfuscates = Obscure / make confusing, centralized = big tech, exobrain = extended mind and explain the concept.
* If you need to define a concept to define a word you have gone to far.

We can fix the problems of social media by replacing platforms with protocols. People should not think of youtube, facebook, twitter, and reddit as apps and websites they should think of them as data feeds that can be diced up, mixed, and served to the wants and desires of the user. There is no technical reason why someone can't comment on a youtube video with a reddit account or post on a facebook group from a twitter account. Social media is about connecting people together and having them interact in interesting, entertaining, and productive ways not herding them together to sell their attention as a commodity. Why should centralized big tech platforms dictate what the interface of social media is meant to be. Social Media is meant to be a series of data feeds that every user can customize to their hearts content tuning the algorithm however they like.

* **EXPLAIN THE ORIGINAL FEDIVERSE EMAIL, GIT, IRC. XMPP, Bullitin Boards, Usenet, RSS**
* Explain what the Fediverse is.
* People are trying to build paid social media platforms but that still acts as herding people. 
* Multiple accounts aspect. 
* Does not want unified interface for all social media, need personas, identity.
* Linking media.
* Facebook = Family, Instagram = pretty me, Tik Tok = Entertainment, Youtube = Entertainment.
* They do not fit in together.
* Permissions on who can see what persona.

There already exists a catagory of protocols and software that replicate all the functiaonlity of the centralized big tech platforms that can be run from a personal server, this suite of protocols and software are refered to as the fediverse. Fediverse protocols and apps offer feature parity replacements for everything from social media like reddit, facebook, discord, and twitter to product offerings such as google drive and office 365. There are plenty of protocols that support the fediverse but there are three big ones that together replace the offerings of Big Tech. These fediverse protocols are ActivityPub, Matrix, and Nextcloud/Owncloud federation. Activiypub is a protocol that has the features similar to twitter, facebook, meetup.com, youtube, and blogging services. The matrix protocol is the universal chat app from everything from one on one communication to discord style communities. Matrix is end to end encrypted by default, has a beautiful API for bots, and provides bridges to pretty much every social media platform out there. Nextcloud/Owncloud federation provide the functionality of Google Drive and Office365. Nextcloud/Owncloud offer encrypted cloud file storage and sharing, calendaring, contact lists, collaborative document editing, cameraroll backups, and more.

* Fediverse alternatives to the existing social media paradime. Feature Parity.
* Would you use fediverse?
* Different platforms for different content.
* Personal Management

Besides the fediverse apps there are many more self hosted apps one can install on on their own server for themselves and their friends to use. There are apps for password management, games, bookmarking, scheduling, web browser syncing, and much much more. For a pretty exhaustive list of apps one can install on their own server check out [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted).

* [TODO](../../../../../MyDendronExistence/Task%20manager/TODO.md) : Rather thank talk about only kubernetes below talk about other options such as OpenStack, Docker Swarm, and BSD Jails

How is this to be accomplished you might ask? Kubernetes is a open source software stack that treats infrastructure as code. It can be installed on anything from a raspberry pi to an entire data centre. Kubernetes keeps the storage and running of applications separate to make starting and stopping apps pretty simple. Kubernetes can layer technologies on top of one another, this means a app can not have any authentication but a user can still securely use it from any web browser by placing a service such as authelia in front of it. Kubernetes as a whole can be easily backed up using a tool like velero which even has a plugin to store backups on the decentralized storage network storj. There are even cool features such as the tor-controller that allow any app to be accessed through TOR (The Onion Router) aka the dark web preserving privacy better than any platform ever could.

The future waits for no one
