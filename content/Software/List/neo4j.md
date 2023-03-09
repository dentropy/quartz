## TODO

* `codium Software.List.neo4j.drawio`
* [Neo4j (Graph Database) Crash Course - YouTube](https://www.youtube.com/watch?v=8jNPelugC2s)
* [A Look At The Neo4j GraphQL Library 2.0 Release - YouTube](https://www.youtube.com/watch?v=Ww3XclhuaaU)
* How to create a database
* How to put data into the database
* Load CSV file
* [Neo4j APOC Library - Developer Guides](https://neo4j.com/developer/neo4j-apoc/)

## Important Links

* [neueda/awesome-neo4j: A curated list of Neo4j resources.](https://github.com/neueda/awesome-neo4j)
* [Neo4j Cypher Refcard 4.4](https://neo4j.com/docs/cypher-refcard/current/)
* [Neo4j Sandbox | Online Graph Database – No Download Required](https://neo4j.com/sandbox/)
* [Neo4j Browser](http://localhost:7474/browser/)

## Tutorials / Example Projects

* [Neo4j Examples](https://github.com/neo4j-examples?query=movies)

## Install

``` bash
sudo su
apt update && apt -y upgrade
apt install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL https://debian.neo4j.com/neotechnology.gpg.key | apt-key add -
sudo add-apt-repository "deb https://debian.neo4j.com stable 4.1"
sudo apt install neo4j
sudo systemctl enable neo4j.service
sudo systemctl status neo4j.service
# Go to http://localhost:7687/browser/ 7687
```

* Sources
  * [How To Install and Configure Neo4j on Ubuntu 20.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-neo4j-on-ubuntu-20-04)
  * [linux - Neo4j WARNING: Max 1024 open files allowed, minimum of 40 000 recommended. See the Neo4j manual - Stack Overflow](https://stackoverflow.com/questions/20924596/neo4j-warning-max-1024-open-files-allowed-minimum-of-40-000-recommended-see-t)
## [wiki.software.list.docker.docker-compose.templates](docker-compose%20templates)


``` yaml
version: '3'
services:
  neo4j:
    image: neo4j:4.4
    restart: unless-stopped
    ports:
      - 7474:7474
      - 7687:7687
    volumes:
      - ./conf:/conf
      - ./data:/data
      - ./import:/import
      - ./logs:/logs
      - ./plugins:/plugins
    environment: 
      # Raise memory limits
      - NEO4J_dbms_memory_pagecache_size=1G
      - NEO4J_dbms.memory.heap.initial_size=1G
      - NEO4J_dbms_memory_heap_max__size=1G
```

* Default Credentials
  * [localhost URL port 7474](http://localhost:7474/browser/)
  * User: neo4j
  * Pass: neo4j
  * DefaultSet: neo4jneo4j
* [How to install Neo4j with Docker-Compose? | by Thibaut | Medium](https://thibaut-deveraux.medium.com/how-to-install-neo4j-with-docker-compose-36e3ba939af0)
* [Neo4j - Official Image | Docker Hub](https://hub.docker.com/_/neo4j)
* [dockerfile - Docker container with neo4j and password set - Stack Overflow](https://stackoverflow.com/questions/46698316/docker-container-with-neo4j-and-password-set#46703022)
* [How-To: Run Neo4j in Docker - Developer Guides](https://neo4j.com/developer/docker-run-neo4j/)
