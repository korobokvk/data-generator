FROM node:10.16
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

# FROM node:10-alpine
# WORKDIR /app
# COPY --from=builder /app ./
CMD ["npm", "run", "start:dev"]