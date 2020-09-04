FROM node:latest as build
RUN mkdir  /app 
WORKDIR /app
COPY . . 
RUN npm install 
RUN npm run build
CMD ["npm","start"]
