# Strapi - backend for lwdSite3
Strapi is an open-source headless content management system (CMS). You may learn more on [Strapi](https://strapi.io)'s website.

For detailed instruction on how to use Strapi, [Quick Start Guide](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html) provided by Strapi are good place to go.

## Configure the environment
Install NodeJS and yarn package manager. 

### NodeJS
[Nodesource](https://github.com/nodesource/distributions/blob/master/README.md) has detail instruction on how to configure NodeJS with npm on your Debian (deb) based or Enterprise Linux (rpm) based distribution

For other platform, check out [NodeJS](https://nodejs.org/en/download/) website for instruction on how to install it.

### Yarn
[Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) also has instruction on how to install it on your system.

## Install
If you are not in this folder, then ```cd api``` to enter this folder.

While you inside this folder:

Install all dependency

```bash
yarn
```

Follow the promt on your terminal if anything happen.

## Development
To start an development server, check you are in ```api``` folder first.

While you inside this folder:

Start Strapi development server

```bash
yarn develop
```

Follow the promt on your terminal if anything happen. The link to your admin panel should promt if the server is successfully started.

\* Strapi use port 1337 as default port. I use WSL as my development environment. To resolve conflict, I have change the default port to 3000. You can edit  ```config/server.js``` or create a ```.env``` file to override it. 

## Production
Strapi has provided this [deployment guide](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment.html) which are really helpful for you to understand how to configure ```config/server.js``` and ```.env``` file for production use. I highly suggest check it out before you start.

After you have configure your port, url variable, you want to build your admin UI:

```bash
yarn build
```

I recommend to use PM2 to manage your process. Head to [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/) to learn how to use it.

I have provided ```ecosystem.config.js``` file for pm2. It already configure Strapi to start with production environment. If you have pm2 installed, you can use this command to start and management your Strapi backend:
```bash
pm2 start ecosystem.config.js
```
Notice: when you start your Strapi in production mode, you no longer have access to content type builder. Even if you can view it, you may not be able to change content type via admin UI.

I use Nginx proxy to expose Strapi for lwdSite, learn how to configure your nginx configuration at [This Strapi's Guide](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/optional-software/nginx-proxy.html)

Now you should be good to go. Good luck.

After you play around with the Strapi and fillin some contents, you can move on to build the front-end of the site at [```/web```](/web#-get-started).

## Migrate data
There are no offical way to migrate data from development environment to production environment. My personal experience is to copy ```.tmp/```  and ```public/``` folders to other server. You then can build your api using ```yarn build```

Remember to backup your site data regularly. 
