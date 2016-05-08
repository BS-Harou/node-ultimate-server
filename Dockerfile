FROM debian:jessie

RUN apt-get update \
    && apt-get install -y --no-install-recommends nodejs npm

WORKDIR /www/node-ultimate-server

COPY . /www/node-ultimate-server

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "nodejs" ]
CMD [ "index.js" ]
