FROM node:20.11 AS build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/

# Set environment variables
#ENV VITE_API_URL=http://localhost:5277/api
ENV VITE_API_URL=http://localhost/api
ENV VITE_PORT=5173

RUN npm run build

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /app/dist/ .

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]