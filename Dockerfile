FROM node:14

WORKDIR /infra

COPY app.js .

RUN npm install react

CMD [ "node", "app.js" ]