#!/bin/bash
cd ..
rm -rf docs
cd dentropydaemon-wiki && git pull
cd ..
npx dendron buildSiteV2 --stage prod
cd build/site/ && sed -i 's/http:\/\/localhost:8080/https:\/\/wiki.dentropydaemon.io/g' *html
rsync -avzhe ssh docs/* root@wiki.dentropydaemon.io:/root/dentropycloud-traefik/static/_site
#public_url=wiki.dentropydaemon.io
#cd build/site/ && sed -i 's/http:\/\/localhost:8080/https:\/\/wiki.dentropydaemon.io/g' *html
#cd notes && sed -i 's/http:\/\/localhost:8080/https:\/\/wiki.dentropydaemon.io/g' *html
#cd ../assets/js && sed -i 's/http:\/\/localhost:8080/https:\/\/wiki.dentropydaemon.io/g' *js
#cd ../../../..
#scp -r build/site/* root@wiki.dentropydaemon.io:/root/dentropycloud-traefik/static/_site
#npx dendron buildSite --wsRoot . --stage dev --serve --enginePort `cat .dendron.port`
#find build/site \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i 's/http:\/\/localhost:8080/https:\/\/wiki.dentropydaemon.io/g'
