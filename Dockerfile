FROM node:12
WORKDIR /usr/src/app
COPY package.json ./
COPY app.js ./
COPY ./src ./src
COPY ./config ./config
COPY ./scripts ./scripts

EXPOSE 3001

RUN npm install
ENTRYPOINT [ "npm", "run", "start" ]
