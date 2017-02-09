FROM node:boron

# Create app directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# Install app dependencies
COPY package.json /usr/src
RUN npm install

# Bundle app source
COPY . /usr/src

EXPOSE 5000
# RUN ["apt-get", "update"]
# RUN ["apt-get", "install", "-y", "vim"]
CMD [ "/usr/local/bin/node", "app.js" ]
