FROM alpine:3.18

WORKDIR /copy

COPY . .

CMD ["rm", "dockerfile" ,".dockerignore"]