# ----------------------------------------------------------------
# Build Webapp
# ----------------------------------------------------------------
FROM node:13 as builder
WORKDIR /webapp
COPY yarn.lock .npmrc package.json ./
RUN yarn
COPY . ./
RUN yarn deploy

# ----------------------------------------------------------------
# Serve Webapp through Nginx
# ----------------------------------------------------------------
FROM nginx:alpine 
COPY --from=builder /webapp/nginx.conf /etc/nginx/conf.d
COPY --from=builder /webapp/out /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
