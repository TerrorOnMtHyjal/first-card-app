FROM node:8.12.0-alpine
RUN mkdir -p /srv/app/test-server
WORKDIR /srv/app/test-server

COPY package.json /srv/app/test-server
COPY package-lock.json /srv/app/test-server

RUN npm install

COPY . /srv/app/test-server

CMD ["npm","run","dev"]
