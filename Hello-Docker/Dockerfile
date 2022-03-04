# Which linux distribution to use?
# We could do node:latest but this could mess up our app due to new node updates
FROM node:10 

# Current work directory
WORKDIR /usr/src/app

# Move package.json file for dependencies
# COPY package.json ./app
# Copy both package.json &package-lock.json
COPY package*.json ./

#  Run the program
RUN npm install

# Copy everything esle
COPY . .

#  Expose container port is 3000
EXPOSE 3000

# Command to execute the program
CMD npm start