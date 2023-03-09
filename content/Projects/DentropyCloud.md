Project source code available at [DentropyCloud-traefik · GitLab](https://gitlab.com/dentropy/dentropycloud-traefik)

## Summary

TL;DR Dentropy Cloud is a tool to make installing apps on a server as easy, secure, and desireable as installing apps on a phone.

The future of applications is the cloud. We may have super computers in out pockets but without a internet connection what are they good for? Turns out most applications people actually use are not really running on ones phone but in a data Center. The data and metadata people generate using any application connected to the internet is usually siloed within said application stopping from leveraging their data to the best of their ability. Basically anything social media runs in the cloud. Most notes apps run in the cloud. Photo apps are all backed up to the cloud. Media apps for music, movies, and TV Shows, e-books, audiobooks, all run on the cloud. What if there was a smartphone in the cloud? Rather than installing apps on ones phone one would install apps on a server. This is like installing apps on google drive, or iCloud, but without the platform lock in.

## Example Use Case

Rather than signing up for a social media account such as twitter or instagram one can get a DentropyCloud instance running Mastadon, or any other compatible fediverse app. You will own your own domain name and server therefore you have absolute control over your data and metadata.   

Rather than getting a gmail account you sign up for a Dentropy Cloud who supplies you a DNS address. Using that DNS address one can install the email app on Dentropy Cloud. The email app is actually an email server with web access. Now the user can go to email.YOUR_NAME.xyz and login. Rather than using Facebook one can install one of the many social media apps on Dentropy Cloud. Some examples include Friendica, Diaspera, Pleroma, Mastadon, or MissKey. Need a office suite like google drive, or office365 then you can just install nextcloud, or Pydio. If your friend is not currently on Dentropy Cloud you can share your instance with them by creating a user for them to use.

## Project Links

* [Design Doc - DentropyCloud](DentropyCloud/Design%20Doc%20-%20DentropyCloud.md)
* [Supported App List - DentropyCloud](DentropyCloud/Supported%20App%20List%20-%20DentropyCloud.md)
* [Logs - DentropyCloud](DentropyCloud/Logs%20-%20DentropyCloud.md)
* [Roadmap - DentropyCloud](DentropyCloud/Roadmap%20-%20DentropyCloud.md)

## Cloud Meets Homelab

Homelabers are people who run servers in their home ranging form a single raspberry pi plugged into their ISP router to multiple seven foot tall servers racks in their basement. Alternatively one can get a five or more dollar a month digital ocean virtual private server if one trusts them with their data. Dentropy Cloud should be able to be installed and take advantage of this wide range of servers and scale the more resources one provides it. Two raspberry pi computers should be better than one without adding complexity. From the perspective of existing homelab users Dentropy Cloud should be desirable by simplifying their infrastructure while not taking away features.

## Dentropy Cloud meets Dentropy Daemon

The data people generate today is spread out accross platforms, applications, the internet, or lost. Many people likely used computer on July 12 2017 but for that person to find what they were up to that day would be impracticle.

