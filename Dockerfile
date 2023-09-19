FROM node:14 

WORKDIR /
RUN npm install 

COPY ./app.js /app.js


CMD [ "node", "app.js" ]