## Next Steps
* [swarmlet/swarmlet: A self-hosted, open-source Platform as a Service that enables easy swarm deployments, load balancing, automatic SSL, metrics, analytics and more.](https://github.com/swarmlet/swarmlet)

* PeerTube
* [chynten comments on Fully Automated Homelabs?](https://old.reddit.com/r/selfhosted/comments/zdmese/fully_automated_homelabs/iz28gcd/)
* Bugs
	* Wikijs Basic Auth Loop
		* [Infinite authentication loop after adding basic auth - Traefik / Traefik v2 - Traefik Labs Community Forum](https://community.traefik.io/t/infinite-authentication-loop-after-adding-basic-auth/14877/4)
	* Mediagoblin require .env file
	* Not getting HTTPs Cert
* Feature Backlog
	* RClone
	* Automate Firewall Setup Via Cloudinit
	* Alternative Cloudflare DNS Setup Script
	* Backup / Restore Bash Script
		* Create tar file
		* scp / rsync tar file somewhere
		* rclone tar file somewhere
		* Update Setup Script to work with Restore
	* Static IP's for dentropy cloud
	* Code-Server Installation with password set vic environment variables
* Docs / DentropyCloud Design Backlog
       * [Ports, IP's, Network and DNS - DentropyCloud](DentropyCloud%20Docs/Ports,%20IP's,%20Network%20and%20DNS%20-%20DentropyCloud.md)
	* [Volumes Used - DentropyCloud](DentropyCloud%20Docs/Volumes%20Used%20-%20DentropyCloud.md)
	* [Catechism - DentropyCloud](DentropyCloud%20Design%20Folder/Catechism%20-%20DentropyCloud.md)
	* [Design Doc - DentropyCloud](Design%20Doc%20-%20DentropyCloud.md)
	* Simple description for each application, explain the cavitates of using it
	* We need a system diagram or a spec!?!?!?
	* Organize Stuff in the Stuff Folder
* [Roadmap - DentropyCloud](Roadmap%20-%20DentropyCloud.md)
* Design, if this was embeded it would be written in go, Docker is written in go, Terraform is written in Go, Kubernetes is written in go, Google is basically written in go, Gittea is written in Go, Go also has [gActivityPub Support](https://github.com/go-fed/activity), the dendrite client is written in Go. Zincsearch is writen in Go. The OAuth Libraries for Go have more stars on Github than Rust ones. RClone is written in Go. Minio is written in Go.  Geth was written in Go.
* Continue [Inital Design Doc - DentropyCloud](DentropyCloud%20Design%20Folder/Inital%20Design%20Doc%20-%20DentropyCloud.md)

## Logs
* [2023-02-24](../../../MyDendronExistence/Daily/Logs/2023-02-24.md)
	* 2023-02-24T02:57:11-05:00
		* It appears everything is in the umbrel folder
		* Everything also appears to be using docker
		* Therefore the solution should be to stop all docker containers, zip up umbrel folder, put on object storage, pull from object storage, extract, starts docker-compose.yml and tor docker-compose.yml
		* Maybe you should test this on the local system first before doing the object storage
		* Yes
	* 2023-02-24T02:40:29-05:00
		* Alright let's do something useful
		* Let's get GitTea up and running as part of DentropyCloud
		* Let's get MonicaCRM up and running as part of DentropyCloud
		* Let's test backups on Umbrel
		* Let's go SSH into Umbrel
		* Are we going to learn how to backup an entire linux system to an S3 bucket
		* Sure why the fuck not
		* The answer is [RClone](../../Software/List/RClone.md)

* [2023-02-21](MyDendronExistence/Daily/Logs/2023-02-21.md)
	* 2023-02-21T01:44:28-05:00
		* Dentropy Cloud
		* What is Dentropy Cloud
		* It's just an opinioned homelab deployment
		* What is a homelab
		* A homelab is a server that you use to run apps on the internet
		* What are these apps
		* Misskey which is decentralised twitter and works with Mastadon
		* We have media goblin which can be used for storing and sharing files, videos, and images
		* We have nextcloud which can basically do everything you can do with Google Apps or Microsoft Office 365
		* And we have WikiJS which is like your own wikipedia except easier to use
	* 2023-02-21T01:15:10-05:00
		* User and Pass test@gmail.com
		* Alright we have a GoAuthentik instance
		* It all uses Basic Auth, what I have written is compatible
		* Dude deploy what you already have
		* DOCUMENT WHAT YOU ALREADY HAVE
		* MAKE A VIDEO OF YOURSELF INSTALLING IT
		* SHOW HOW THE DIFFERENT APPS WORK
		* What are your top 3 Apps
		* Misskey, Mediagoblin, and Nextcloud and we can mention WikiJS
		* Cool alright get a mic plugged in and record yourself
	* 2023-02-21T01:06:57-05:00
		* Alright we are deploying GoAuthentik why is this important
		* We already have the BasicAuth Setup
		* GoAuthentik is the ideal, then add email, then we are done
		* Alright so go update the entire project to use GoAuthntik Instead
		* What does the MVP look like?
	* 2023-02-21T01:00:58-05:00
		* Alright what's next?
		* We want GoAuthentik Rather than Basic Auth
		* Alright go deploy it
		* Does it run separately
		* Dude stop trying to run everything on a single VPS of course it runs separately, that's how the real world works bro If you want to run everything on a single VPS is a bullshit requirement
		* No it's not
		* Then you need an internal network
		* Oooo I like that idea
* [2023-02-13](../../../MyDendronExistence/Daily/Logs/2023-02-13.md)
	* Alright why did I stop working on this project?
	* Because I was not building it for someone
	* False
	* Because I did not have an end goal in mind, I did not see myself using services I was using and setup. For example I setup audiobook shelf and still used voice because it was downloaded and I did not have to use data while listening on a walk. Jellyfin is always to finicky, Calibe can not sync what I am reading, syncthing is a pain to setup with multiple folders plus I already have mega so there is no point, I don't know how to talk to stranger on the internet so did not use my misskey instance much, I don't have media I want to share with people that can't just be put on a proper hosting service such as vimeo or I can just share a link via mega, I don't have a public wiki I use Obsidian and Question Engine is supposed to help with that anyways, I do use qbittorrent at home, miniflux is not fully features enough I would rather use feedly or readwise, I want to use wallabag rather than readwise but can't deploy it, I guess I could have paid for wallabag in the past but back then I was super privacy conscious. Maybe I should still have a wallabag instance. I have no videos I want to post on peertube.
	* I just don't have a need for self hosted services because I am so isolated and they do not fit my lifestyle. 
* [2022-12-05](../../../MyDendronExistence/Daily/Logs/2022-12-05.md)
	* We need to document those static IP addresses
	* We need to test this thing getting deployed
	* We need to test backup and restore
		* We need to track what apps need to be backuped and restored and stuff
	* We can just set backup on vultr and deal with that stuff manually when we want to
	* We gotta go on code mentor and get some code review.
	* What questions do we have
		* We outline the problem and we get them to explain to us how they would solve it
		* We have them read my documentation and give live feedback
		* How do they do Backup and Restore
		* What services do they personally run
	* Alright let's write my message

Hi ,

My name is [Paul Mullins](https://www.linkedin.com/in/paulmullins-779/), and I want your help on a personal project I am working on. I call the Project [Dentropy Cloud](https://publish.obsidian.md/ddaemon/dentropydaemon-wiki/Projects/DentropyCloud) but it is simply a automated devops deployment of [homelab applications](https://github.com/awesome-selfhosted/awesome-selfhosted). I want to talk to you about how you would attack the problem of self hosted applications requiring different levels of resources, authentication, backup, restore, updates etc... Then I want to get some [code review](https://gitlab.com/dentropy/dentropycloud-traefik), I am looking to get your impression on things but if you want to get grandular feel free. I also want to discuss what I should prioritize or add on my [roadmap](https://publish.obsidian.md/ddaemon/dentropydaemon-wiki/Projects/DentropyCloud/Roadmap+-+DentropyCloud).

I have two goals for this project. Firstly I have some friends who want me to deploy and manage Dentropy Cloud for them on their own domain name so I want to make sure I am doing things profesionally. Secondly I want to get a job doing real DevOps therefore I hope to discuss gaps in my knowledge and what the industry actually desires. 

* Cont...*
	* Alright I posted that on Code Mentor, I will see who will reply to it
	* Why don't I go to the source of the self hosted community itself
	* Just post the project on reddit and get some feedback

Hey Self Hosted Community,

I want to be able to deploy a full homelab, authentication, backups, logs, DNS, VPN access etc... as automated as reasonable. I want to just be able to point at something like Vultr or Kubernetes running on TrueNAS Scale then be able to log in to a dashboard like yacht or portianer with a list of apps I can boot up for the first time.

I have been [personally working on something like this](https://gitlab.com/dentropy/dentropycloud-traefik) and want to get some some feedback from yall, or find the project that does this all already so I can throw away my code. Currently my project deploys on Vultr or a VM. sets DNS records, basic Auth on required applications,  as well as a Yacht instance for oneself to manage apps easily. I have a [roadmap here](https://publish.obsidian.md/ddaemon/dentropydaemon-wiki/Projects/DentropyCloud/Roadmap+-+DentropyCloud). I would not reccomend anyone run it... yet

P.S. Any reccodmentdations for self hosting an Obsidian Vault let me know, the options I tried so far suck

[Fully Automated Homelabs? : selfhosted](https://old.reddit.com/r/selfhosted/comments/zdmese/fully_automated_homelabs/?)

Alright what is next?

Oh ya we did a test deployment earlier.

Ya docker did not start for some reason had to reboot


* [2022-11-30](../../../MyDendronExistence/Daily/Logs/2022-11-30.md)
	* Added static IP addresses
	* Added separate Auth Middleware for each app that needs it
	* Did terraform deployment
	* We have bugs
		* Wrong IP address assigned to traefik container
			* Fixed
		* Auth Middleware does not work for separate containers on separate domains
			* Applying Fix
		* Projects, peertube does not want to work with yacht
			* Moved to Manual Deployment
		* mediagoblin requires .env file
* [2022-11-26](../../../MyDendronExistence/Daily/Logs/2022-11-26.md)
	* Found the problem logging into each application, need a separate middleware
	* We might as well put everything on its own network
	* We doing a 10 network
	* Why the fuck now
	* 10.42.0.0/16
	* Sure
	* Research value of migrating to use Yacht Templates rather than generated docker-compose files
		* Conclusion - Docker-compose is the way to go, simpler, more modular
		* Right now DentropyCloud works great from the CLI AS WELL as Desktop, do we want to change that?
		* Links
			* [Template Variables | Yacht](https://yacht.sh/docs/Templates/Template_Variables)
			* [Yacht Template Labels](https://yacht.sh/docs/Templates/Templates#labels)
			* [140+ Portainer App Templates for LinuxServer.io Docker containers : selfhosted](https://old.reddit.com/r/selfhosted/comments/mn1223/140_portainer_app_templates_for_linuxserverio/)
* [2022-11-22](../../../MyDendronExistence/Daily/Logs/2022-11-22.md)
	* Do we want to tar ball every app and send it over one by one or just scp/rsync the entire directory
	* Tar ball every app would be ideal, and compatible with S3. We can delete the backup when complete this way too.
	 * Are we going to have to say what directory maps to what app?
	 * No we are just going to stop all containers then zip up every folder that is there as well as go through the list of actual volumes
	 * That works
	 * Use bash?
	 * Of course
	 * Put date of backup
	 * Duh
	 * backup.sh
	 * Of course
	 * Use CLI arguments
	 * Not yet
* [2022-11-18](../../../MyDendronExistence/Daily/Logs/2022-11-18.md)
	* Now have DNS records set in terraform
	* Not doing block storage anymore for MVP, plus Toronto location does not have Block Storage anyways
	* TODO
		* Import .env files
		* Up / Down Script
	* We got the Up Down Script
	* Now to import  the .env stuff
	* Completed all this stuff, next is backup and restore
* [2022-11-17](../../../MyDendronExistence/Daily/Logs/2022-11-17.md)
	* What is easier, use cloudflare, or use cultr
	* Waaaay less moving parts with vultr, don't need to get three keys just say change the nameservers
	* 
* [2022-11-15](../../../MyDendronExistence/Daily/Logs/2022-11-15.md)
	* Do we want to have ports open to all our applications and use a firewall
	* Do I want people to one click deploy on local network without DNS?
		* YES
	* Also literally no one uses this application
	* Also requiring peope to use a firewall isin't asking too much
	* What port range do we want
	* Let's use 42000 - 43000
	* Why so high
	* Cause no one scans up there, and is memberable
	* Alright are we just going to increment the ports?
	* Yes why not
	* Do we reoganize all the docker-compose files first!?!?!
	* Ya sure
	* Mediagoblin  and zincsearch and qbittorrent require username and passwords to be set
	* Alright where is our checklist
		* Network on top
	* We added hostname to everything
	* Alright where do we want to be 
		* Deploy using Terraform, get two files, one with username password and stuff, and another file for export.conf
		* User can then go log in and run all the apps they want
		* What is the biggest issue stopping from being comfortable deploying this app?
			* Apps requiring config are not managed correctly
			* Ports are not documented
			* Volumes are not documented
			* Backup and Restore is not done or tested
			* DNS Not automated
	* Alright how do we want to deal with the config of stuff?
		* Well you need to know what apps you want to deploy
		* Misskey
		* Why not have a script in the start folder that moves the files to the correct directory
		* Is it that easy?
		* Yes
	* What are we doing with the special misskey .env files!?!?!
	* Do we set the misskey username and password stuff in a .env file!?!?!?
	* Sure why not
	* Alright we still need to move the files
	* We need to subsitute the domain name
	* Alright what's next?
	* Do we start on DNS
	* NO 
	* Do we write the template script
	* YES
	* Also make an app backlog
	* Alright we have the scripts to generate docker-compose files
	* What is next 
	* Well you should go on a walk
	* We need a setup script, for like this entire thing
	* Use your debian script and have a separate setup script here
	* Alright addint to TODO
	* We already did couldinit 
	* You should go on a walk
	* We can test this first
	* Alright
	* Write your .env
	* Put everything on a static IP address
	* Open up ports so DentropyCloud can work via HTTP
		* Actually Don't do this, can be security problem later
	* Everything works no need for Static IP addresses yet
	* We want to actually do the terraform stuff now
	* We want a VPS launched, with cloud init
* [2022-11-13](../../../MyDendronExistence/Daily/Logs/2022-11-13.md)
	* Oh we can generate a custom template for every deployment
	* DING DING DING
	* Wait Yacht has a COMPOSE_DIR
	* Wiat I can hard code a .env file but I am not mounting the path with the correct .env file
	* Are we moving the .env file into the apps folder
	* yacht domain with traefik, need to enable websockets
		* [Problem with websockets on Traefik 2.7.2 and 2.8.0 : Traefik](https://old.reddit.com/r/Traefik/comments/vqhp6e/problem_with_websockets_on_traefik_272_and_280/)
		* [Traefik and Yacht : Traefik](https://old.reddit.com/r/Traefik/comments/lkcfev/traefik_and_yacht/)
		* [Automated reverse proxy · Issue #225 · SelfhostedPro/selfhosted\_templates](https://github.com/SelfhostedPro/selfhosted_templates/issues/225)
		* Switch to use Nginx-Proxy-Manager
		* Turns out I forgot to add yacht service to the actual network
	* Decide on how we want to manage containers docker-compose with yacht (What we already have) or the portainer way
		* Which on is simpler?
			* Definately Yacht, overlay's over everything already there I just need to template in all the environment variables
			* In the end we definately want to auto generate a some sort of environment variable config that can be upload to portainer to be used with app templates
			* We can not use environment variables in portainer without the business edition, looks like yacht will be used in the MVP
	* Completed
		* Apps can now be managed using yacht
		* Better manage .env file
		* Separated apps into different catagory folders
		* Delete all the start and stop scripts that are not needed anymore
		* Updated Static App
		* Decide if we use Yacht or Portainer in MVP
*  [2022-11-12](../../../MyDendronExistence/Daily/Logs/2022-11-12.md)
	* Goals
		* DOCUMENTATION, SCOPING
		* Deploy Yacht with DentropyCloud
	* We have waaay too much useles documentation that is getting in the way of my goal
	* What documentation do we need?
	* We don't even have a reference design fod the documentation
	* Alright what do we want?
	* We want to be able to send a link to someone, explain what the project is in a single sentence, go into detail with 2-3 paragraphs, then we want to have installation instructions, and a roadmap
	* Fill out that Catechism
	* We neeed a better root page for dentropycloud
	* We have not sorted out some files, but we have not scoped out the project
	* You fixed the files but did not fill out the catechism

## [daily.journal.2022.11.08](2022-11-08)

Bought domain names
What apps do I want to run on sfeed.net?
Misskey, Mediagoblin (For Now), PeerTube (For Now), WikiJS (Why Not)
We doing a $10 instance
Yes why not
What domains do we want, misskey, media, videos, and wiki?
Sure why not

Elasticsearch is still running, do we want it?

We should just install on top of that VPS

We want to test the $10, plus we should rewrite the application to using zincsearch

That is going to take like 10 hours

Yes then it can run as a single app in a single container

Is that even desireable

Just get the $10 VPS, and after dentropyCloud get back to work on ddaemon

Alright, $10 VPS

Alright the VPS is launching, then I will set the subdomains manually

You know if you learned gitlab CI and Teraform you could set those programmatically

Yes, I want that level of control in two weeks time

Setting expectations, don't let me disappointed, create that covenant, actualize that covenant, freelancing requires it

Alright we have to search up ram usage for docker containers

Stored in docker wiki page

Wow that was easy

What's next?

Get the IP of new VPS

DNS records set

Now clone that app

Do we want to create a new user rather than doing everything root

Are we profesional?

Yes

Then we do it

Alright we just spend like 45 min trying to open ports on a server we just paid for

Cloud it be Starlink not allowing HTTP through?

Still have problem on VPN, it is the dam server or firewall

I have the same problem on the other server

You have to unblock ports in Debian FUCK ME

And it was the firewall turned on, ufw was set to only allow port 22 in

We got the apps all deployed

What are next steps?

Better documentation
fed.wiki
urbit
Backup and Restore testing

## [daily.journal.2022.11.07](2022-11-07)

Do we want to deploy something as a test?
Not yet.
Do we want to research programmatic DNS?
No not yet, that is a teraform thing.
Do we want to start studying teraform?
No
Do we want to buy a DNS name and set it up on a cloudflare for other people to test with people I know.
YES
What is missing in the documentation?
What missing documentation.
Read the README on github/gitlab.
Oh that, ya it is wrong
Where is your misskey server Dentropy
Ya good point, sfeed.net?
Yes we can use that
$10 VPS
Sure

Stuff TODO

Buy another domain name and setup new cloudflare account for it.
Setup dentropycloud on vultr vps with sfeed.net.
How do we measure ram usage on docker?
Better Documentation

Time for walk brb

## [daily.journal.2022.10.15](2022-10-15)

Alright what are we doing today.

Installing dentropycloud on a server of course then installing Media Goblin and PeerTube

We need code-server

What subdomains do we need set?

videos
peertube
mediagoblin
media
public 

Now let's install peertube, [wiki.software.list.PeerTube](../../Software/List/PeerTube.md)

The mediagoblin app will not forward traffic through trafik

Restarted trafik and mediagoblin

Checked my working config on another server that is currently running

What is missing here?

Wrong DNS settings fuck me.

Alright let's let those sit in.

Now what is next?

Peertube is it running?

Nope it keeps crashing

Error:

"message": "\"http://undefined:9000/accounts/peertube/following\" is not a valid following url."

Alright seems like there is a URL missing in the .env file

Everything works for media goblin, just need to wait for DNS to take so the HTTPs cert can arrive

Got another error from peertube, "message": "UserModel.email cannot be null"

We get the peertube client launching but we get the following error when trying to login 

Cannot retrieve OAuth Client credentials: undefined. Ensure you have correctly configured PeerTube (config/ directory), in particular the "webserver" section.

[Cannot retrieve OAuth Client credentials: undefined · Issue #3691 · Chocobozzz/PeerTube](https://github.com/Chocobozzz/PeerTube/issues/3691)

Please check your reverse proxy correctly forward the Host header:

root
rutuhogubobutizo

Still have Cannot retrieve OAuth Client credentials:

Searching

Still have Cannot retrieve OAuth Client credentials traefik docker

https://stackoverflow.com/questions/55679620/traefik-docker-not-setting-x-forwarded-headers


traefik.frontend.passHostHeader: true

[federation not working with traefik · Issue #3733 · Chocobozzz/PeerTube](https://github.com/Chocobozzz/PeerTube/issues/3733)

[Cannot pass host header · Issue #3822 · traefik/traefik](https://github.com/traefik/traefik/issues/3822)

[Invalid client: client is invalid · Issue #3151 · Chocobozzz/PeerTube](https://github.com/Chocobozzz/PeerTube/issues/3151)

root
feqarihesesiroqo

The login works when I set PEERTUBE_WEBSERVER_PORT=80

The http site does not work though

jatiwevemetuhanu

Turns out postfix is not required

Mega code commited

## [daily.journal.2022.10.13](2022-10-13)

Yesterday we got mediagoblin up and running on my phisical server.

Today we are going to get peertube up and running on a VPS.

Let's get [wiki.software.List.Code Server](../../Software/List/Code%20Server.md) installed on the VPS

Then we set the DNS records

Then we install media goblin as a test

Then we write the code to install peertube.


## [daily.journal.2022.10.12](2022-10-12)

Apps to add

* In house DNS server
* [Software.list.mediagoblin](../../Software/List/mediagoblin.md)
* [Software.list.mailcow](../../Software/List/mailcow.md)
* [wiki.software.list.EVM.Audiobookshelf](../../Software/List/Audiobookshelf.md)
* [wiki.software.list.PeerTube](../../Software/List/PeerTube.md)
* Some VPN Solution
  * Wireguard
  * OpenVPN
  * Nebula
* Matrix Server
  * [Software.list.matrix-docker-ansible-deploy](../../Software/List/matrix-docker-ansible-deploy.md)
* [Software.list.ethereum2-docker-compose](../../Software/List/ethereum2-docker-compose.md)

Alright what are we doing next?

Are we getting a VPS to manage all this stuff?

Are we buying a couple new domain names for testing?

Yes bought a couple.

What next?

Are we installing everything in a VM or in the cloud?

We want other people to be able to access everything so probably the cloud.

We also need the Ethereum Node

Ya let's do that first.

Do we want a Ethereum node locally installed.

I found [stereum-dev/ethereum2-docker-compose](https://github.com/stereum-dev/ethereum2-docker-compose) which makes things super easy to do, just on a separate node.

There is even a desktop app on their website [stereum - ethereum node](https://stereum.net/)

How fast is your internet on your machine?

230 MBPS

Alright make a VM and install this stereum app.

This should be logged in the [projects.ens indexing.logs](../ENS%20Indexing/Logs%20-%20ENS%20Indexing.md) not here

Who cares. I am the only person who is going to ever read this. 

Alright we still going to install the other apps?

We should add audiobookserve as I already have it installed on the server in the basement.

Ya go ahead.

Alright one app done, what is next?

Peertube or Media Gobin

Media Goblin is a single service so that one.

We doing this locally or on a VPS

Let's do it locally, but first we need to forward our new domains to cloudflare. Ah the irony of centralization

20 minutes later

And I installed media goblin rather than updating DNS

Let's actually go fix it now

The new domains are now forwarded to use Cloudflare.

What is next?

We install peertube

We should do that with correct DNS

Do we want to use that second PC I have in the basement?

Ya why else is it sitting there.

Time to head into the server closet I guess.

I literally bought that server, desktop PC, to be used as an Etheruem node

Wait I have that VM I just finished making

I don't have a spare drive to store the entire ethereum blockchain on.

Alright we are running Prysm from 

[stereum-dev/ethereum2-docker-compose](https://github.com/stereum-dev/ethereum2-docker-compose) 

That project needs to be in the software section

Here you go [Software.list.ethereum2-docker-compose](../../Software/List/ethereum2-docker-compose.md)

Alright what's next.

Ping my domain and set it nameserver migrated.

Well that was fast, I thought it would take hours.

What are you going to do with that domain?

Is it time I drop ionos from hosting my shit and move over to linode?

It's up to you bro.

Well it is a static site, I do want object storage

Dude don't touch object storage with Dendron at this point.

I still want a CDN to post images and crap to

That is literally what media goblin is for.

Ya but one could also just create a nice frontned for S3.

Does S3 do videos and comments.

It can but you would then need a VPS for auth...... bad idea

Ya just install mediagoblin.

I can just install media goblin on my VPS

Crap you are right let's do that
## 2020-12-29

### 15:41

*   Was actually like 17:00 ish but not gonna fix that now
*   I have three network levels.
*   Public -> Home (Bell Router) -> PaulNet (OpenWRT Router)
*   So how do I want to connect to these services, I should not require having multiple DNS and Proxy servers
*   Well I do need a public and private proxy server. But I should not require a DNS server for the docker network and the Home network. Also do I want all my services and networking available from the Home Network?
*   I do want all my media and stuff available on the Home network but I do not want the NFS shares for my docker containers there.
*   I guess I can set up a firewall to allow SMB traffic to unraid and not SMB traffic.
*   Well I am not routing from the home network to Paulnet therefore I can just port forward the SMB stuff to Unraid and not the NFS stuff.

### 17:26

*   It is really a waste of time to log the time I am working on here with time stamps. The best I can know is I was working on PaulNet for like an hour and a half.
*   Okay so my disks are not paritied, do I buy another 4TB hard drive?

### 18:52

*   nmtui is not install on debian and requires one to configure additional packages to install it therefore I am just going to install ubuntu
*   I have the ubuntu VM being created right now, now the question is how do I want to manage the drives?
*   Like do I want to use NFS drives for all mah docker containers, hell why not.

### 20:06

*   I have learned is is easier to mount the NFS drive to the system rather than use a NFS driver

### 20:42

*   Finally fixed the nextcloud deployment
*   I guess I simply need to practice deleteing everyhting and seeing if I can bring it all back.

2020-12-30
----------

### 16:15

*   [Tutorial: How to use Draw.io to create a Network Diagram for FREE! (Part 1) -...](https://www.youtube.com/watch?v=aNdjYRLSZTc)
*   Okay so Trilium is dead and so is Gitlab
*   This entire homelab project was not correctly scoped
*   Also running a VM beside unraid is counter productive, unraid has docker built in
*   Gitlab is up again after rebooting it twice
*   Trilium is up again after rebooting it
*   I need a reboot script

### 16:59

*   I got the dns and jellyfin port forwardeded
*   I need to get some DNS certs and configure nginx
*   So I can have .local domains on the 192.168.3.0/24 network and I can hook up nginx with a real domain that connects from the home network

### 20:26

*   Jellyfin is sucesfully running and Felix has tested it. I also made Aidan an account.
*   I got booksonic up and running, it is now what I want I want something custom I can annotate, dam that will be a lot of work.
*   I also want it to keep track of where it is in the actual book using TTS and stuff.
*   DNS won't change within the homelab
*   TODO for next time
    *   [{OpenWrt Wiki} Using multiple public IPs on wan interface](https://openwrt.org/docs/guide-user/network/wan/multiple_public_ips)
    *   Backup and Restore containers
    *   Try transfering jellyfin to VM
    *   Scoping this project with a blog post
    *   Write tutorials for what I have learned so far

2021-01-02
----------

### 17:16

*   Route is not working from router

2021-01-09

17:05

It is pretty clear to me that the most important thing I can work on for the Homelab is to document the dam thing.  
How do you want to document the dam thing?  
I can't decide if I want to document it in MyExistence or somewhere else. IDK what other tool would work for documenting MyExistence.  
Dude stop acting like a split brain patient. Document it here.  
Thanks

17:21

Paul you have to set out with a specific goal.  
I need to document the infrastructure.

17:38

I have completely fucked my code base for DentropyCloud.  
What did you do to fuck up your code base.  
I added the swag config and I also did troubleshooting on the master branch.  
How about you pull master from github and make a new deployment. There is nothing important on there after all right?  
True, I'll do that.

18:03

I need to merge the gitlab.com and gitlab.local deployments. I do want my system to be completely modular. All I need to do is set variables for docker-compose

18:56

So do I want my swag config on the NFS server?  
Well if I am going to put Trilium on the NFS server I have no excuse to not put swag.  
I am backing up the trilium application itself so I guess I do not need trilium backed up via NFS.  
Then where am I putting the docker stuff on the VM itself?  
`/SRV` I guess.  
That works  
Besides for trilium the other applications do not need to be stopped when backing that folder up.  
This sounds secure enough for me

20:40

Seems like we got a reasonable amount of work done here. What's next?  
I need a way to easily manage which services are routed publically and privately. I also need to get the Jellyfin server on the VM rather than the ProxMox Server.  
Cool go add it to the TODO list


---
id: 5j4mp7weiy9cs0u3kse16mt
title: ddaemon webapp logs
desc: ''
updated: 1641593961835
created: 1637430960557
---

* [wiki.ddaemon.monorepo.backlog](../DentropyDaemon/Monorepo/backlog.md)
* [wiki.ddaemon.monorepo.docs](ddaemon%20docs)
* [wiki.ddaemon.monorepo.Roadmap](DDaemon%20Webapp%20Roadmap)

## Template

**Next Steps / Reminders**

**Summary of Work**

**Logs**

**Thinking**

## [daily.journal.2022.01.07](2022-01-07)

**Next Steps / Reminders**

* Error correction in the backend, typescript style
* User Stories for Queries
  * #dentLog video
* [ddaemon.monorepo.ddaemon.design.modular query builder](Modular%20Query%20Builder)
* Document data pipeline for keybase
* Fix up the Schemas to be more accurate
* Discord Data Visualizations
  * Do specific users and channels
  * Then do URLs, and Attachments
  * Reactions is going to requires its own parsing and stuff, the [wiki.ddaemon.monorepo.bindings.discord.schema](Discord%20Schema) is not implemented how I want it
  * Then make it work with as many graph's as [wiki.software.List.Apex Charts](../../Software/List/Apex%20Charts.md) supports

**Summary of Work**

**Logs**

* 10:47
  * Document the keybase data pipeline
  * No that is already documented good enough
  * But we need to export a tone of keybase teams and view them
  * Ya I should totally do that shouldn't I
  * Alright let's just write the next discord feature
  * Which feature
  * Well we gotta fix the user search
  * We can fix that later, requires caching
  * I should totally work on user stories
  * Next time, get feature parity with keybase binding
* 10:54
  * What feature are we doing
  * Specific user first
  * Wait we need a modular query builder
  * Yup to the design page
  * [ddaemon.monorepo.ddaemon.design.modular query builder](Modular%20Query%20Builder)
* 11:05
  * I do not see the number of mentions, urls, or attachments anywhere
  * Also how do I do per capita stuff? Do I just get a list of all messages from a user and divide it by what? What depends on what per capita you are measuring. User recieved most reactions per capita? Attachments per capita? Embeds per capita? Mentions per capita? Replies per Capita? This can be done in a double query
  * How do we test the query builder
  * Call it from a new button somewhere or when something loads
  * What component needs it
  * The graph
  * Import it then call it
* 11:31
  * I got the discord query builder working
  * Gotta test the aggs
  * Wait do I want to do basic aggs again
  * Ya why not you need to look it up in the docs anyways
  * Also it is easy to remember from the schema and also more modular
* 11:33
  * Now going to test the basic aggs on a query then replace most_messages_per_user and most_message_per_channel with the query builder
  * Gotta piss first
* 11:36
  * Alright now to test aggregating users
* 11:54
  * Got to do something else
  * Size issue remember that
* 15:22
  * We need to change those functions out
* 15:31
  * We need to leave that the way it is because the backend is actually processing the data a bit
  * Is it a problem that the backend is processing the data or should we do that in frontned?
  * No API is better otherwise user get raw access to database
  * Ya bad idea
  * The generalized function can be used within the backend itself rather than other functions
  * Alright time to get the specific users and specific channels
  * What about how the we can't query all the users
  * That's an entire sprint
  * That is this sprint
  * Oh fuck that is a hard one we are going to have to do a rest query for everything the user types in
  * Good learning experience
  * We also need a generalized guild page, list number of channels, messages, users, all user half life etc.. etc...
  * Of crap this thing is way over my head, but IDK where to go
  * Become the protagonist of your own life, and make a dentLog video
  * Okay let's reprioritize everything in some sort of project management software
  * I hate project management software because I can not get the data to query
  * Dude you are trying to build the tool to query the data in the project management software, also no one is going to care about those dam logs
  * Alright, so I need to go on epal and explain this project to someone as well as NFTs
  * The priority has to be user stories and MVP
  * Come on you can do specific user and topic queries
  * But I can not search users
  * Just do it so you can show it off, and render all the different graphs
  * Alright
* 15:50
  * Alright what is the problem
  * I need to set a variable in the context then read it in the rendering component then call the backend with the right data
  * The initial variable it set from the right sidebar component
  * What does the return object look like?
* 17:18
  * There comes a point when you need to give up and just write the queries yourself, it is like writing raw javascript

**Thinking**

## [daily.journal.2022.01.06](2022-01-06)

**Next Steps / Reminders**

* DOCUMENT DATA PIPELINE
* Scrape more servers, get a procedure
* Fix up the Schemas
* Discord Data Visualizations
  * Do specific users and channels
  * Then do URLs, and Attachments
  * Reactions is going to requires its own parsing and stuff, the [wiki.ddaemon.monorepo.bindings.discord.schema](Discord%20Schema) is not implemented how I want it
  * Then make it work with as many graph's as [wiki.software.List.Apex Charts](../../Software/List/Apex%20Charts.md) supports

**Summary of Work**

**Logs**

* 11:33
  * Gotta document how each data pipeline works
  * [ddaemon.monorepo.datapipelines](Datapipelines)
  * Then we probably gotta link that shit in the READMEs
* 11:33
  * Gotta document how to scrape this shit
* 12:18
  * I got my binding instructions for discord
  * But now I need my webapp instructions
  * Just leave them in the repo until further notice
* 12:23
  * Alright since we renamed some folders we need to update the instructions
  * Do we want to have any documentation in the README files?
  * Nope all on ddaemon so things can be linked and crap
  * Alright then we should have the file named README on the binding
  * Shit that makes sense
  * This is useless thinking we need to document the datapipelines
* 12:27
  * We still need the READMEs but we want to document how to use the software in the wiki, cause docs
  * What is the relationship between docs and READMEs
* 12:33
  * Alright I guess we need the README both places then the docs somewhere too
  * Can the README be the datapipeline
  * Ya sure why not just sort this shit out
* 12:42
  * We fixed the README issue
  * Should we call this ddaemon app rather than webapp?
  * That may be getting too far ahead of ourselves, plus that is just a refactoring away
  * Alright we still need to document the git binding
  * No we do that on the weekend
* 12:48
  * Alright time to get started on the binding-discord I guess
  * What are you going to do for the discord binding?
  * We need to design the backend API query builder
  * Fuck that, going on a walk first
  * First think what the requirements are
  * Where do we document this shit
  * Design I guess

**Thinking**

## [daily.journal.2022.01.04](2022-01-04)

**Next Steps / Reminders**

* DOCUMENT DATA PIPELINE
* How many users in a guild
* Scrape more servers, get a procedure
* Fix up the Schemas
* Discord Data Visualizations
  * Do specific users and channels
  * Then do URLs, and Attachments
  * Reactions is going to requires its own parsing and stuff, the [wiki.ddaemon.monorepo.bindings.discord.schema](Discord%20Schema) is not implemented how I want it
  * Then make it work with as many graph's as [wiki.software.List.Apex Charts](../../Software/List/Apex%20Charts.md) supports

**Summary of Work**

* Finally learned how to do a multi match search in elastic

**Logs**

* 14:53
  * The backlog needs to be better managed
* 15:00
  * The backlog does not make sense 
  * Let's get the Next Steps into it
* 15:02
  * Time to get the graph rendering
  * What is needed to do that?
  * I need to find the component that is reading the graph
  * No you need to get the data into the frontend in the correct format
  * Thanks that's in the backend function
  * Open up the code and look at the backend function
* 15:10
  * I need to store the discord channel, user, and guild ID's as well as the name in their own reducers
  * This is getting pretty complicated
  * So is life
* 15:18
  * We need to store the ID for guilds, users, and channel's in a reducer
    1. Create the Reducers
    2. Set the reducers in the right area
    3. DONE
  * where do we set the Discord ID and stuff
  * IDK look it up, DiscordSidebarLeft.js
* 15:36
  * Alright I got the ID for the users, guilds, and channels
  * Now I need to feed them into the rendered graph
  * So let's get a plceholder graph in here
* 15:53
  * I can't get the sidebar on the right side, it is down a but
  * Put an absolute position
  * Absolute position does not work
* 16:18
  * I got the box issue fixed and things are rendering nicely, just need to read code all the way through
  * Now to get the graph data in the correct format
  * We have an issue rendering the graph, it does not have the correct context to render
  * Force rerender button!?!?
  * Yes
* 16:56
  * Now rendering the graphs
  * Need to convert users to guilds
  * Do this on the backend
  * How though recursive query
  * Ya that's why you do it on the backend
  * I need a list of all users but how many are there!?!?!?
  * This should be rendered in the overview
  * Fuck another feature
  * We just loop through the user and do a query if we do not know them
  * Fuck it we do it in the front end
* 17:05
  * Too many users for the frontned
  * Getting the usernames has to be done on backend
  * Recursive query
  * Ya or we can match them all at once
  * Match 32 things with a list
  * Sure why not
  * [wiki.ddaemon.monorepo.bindings.discord.queries](Discord%20Elastic%20Queries)
* 17:38
  * I got the most messages from a guild working, now I need to break it down even more
  * So do we reimpliment the code we used that could generate queries on the fly!?!?
  * Ya basically but in the pseudo backend API
  * Okay what is required for this!?!?
    * First let's get scraping a couple more servers
    * [MyProjects.Discord Scraping](../../../MyDendronExistence/MyProjects/Discord%20Scraping.md)
* 17:51
  * Started organizing the scraping need to do that priority next time
  * Now what were the most queries I was doing?
  * We were doing
    * Messages across channels
    * Users across channels
    * Users across channel
    * Channel across users
  * Alright what are the corresponding fields for each of theses
    * [wiki.ddaemon.monorepo.bindings.discord.schema](Discord%20Schema)
    * Users are user_id
    * Channels are message_id
    * guild is guild_id
* 17:58
  * Let's go find the Keybase code
  * QueryBuilder.js is the file, and it is not in the keybase binding even though it should be
  * We need a diagram to map out the user flow
  * Just use Thinking
* 18:27
  * Now how do we go about switching the graph data
  * Seems like we need a switch statement that fetched different data
  * Ya that seems about right
* 18:37
  * Next I guess I can do specific users and channels

**Thinking**

* We were doing
  * Channel's across users
  * Users across channels
  * Users across channel
  * Channel across users
* So which one is first?
  * We need to choose on of multiple things to aggregate
  * Just input the aggregate field and problem solved
  * What about matching?
  * Ya you either match a user or a channel
  * We now have users across channels
  * Now we need 
* Rephrase that
  * Users
  * Channels
  * Specific User
  * Specific Channel
* So now we aggregate channels

## [daily.journal.2022.01.04](2022-01-04)

**Next Steps / Reminders**

* Get the Graph Rendering
* Discord Export Procedure
* Discord importer names the channel_id user_id
* Reference design for backend API

**Logs**

* 00:11
  * Caching!?!?!?
    * I guess we need another system to cache everything!?!?
    * Seems like I can just use Redis but if we are using key value store we can just use elasticsearch, just need another index
    * We need a system diagram before we do anything else
    * What needs caching?
      * All queries should be cached
      * We can hash the query in the backend use that an an ID in another index
      * We need to have each feature tracked somewhere
      * The same query can be used for different bindings
* 00:23
  * Caching does not really matter until we reimpliment everything for discord
  * We really need to scrape a couple more discord servers
  * Where are the discord servers saved?
* 00:29
  * Found the exports where they were supposed to be, just got to read the file names
  * Now let's do the most messages per user discord style
  * Pseudo code!?!?
  * Yes
* 00:34
  * We need to store the user ID's to usernames object in the context somewhere
  * Alright open the code up
  * What component do we want? What component get's the list of members on a team?
  * DiscordSidebarLeft.js calls the function from the fake backend
  * The users team and guild are already saved to the context
  * Time to test that
  * We got the user ID's as well as their name
  * But the data structure is not set up correctly, we need to loop through in order to find ID for each user can't just look them up
  * Alright do we save the userID to another part of the context or the same object
  * Other part of the context makes more sense
  * Alright USER_IDS here we come
  * Do we process this in the frontned or the backend
  * Frontend
  * In the DiscordSidebarLeft.js component?
  * Yes, just loop through and have a inverse index
  * Wait do we just want to store that?
  * NO WE DO NOT WE NEED DATA FLOWING BOTH WAYS
* 00:50
  * The ID to username reducers are now in place
  * Alright are we importing the right sidebar from keybase-binding!?!?
  * Yes and we will use ApexCharts
  * Alright what is the components for the Right side bar
    * KeybaseControlsGraphBar.js
  * Alright just copy it over I guess!?!??
  * Into what component!?!?
  * Do we create MostPer as one component?
  * No we need a better way to name and organize our components
    * We need to map out the features better
    * Wait that is a dataviz components
  * So the component will be named DiscordDataVizMostPer.js and DiscordDataVizMostPerSidebar.js
  * Create these components and import them into the correct components to be rendered, go through the checklist below
    * What is the pattern for naming the Data Visualizations
    * Of these need to be listed somewhere, the names for them all
  * We do not need them listed we just need to remember to look in DiscordSidebarLeft.js and KeybaseQuerySelect.js
* 01:09
  * We need to switch which component is rendered when we click on the other graph
  * Do we have a rerender reducer!?!?
  * YES why not, any other way to do it
  * No, let's check the reducers
* 01:12
  * Of crap I already wrote the code for that
* 01:19
  * Alright what now?
  * We need to get the data into the correct format for ApexCharts
  * Oooo it is going to be easy to change the chart type
  * First import the side bar
  * Second get example of what the data looks like
  * Third elastic query template time
* 01:22
  * Side bar is where again?
    * KeybaseControlsGraphBar.js
* 01:35
  * Got a sidebar that errors out because the reducers are all wrong
  * What does the data look like?
  * [Column with Data Labels – ApexCharts.js](https://apexcharts.com/react-chart-demos/column-charts/column-with-data-labels/)
  * [wiki.software.List.Apex Charts](../../Software/List/Apex%20Charts.md)
* 01:41
  * We need two lists, one for users and one for the messages they have, the rest of the graph data is template stuff
  * Alright elastic query time
  * Where does the query go?
  * [wiki.ddaemon.monorepo.bindings.discord.queries](Discord%20Elastic%20Queries)
  * What query do we do first
  * Most raw messages of course
  * Alright where is the elastic one
  * [wiki.ddaemon.monorepo.bindings.keybase.queries](Keybase%20Elastic%20Queries)
  * Dude just write the query, you gotta memorize this stuff
  * Alright we just need a basic aggregation
* 01:50
  * Alright we got our query, in a double aggregation so we can see the channel's people post in as well
  * Cool now put that shit in a graph
  * Okay so in order to do that we need to create object with the user_id as the key
  * Then we get a list of all the message
  * Then we loop through the keys and get the users and store it as a list
  * Then template these graph's up
  * Alright where does the backend fit into this?
  * Well we have inputs to this function, they are the guild, aaand that's it
  * So just create a function and import it into the rendered component
  * How will we then update it
  * Just go through the list in the backend.js file
  * Alright that works, so each graph is its own backend
  * Ehhh I see your point, we need to feed the JSON into the backend component
  * Ya
  * So we just create a query component with a name for the data the user wants
  * So are we designing a backend API right now
  * Yes sadly, we also need to research a reference deisgn
  * FUCK
  * We POC this shit and do that research later
  * So we just take query_name and the other required inputs
  * Ya seems like it
  * Alright what is the function name!?!??
  * backend_api
  * really!?!?
  * Why not?
  * Okay let's code this shit
  * We need to indicate dataset as well
  * This needs to be documented somewhere
  * [wiki.ddaemon.monorepo.docs](ddaemon%20docs)
  * No one cares about me
  * Then make them care
* 02:03
  * Alright so we have this [](backend_api%7Cwiki.ddaemon.monorepo.docs#backend_api)
  * Need to list the different inputs for this
  * How do we processes this stuff in the backend
  * switch or if else loops
  * Case statements, let's input those
  * Wait do we need to do discord backend stuff!?!?!?
  * No not in the current code, just make sure it is fed into the function for later use
  * Cool so I just use a switch statement to find which query to do
  * Ya that seems like it
  * Is there a better way to do this
  * You can store functions in a object
  * Dude don't get fancy
* 02:13
  * Alright we got the backend_api function complete
  * Paul stop your brain is running on low
  * Okay next steps

**Thinking**

* How the graph's for most per are made for keybase
  * Do one query
  * Parse JSON into correct format
  * Render
* How the graph's for most per should be made
  * Get object of user ID's to usernames
  * Do one query
  * Parse JSON into intermediate format
  * Plug in userID's into the appropriate area
  * Render
* We need to store the user ID's to usernames object in the context somewhere

*Checklist*

1. Write down the name of the data visualization...
  * reducer value, to get and set: MOST_PER
  * file / component name: DiscordDataVizMostPer.js and DiscordDataVizMostPerSidebar.js
  * title: "Most Per"
1. Add button to press
  * DiscordSideBarLeft.js for discord
  * KeybaseQuerySelect.js for keybase
1. Run reducer function when button is called to update context
  * DATA_VIZ_SELECT for discord
  * GRAPH_CONTROLS for keybase
1. Create component
  * Copy the template component
  * Rename the file
  * Set the correct name of the component function
1. Import component and add if statement to render the component
  * DiscordRenderDataViz.js function renderDataViz for Discord
  * KeybaseRoot.js function renderGraph for keybase


## [daily.journal.2022.01.03](2022-01-03)

**Next Steps / Reminders**

* Start thinking about caching
* Most Per Graph Discord Style
  * Plan out before coding
* Document where the backlog is
  * Keybase
  * Git

**Summary of Work**

* Work Done
  * Reviewed how to add a data visualization and added one
  * Got recursive time based queries working
  * Got Apex Charts working working in the frontned
  * Hooked up time based query to ApexCharts and rendered a hard coded query

**Logs**

* 03:06
  * Need some pseudo code
  * No we need a problem statement
  * Number of messages for the last X days for a guild
  * Hard code the guild
  * Nope but
  * [](Get%20all%20message%20from%20a%20specific%20time%20range%7Cwiki.ddaemon.monorepo.bindings.discord.queries#get-all-message-from-a-specific-time-range)
* 03:13
  * We can't just substract days from a date?
  * Or can we
* 03:22
  * Alright import that function into..... which component
  * DiscordDataVizMessageFrequency
  * Call the function, save it as a react hook, what kind of hook?
* 03:43
  * Where is the fucking broken component
  * The npm dependency from hell
* 04:05
  * Got the component working, not the specific one though
* 04:47
  * I got the recursive time queries working
  * I am going to need to cache this stuff soon
  * Alright why are we doing this?
  * We want the user to select the month then get the activity from that month
  * Then we can recursively do it for the year
  * That works, so we input month not day
  * Yup then we do a heat map based on the days
  * Can we generate a heat map right now?
  * Yes but we need to input a month first
  * Alright so we need to get out number of days in a month function in here then input a month rather than number of days
  * No we just need another function


**Thinking**

``` javascript
let results = {
    "2021-01-1": 26,
    "2021-01-2": 24,
    "2021-01-3": 160,
    "2021-01-4": 143,
    "2021-01-5": 110,
    "2021-01-6": 83,
    "2021-01-7": 133,
    "2021-01-8": 45,
    "2021-01-9": 42,
    "2021-01-10": 57,
    "2021-01-11": 213,
    "2021-01-12": 546,
    "2021-01-13": 217,
    "2021-01-14": 360,
    "2021-01-15": 47,
    "2021-01-16": 37,
    "2021-01-17": 158,
    "2021-01-18": 304,
    "2021-01-19": 170,
    "2021-01-20": 151,
    "2021-01-21": 186,
    "2021-01-22": 7,
    "2021-01-23": 28,
    "2021-01-24": 159,
    "2021-01-25": 177,
    "2021-01-26": 158,
    "2021-01-27": 162,
    "2021-01-28": 162,
    "2021-01-29": 12,
    "2021-01-30": 52
}
let graph_data = []
Object.keys(results).sort().forEach((date) => {
  graph_data.push({
    "x":date,
    "y": results[date]
  })
})

console.log(graph_data)
```

## Adding a data visualization

1. Write down the name of the data visualization...
  * reducer value, to get and set: MessageFrequency
  * file / component name: DiscordDataVizMessageFrequency
  * title: "Message Frequency"
1. Add button to press
  * DiscordSideBarLeft.js for discord
  * KeybaseQuerySelect.js for keybase
1. Run reducer function when button is called to update context
  * DATA_VIZ_SELECT for discord
  * GRAPH_CONTROLS for keybase
1. Create component
  * Copy the template component
  * Rename the file
  * Set the correct name of the component function
1. Import component and add if statement to render the component
  * DiscordRenderDataViz.js function renderDataViz for Discord
  * KeybaseRoot.js function renderGraph for keybase


## [daily.journal.2022.01.02](2022-01-02)

* 10:57
  * Let's fix up the keybase binding
  * It does not process everything into the appropriate groups
  * Is this how I grab the rope as I am falling down?
  * This project is too big, no one cares, I am too scatterbrained
  * Just sit down and work on it
  * What is wrong with the keybase binding
  * Let's go take a look at the part
  * Fuck it do the Discord Binding

## [daily.journal.2021.12.28](2021-12-28)

* 18:19
  * Let's do our first time based query with elasticsearch
  * What kind of time based query?
  * We can do the last 25 days for example
  * That requires 25 queries
  * I know but it is the simplist
  * Let's do daily activity over the last week
  * Let's do a recursive query for the last month
  * We can hard code and do the month of November
  * We need a date library is that built into javascript?
  * Alright can we get the day of the week from the actual date
* 18:36
  * Before we write the query to get all the date ranges let's write a basic raw query
  * How about a simple query, everything from november 1st 2021 on all discord guilds
* 18:55
  * I got the time based query working
  * Now I need to decide on a data structure for managing the dates
    ``` txt
    activity_by_day = [
      [[MON], [TUES], [WED], etc.]
    ]
    ```
  * Looks like that will work
  * So we just gotta loop through the data starting from the correct day of the week
  * Alright let's convert the first day of a month to a day of the week in javascript
    ``` javascript
    0 for Sunday
    var dt = new Date("December 25, 1995 23:15:00");
    console.log("getDay() : " + dt.getDay() ); 
    ```
  * Alright we can create the final data structure for dates, come up with inputs for the function storing them in the data structure, loop through data structure getting the data from elasticsearch and finally displaying the data
  * So let's write the script out and use November 2021 as an example
  * Time for a git branch
    ``` javascript
    function daysInMonth (month, year) {
                return new Date(year, month, 0).getDate();
    }
    ```
* 19:17
  * I need to write out out how to add another data visualization
* 19:46
  * Time to add a time based visualization to the discord binding
* 20:08
  * We not have a procedure for adding the new data visualization components
  * We have a template component so I don't have to copy paste and remove crap
  * We got the reducer up and running
  * We got a new component to hold all the data visualizations
  * We got the elasticsearch query for a time based stuff working
  * We decided on a data structure for the monthly heatmap
  * We found a heatmap library, still need to test it
  * I need to get some dinner
* REMEMBER BRANCH frontned-discord-activity

## [daily.journal.2021.11.20](2021-11-20)

* 12:50
  * QPS
    * The query formatting thing does not work as expected
    * User stories for the lists
* 12:55
  * QPS
    * Get all the list user stories in the UI in the same order as they are documented in User Stories
    * That is in the Query something component
* 13:15
  * QPS
    * Time to rethink the reducer for all these lists
    * All these lists need to go in a folder
    * So these reducers, which reducer do we use for lists?
      * GRAPH_CONTROLS
    * Do we want to use the GRAPH_CONTROLS as the name of the reducer?
      * Nope
    * What about DATAGRAM_CONTROLS
      * What does [wiki.concepts.list.datagram](../../Wiki/Concepts/List/datagram.md) mean?
    * Datagram won't do 
    * DATA_VIZ_CONTROLS
    * Ya I like DATA_VIZ_CONTROLS
    * Time to rename all those reducers
    * Also it is a good time to fix the object reducer stuff because we have separate context's now
* 13:27
  * QPS
    * What do we do about the graph metadata reducer?
    * It work's for not don't over think things, pre mature optimizations
    * Okay so then we need to add all the [](System%20D%7Cwiki.ddaemon.monorepo.User%20Stories#list) components in as separate files
    * No choose ONE and impliment it end to end
    * What about the existing list components
    * Go rename those so they are work with the current framework
* 16:47
  * QPS
    * Gotta rename all the LIST files and add the one's that are not there
* 17:16
  * QPS
    * I guess we need a list dashboard, it is going to require a sidebar that is not mountable. I should have toggles on the app bar to mount or unmount the sidebars
    * I also need to remove unused components
    * So I am going to need a main list component
    * I am going to need a list sidebar component
    * I am going to need a generalized listing component that takes in props
    * The sidebar component will generate all the different queries and save them to the context to be pulled by props
    * Can this all be managed in a single component? Can I send variables up the component tree? Nope just use context
    * Which component do we write first
    * Write the main component, what to name it?
    * Name all the components
      * KeybaseControlsList
        * Have a bunch of radio buttons
        * Start with "User has or hos not posted in Topic or Team"
      * KeybaseSetList
        * Take in the ID's as a list of strings
        * Take in the data object list
    * There is no root component needed
* 17:39
  * The datagrid component I got is so easy to use that we don't really need a separate component for it
  * I just need to use column's and have the state rendered in one part
  * The control's component still needs to be separate?
  * Or can I save the entire list to redux because I can YOLO like that?
  * Saving the rendered list to redux? Or saving the contents of the list.
  * Definitely the contents of the list.
  * Okay but how does the graph render right now?
  * Redux state of course, but the query is done in the actual component rather than saving the data in redux.
  * Decision time, do we save the contents of the Grid component to redux or have the grid component render it
  * The simplest method is to save the grid contents to redux.
* 17:45
  * Alright so we need a new radio button for Query Select
  * We need a reducer name, KeybaseControlsList
  * We need to have the reducer
  * Where is the list of stuff I need to do to create a new component
  * [](Steps%20to%20add%20a%20graph%7Cwiki.ddaemon.monorepo#steps-to-add-a-graph)
  * Requirements
    * Graph name: KeybaseControlsList
    * Graph ID: KeybaseControlsList
  * Add component to App.js
  * Add graph radio button to QuerySelect.js
  * Add to switch statement in App.js
  * Automatically select Topic and Team in the left sidebar
* 17:56
  * Alright universe I have some more requests
  * I need to figure out what the KeybaseControlsList sidebar looks like!?!?!?
  * I need to take a break at that thought but I can get the information I need here ready for next time
  * [wiki.ddaemon.monorepo.User Stories.Lists](dentropydaemon-wiki/Software/Lists)
  * START WITH `User has or has not posted in Topic or Team`

## [daily.journal.2021.11.24](2021-11-24)

* 17:45
  * Time to get `User has or has not posted in Topic or Team` working
  * Need to create a list select component and save it to the redux state somewhere
  * What are the components I need
  * Break down the task
  * We need to have radio buttons to select the query and save the state to redux
  * What component has the KeybaseControlsList, it says right in the rendered UI
* 18:33
  * Finally learned how to do a double aggregation
  * Now I need to find example code for how to do the elastic query
  * Dude you have a query formatter
  * That won't work here cause I got a double aggregation

## [daily.journal.2021.12.04](2021-12-04)

* 13:02
  * [wiki.concepts.list.QPS](../../Wiki/Concepts/List/QPS.md)
    * Remove those other lists on the right sidebar
    * Check if they have been listed already?
* 13:10
  * QPS
    * Time to implement the rest of the lists
* 13:14
  * QPS
    * How do I get the list component to render the default List all users, with they teams they are on?
    * Dude Over Optimization, get the queries in you require a backend before you can worry about the frontend
    * No one read any of this
    * Stop thinking about that
  * QPS
    * Time to ListTeamsUserHasPostedIn
* 14:04
  * QPS
    * Time to get the list of users that have posted in a team
* 14:17
  * I need to get the fields for word count as well as character count
  * Next we are doing URL stats, haha, and then we can welcome pinboard into the frey
  * msg.content.content_character_length
  * msg.content.content_word_length
* 15:17
  * Fix the topic indexing and rendering in the frontend next time

## [daily.journal.2021.12.13](2021.12.13)

* 22:09
  * TODO
    * Get the discord guild and channel index inside elasticsearch up and running
    * Get the select guild, select user, and select channel components up and running in the front end
    * Get some graph's rendered
    * Matrix Client / Bot research
    * Dump data to SQL and Neo4J as well!?!?!?!

## [daily.journal.2021.12.14](2021-12-14)

* Feature to add
  * JSON and CSV export for the table's and graph's

## [daily.journal.2021.12.15](2021-12-15)

Why is graphQL better for the ddaemon dashboard.

I need the data in SQL anyways because IDK how to do the queries on aggregations which graphQL does by the nature of what it is.

Ah makes sense.

So Schema Diagram?

Yes Schema Diagram

``` bash
codium Project\ Management.ddaemon-webapp.logs.drawio
```

What are the issues with SQL?

I can't input a list when there are multiple people responsible for something such as reply, reaction, emoji etc....

Also can't add metadata

Call up a guy on Code Mentor, or how about articulate a question.

The question is how do I match an exact series of terms rather than a single term.

Example please.

Ima make a git repo and ask this question.

## [daily.journal.2021.12.16](../../../MyDendronExistence/Daily/Journal/2017/01/16.md)

Emoji's should have their own position in the graph

## [daily.journal.2021.12.20](2021-12-20)

* We do not need all the messages in both elasticsearch and neo4j. We can though use Neo4J for mapping other types of relationships.
* Paul you need to map out all the queries you want to do
* [wiki.ddaemon.design.ddaemon queries](../DentropyDaemon/Monorepo/User%20Stories/Queries%20for%20DDaemon.md)
* What does [wiki.software.programming language.cypher](../../Software/List/cypher.md) solve?
* It allows for easy querying of reaction usage and stuff
* Or do the reactions go in their own Index and reference the message, I can have multiple reactions referencing the same image
* Maybe SQL is the way to go?

----

* What is best, Elasticsearc, Neo4J or SQL
* Depends on the Query
* Are we going to represent the data in all databases
* Let's come up with a list of queries we want to do
* How are we going to measure agency?
* I guess we can develop the Discord Dashboard a bit further
* Copy everything over you mean?
* Ya then add some more queries
* The problem right now is the reactions
* We can dump the reactions to their own Index in Elasticsearch
* We can dump the attachments into their own index in elasticsearch
* An index is basically a table / list so don't put table/lists inside of table /lists
* Alright so I guess we just update the parser?
* No we map out all the queries we want to do and we just accept that we are going to be replicating the data a bunch of places because that's how SQL would work


## [daily.journal.2021.12.22](2021-12-22)

* 13:10
  * I want to get the Git, Discord, and Keybase Integrations working by next week
  * What does working look like?
  * Minimum expectations
    * Fully documented setup, scraping, and elastic dump scripts
  * Reasonable expectations
    * Migrate to using ChartJS
    * Migrate all existing queries to new Elastic Schema
    * Add a bunch more one off queries
  * Best Case
    * Meta Aggregation Data Pipeline
    * Implemented Job Broker
    * Caching of results
    * and a Discord Bot
  * What does the minimum expectations look like, what is the final product
    * Documentation of project on wiki.ddamon.org
    * Monorepo
      * Bindings
        * Discord
        * Keybase
        * Git
      * Frontend
      * Backend
  * So the code from the other repos all need to be migrated over
  * Should we care about git history
  * Nope, just dump the code, bug google it first
  * We want the histories because I want a log of everything

```
git clone keybase://team/dentropydaemon/ddaemon-monorepo
cd ddaemon-monorepo
git remote add ddaemon-webapp keybase://team/dentropydaemon/ddaemon-webapp
git fetch ddaemon-webapp
git merge ddaemon-webapp/master --allow-unrelated-histories

git remote add discord-binding keybase://team/dentropydaemon/discord-binding
git fetch discord-binding
git merge discord-binding/master --allow-unrelated-histories

git remote add git-binding keybase://team/dentropydaemon/git-to-json
git fetch git-binding
git merge git-binding/master --allow-unrelated-histories

git remote add keybase-binding keybase://team/dentropydaemon/keybase-binding-nodejs
git fetch keybase-binding
git merge keybase-binding/master --allow-unrelated-histories
```

* Now write documentation for every binding as well as frontend and backend
* Document the schema in the repo itself, or do we just link here for documentation?
* I think linking here is fine

## [daily.journal.2021.12.23](2021-12-23)

* 10:58
  * Time to check on the Schemas
  * [ddaemon.monorepo.schemas](ddaemon%20webapp%20schemas)
  * Doing keybase, discord and Git binding as the same time is a waste. Do the git Binding
  * Alright let's open the code


