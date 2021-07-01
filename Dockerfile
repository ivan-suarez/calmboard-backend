FROM node:16
#Create app directory
WORKDIR /home
#Install app dependencies

COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .
RUN ls

EXPOSE 8001 
CMD ["npm", "start"]
