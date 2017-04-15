FROM node:6.10.2

# Install yarn

# RUN npm install -g yarn

# First copy the yarn.lock to install stuff and benefit from the layer cache
COPY ["package.json", "yarn.lock", "/usr/src/"]

# Run all the code from here
WORKDIR /usr/src

# Install dependencies
RUN yarn install

# Copy the code
COPY [".", "/usr/src/"]

# Build the project
RUN npm run build

# Tell docker what to run as default
CMD npm start
