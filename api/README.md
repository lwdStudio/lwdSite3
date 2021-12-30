# Strapi - backend for lwdSite3
Strapi is an open-source headless content management system (CMS). You may learn more on [Strapi](https://strapi.io)'s website.

For detailed instruction on how to use Strapi, [Quick Start Guide](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html) provided by Strapi is a good place to go.

## Configure the environment
Install NodeJS. 

### NodeJS
[Nodesource](https://github.com/nodesource/distributions/blob/master/README.md) has detailed instructions on how to configure NodeJS with npm on your Debian (deb) based or Enterprise Linux (rpm) based distribution

For other platforms, check out [NodeJS](https://nodejs.org/en/download/) website for instruction on how to install it.

## Install
If you are not in this folder, then ```cd api``` to enter this folder.

While you are inside this folder:

Install all dependency

```bash
npm i
```

Follow the prompt on your terminal if anything happens.

## Development
To start an development server, check you are in ```api``` folder first.

While you inside this folder:

Start Strapi development server

```bash
npm run develop
```

Follow the prompt on your terminal if anything happens. The link to your admin panel should prompt if the server is successfully started.

\* Strapi use port 1337 as default. But it conflict with WSL environment which I use as my development environment. To resolve it, I have to change the default port to 3000. You can edit this configureation at ```config/server.js``` fie or create a ```.env``` file to override it. 

## Production
Strapi has provided this [deployment guide](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment.html) which is really helpful to learn how to configure ```config/server.js``` and ```.env``` files for production use. I highly suggest you check it out before start.

After you have configured your port, and URL, you want to build your admin UI:

```bash
npm run build
```

I recommend using PM2 to manage your process. Head to [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) to learn how to use it.

I have provided this ```ecosystem.config.js``` file for PM2. It configures Strapi to start with the production environment. 

When you have installed PM2, you can use this command to start and management your Strapi backend:
```bash
pm2 start ecosystem.config.js
```
Notice: when you start your Strapi in production mode, you no longer have access to content type builder. Even if you can view it, you may not be able to change content type via admin UI.

I use Nginx proxy to expose Strapi for lwdSite, learn how to configure your nginx configuration at [This Strapi's Guide](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/optional-software/nginx-proxy.html)

Now you can play around with the Strapi and fill in some contents. Then you can move on to build the front-end of the site following README on the [```/web```](/web#-get-started) folders.

## Migrate data
There is no official way to migrate data from the development environment to the production environment. My personal experience is to copy ```.tmp/```  and ```public/``` folders to the destination server. You then can build your api using ```npm run build```

Remember to backup your site data regularly. 
