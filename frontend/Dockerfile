# Use Node.js as the base image to build the frontend
FROM node:14 AS build

# Create a working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the built frontend
FROM nginx:alpine

# Copy build files to the web server
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# No CMD needed as Nginx defaults to serving on port 80
