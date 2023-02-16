# Build node image
FROM node:19 as node
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm i react-mde --legacy-peer-deps
COPY .. .

# Build node image prod
FROM node as node-prod
RUN npm run build

# Build image in local
FROM node as local
CMD ["npm", "start"]

# Build image in server prod, staging, dev
FROM nginx as prod
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node-prod /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
