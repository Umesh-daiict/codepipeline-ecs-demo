FROM node:20-alpine3.21
WORKDIR /app
COPY . .
RUN yarn install
CMD ["node", "index.js"]
EXPOSE 3000