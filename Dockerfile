# Running : sudo docker run -p 3001:3001 rest_is_good


# TODO: build TS code using Docker too? 

FROM risingstack/alpine:3.4-v6.9.4-4.2.0

ENV PORT 3001
EXPOSE 3001

COPY *.json ./


RUN npm install
# RUN npm run build
# 
COPY dist ./
COPY views ./views
COPY static ./static

CMD ["node", "."]