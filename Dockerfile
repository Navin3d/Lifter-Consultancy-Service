FROM node:18-alpine

WORKDIR /usr/app

COPY ./build ./build
RUN npm install -g serve

CMD ["serve", "-s", "build"]
