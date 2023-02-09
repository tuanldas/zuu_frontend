FROM registry.gitlab.com/codegym-vietnam/docker-library/angular/angular-dev:7


WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY ../.. .

# start app
CMD ["npm", "start"]
