FROM node:23.5.0-alpine

RUN apk add --no-cache git

WORKDIR /app
RUN git clone -b main https://github.com/aablattman/arthurblattmandotdev
WORKDIR /app/arthurblattmandotdev/web

RUN npm install
RUN npm run build


EXPOSE 3000
CMD ["npm", "start"]