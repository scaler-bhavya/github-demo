# Use a Node.js base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy application files
COPY . .

# Install dependencies
RUN npm install

# Run the JavaScript application
CMD ["node", "app.js"]
