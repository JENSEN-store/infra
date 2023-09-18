FROM node:14

WORKDIR /app

COPY *app.js .

RUN npm install react

CMD [ "node", "app.js" ]