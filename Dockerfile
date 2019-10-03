FROM nginx:alpine
EXPOSE 80
COPY build/. /usr/share/nginx/html/