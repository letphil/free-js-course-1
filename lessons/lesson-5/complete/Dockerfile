FROM node:20-alpine as build
WORKDIR /app
# Install dependencies
COPY package.json package-lock.* ./
RUN npm install
COPY . .
RUN npm run dev
# RUN npm run build
# # ====================================
# FROM build as release
# CMD ["npm", "run", "start"]