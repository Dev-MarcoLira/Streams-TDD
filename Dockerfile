FROM node:23-alpine3.20

WORKDIR /usr/src/streamsapp

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3500

CMD [ "npm", "run", "dev" ]