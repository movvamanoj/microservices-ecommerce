# Use Alpine Linux as base image
FROM node:14-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production \
    # Cleanup
    && npm cache clean --force \
    && rm -rf /var/lib/apt/lists/* /tmp/*

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3002

# Define the command to run the application
CMD ["node", "src/app.js"]