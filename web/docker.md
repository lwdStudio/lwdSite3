# Dockerize lwdSite
I create Dockerfile for this project is to practice on how to use and configure container technology. This is my first time try to dockerize one of my own application.

# Usage
Before you started, you need to configure ```.env``` file. Check out [```README.md```](README.md#configure) in this folder to learn how to configure it.

You are going to create a new container image of this site. Make sure your Strapi API is up and running. While building this image, docker will pull static site information from your strapi server.

### Build Image
While in this folder, use this command to build your docker image.
```shell
docker build . -t <your-username>/<image-name>
```
If your configuration are correct, you should be able to build the image without any problems.

### Running it on Docker
Run this command in your terminal:
```shell
docker run -p 8000:80 <your-username>/<image-name>
```
You should be able to access your site at ```http://<your-ip-address>:8000```

To properply serve this site, configure a reverse proxy on your web server. I recommend nginx or caddy.

