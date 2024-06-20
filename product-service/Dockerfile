# Stage 1: Build
FROM node:14-alpine AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production && \
    npm cache clean --force

# Copy the rest of the application code
COPY . .

# Stage 2: Runtime
FROM node:14-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=builder /usr/src/app ./

# Expose the port the app runs on
EXPOSE 3002

# Define the command to run the application
CMD ["node", "src/app.js"]
