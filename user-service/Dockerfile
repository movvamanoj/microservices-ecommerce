# Use the official Node.js slim image
FROM node:14-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies and cleanup
RUN npm install --production && \
    npm cache clean --force && \
    rm -rf /var/lib/apt/lists/* /tmp/*

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Define the command to run the application
CMD ["node", "src/app.js"]
