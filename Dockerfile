FROM node:18-alpine
WORKDIR /usr/src/app

# Install deps first (better layer caching)
COPY package*.json ./
RUN npm ci --only=production

# Copy app
COPY . .

# Default envs (can be overridden)
ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
