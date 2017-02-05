FROM node:6.3.1
MAINTAINER Aksels <aksels.ledins@gmail.com>

# Create app directory
RUN mkdir -p /src/front
WORKDIR /src/front

# Install app dependencies
COPY package.json /src/front/
COPY public /src/front

RUN npm install

# Bundle app source
COPY . /src/front

EXPOSE 3000
RUN npm run start
