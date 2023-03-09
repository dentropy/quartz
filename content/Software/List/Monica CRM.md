**READ THEIR PURPOSE ON GITHUB**


* [Monica: Personal CRM Full Review - YouTube](https://www.youtube.com/watch?v=X_203WziBZo)
* [monica - Official Image | Docker Hub](https://hub.docker.com/_/monica)
* [I tried Monica CRM recently. Here's a review for anyone interested. : CRM](https://old.reddit.com/r/CRM/comments/7885hk/i_tried_monica_crm_recently_heres_a_review_for/)

On [2021-04-04](#root/srO6Twtzf3iV/uzplTIVDZSAw/YoxuESCH9CPJ) I spent 4 hours trying to get his software working for my homelab. I can't even get it working on a fresh virtual machine with the default docker-compose.yaml file. Deleting the volumes and restarting, rebooting, uninstalling and reinstalling docker, none of it works.

App:

    In Connection.php line 678:
                                                                                   
      [Illuminate\Database\QueryException (1045)]                                  
      SQLSTATE[HY000] [1045] Access denied for user 'homestead'@'172.18.0.3' (usi  
      ng password: YES) (SQL: select * from information_schema.tables where table  
      _schema = monica and table_name = cache and table_type = 'BASE TABLE')       

MYSQL Database:

    
    2021-04-05T02:53:37.329076Z 52 [Note] Got an error reading communication packets
    2021-04-05T02:53:40.446783Z 53 [Note] Access denied for user 'homestead'@'172.18.0.3' (using password: YES)
    2021-04-05T02:53:40.601138Z 54 [Note] Access denied for user 'homestead'@'172.18.0.3' (using password: YES)
    2021-04-05T02:53:40.648205Z 55 [Note] Access denied for user 'homestead'@'172.18.0.3' (using password: YES)
    2021-04-05T02:53:40.755243Z 56 [Note] Access denied for user 'homestead'@'172.18.0.3' (using password: YES)

    2021-04-05T03:00:46.677586Z 0 [Note] Event Scheduler: Loaded 0 events
    2021-04-05T03:00:46.677904Z 0 [Note] mysqld: ready for connections.
    Version: '5.7.33'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server (GPL)
    2021-04-05T03:00:47.251955Z 2 [Note] Got an error reading communication packets

Monica Troubleshooting
----------------------

* [configuration - The only supported ciphers are AES-128-CBC and AES-256-CBC with the correct key lengths. laravel 5.3 - Stack Overflow](https://stackoverflow.com/questions/39693312/the-only-supported-ciphers-are-aes-128-cbc-and-aes-256-cbc-with-the-correct-key)
* [Laravel: The only supported ciphers are AES-128-CBC and AES-256-CBC with the correct key lengths - Stack Overflow](https://stackoverflow.com/questions/44619357/laravel-the-only-supported-ciphers-are-aes-128-cbc-and-aes-256-cbc-with-the-cor)
* [RESOLVED: MonicaHQ CRM Setup Help? - Docker Engine - Unraid](https://forums.unraid.net/topic/90947-resolved-monicahq-crm-setup-help/)
* [Docker instance behind reverse proxy uses incorrect App Url · Issue #2197 · monicahq/monica · GitHub](https://github.com/monicahq/monica/issues/2197)
