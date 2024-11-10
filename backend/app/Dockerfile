# Use the official Node.js 20 image from Docker Hub
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json 
COPY package*.json ./

# Install dependencies (including TypeScript if needed)
RUN npm install

# Install TypeScript globally (if not already in your package.json)
RUN npm install -g typescript

# Copy the rest of the application code to the container
COPY . .

# Compile TypeScript code
RUN npm run build

# Expose the application port (adjust as needed)
EXPOSE 3000

# Command to run the app (run the compiled JavaScript code)
CMD ["npm", "start"]
