# ==========================================
# Stage 1: Build the React Application
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Install project dependencies
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci || npm install; else npm install; fi

# Copy project files and compile production build
COPY . .
RUN npm run build

# ==========================================
# Stage 2: Production Lightweight Container
# ==========================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Install only production dependencies
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev || npm install --omit=dev; else npm install --omit=dev; fi

# Copy compiled static assets from builder
COPY --from=builder /app/dist ./dist

# Copy production static server
COPY server.js ./

# Cloud Run defaults to port 8080 and supplies the PORT env variable dynamically
ENV PORT=8080
EXPOSE 8080

# Run production server
CMD ["node", "server.js"]
