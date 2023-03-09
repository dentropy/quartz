## Build

``` bash
docker build -t ddev .
```

## Full command

``` bash
docker network create treafik-homelab
mkdir app-files

docker stop ddev
docker rm ddev
docker run --name ddev \
    --network traefik-homelab \
    --mount type=bind,source="$(pwd)"/app-files,target=/app \
    ddev

docker exec -it ddev bash
```

## Port Forwarding

``` bash
-p 8080:80
```

[Container networking | Docker Documentation](https://docs.docker.com/config/containers/container-networking/)

## Connect to docker network

```  bash
--network dentropycloud-traefik
```

## Source Code
``` dockerfile

FROM ubuntu
RUN apt-get -y update
RUN apt-get -y install build-essential checkinstall libssl-dev
RUN apt-get -y install net-tools
RUN apt-get -y install bash
RUN apt-get -y install git
RUN apt-get -y install nano
RUN apt-get -y install vim
RUN apt-get -y install wget
RUN apt-get -y install curl
RUN apt-get -y install htop
RUN apt-get -y install lynx
RUN apt-get -y install neofetch
RUN apt-get -y install python3
RUN wget https://bootstrap.pypa.io/get-pip.py
RUN python3 get-pip.py
SHELL ["/bin/bash", "-c"]

# Install nvm with node and npm
RUN touch ~/.bashrc && chmod +x ~/.bashrc
RUN mkdir /root/.nvm
ENV NVM_DIR /root/.nvm
ENV NODE_VERSION 18.12.1

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.9/install.sh | bash
RUN chmod +x $HOME/.nvm/nvm.sh
RUN . $HOME/.nvm/nvm.sh && nvm install $NODE_VERSION && nvm alias default $NODE_VERSION && nvm use default && npm install -g npm

RUN ln -sf /root/.nvm/versions/node/v$NODE_VERSION/bin/node /usr/bin/nodejs
RUN ln -sf /root/.nvm/versions/node/v$NODE_VERSION/bin/node /usr/bin/node
RUN ln -sf /root/.nvm/versions/node/v$NODE_VERSION/bin/npm /usr/bin/npm

# Run infinite loop
RUN echo "while true; do foo; sleep 2; done" > /stay-awake.sh
RUN chmod +x /stay-awake.sh
CMD  /stay-awake.sh


```