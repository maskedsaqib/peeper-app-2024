# Use official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build Next.js app
RUN npm run build

# Set environment variable to production
ENV NODE_ENV=production

# Expose the Next.js default port
EXPOSE 3000

# Run the app
CMD ["npm", "run", "start"] 