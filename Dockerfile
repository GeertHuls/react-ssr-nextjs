FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# Install app dependencies
COPY package.json /usr/src/
COPY package-lock.json /usr/src/
RUN npm install

# Bundle app source
COPY . /usr/src

RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]

# Create image using:
# > docker build -t svccps1 .
# Tag created image: (imageid can be retrieved using docker images)
# > docker tag <imageid> <useraccount>/svccps1:latest
# > docker push <useraccount>/svccps1:latest
