FROM node:8.12.0-alpine
RUN mkdir -p /srv/app/test-client
WORKDIR /srv/app/test-client

COPY package.json /srv/app/test-client
COPY package-lock.json /srv/app/test-client

RUN npm install

COPY . /srv/app/test-client

CMD ["npm", "start"]