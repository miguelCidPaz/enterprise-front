# last version of node
FROM node:17.8.0
EXPOSE 3000

#set the working directory
RUN mkdir /src
WORKDIR /src
ADD . /src/
RUN npm install
CMD ["npm", "start"]
