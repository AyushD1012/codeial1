FROM node:18-alpine

# Create app directory
WORKDIR /app


# Install app dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install

# Bundle app source
COPY . .

# Expose the port
EXPOSE 9356

# Start the app
CMD ["npm", "start"]