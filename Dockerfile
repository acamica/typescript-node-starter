FROM node:6.10.2-alpine

# First copy the yarn.lock to install stuff and benefit from the layer cache
COPY ["package.json", "package-lock.json", "/usr/src/"]

# Run all the code from here
WORKDIR /usr/src

# Install dependencies
RUN npm install

# Copy the code
COPY [".", "/usr/src/"]

# Build the project
RUN npm run -q build

# Tell docker what to run as default
CMD ["npm", "start", "-s"]
