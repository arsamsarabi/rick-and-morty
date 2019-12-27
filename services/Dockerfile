FROM node:13 as builder
WORKDIR /services
ARG DB_URL
ARG PORT
COPY yarn.lock package.json ./
RUN yarn
COPY . ./
RUN yarn build
CMD ["scripts/serve.sh"]
