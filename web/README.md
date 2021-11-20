<p align="center">
  <img alt="Gatsby" src="src/images/icon.png" width="60" />
  <span style="font-size:2em; align:center; padding:.5em;">x</span>
  <img alt="Liwen Duan's Logo" src="src/images/lwd-stamp.png" width="60" />
</p>
<h1 align="center">
  lwdSite <span style="font-size:medium; font-weight:light;"></br>based on <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">Gatsby minimal starter</a></span>
</h1>

## ℹ️ Info

   This is a gatsby front-end that connect to my Strapi headless CMS. In order to make the site work, you need to configure a corresponding Strapi application at [```../api```](/api).

## 📜 Feature

-  ✅ Connects to Strapi, a headless CMS via Graphql. 
-  ✅ Tailwind CSS for page styling.
-  ✅ Responsive layout.
-  ✅ Dark mode support - via Tailwild CSS media
-  ✅ External Link Icon - There is a [debate](https://designnotes.blog.gov.uk/2016/11/28/removing-the-external-link-icon-from-gov-uk/) on this, and I will be looking into it.
-  ✅ SEO and manifest information for each page.


## 📝 To-Do

-  🔜 Add i18n support: query, language switcher, content.
-  🔜 Add dark mode switch.
-  🔜 Maybe a video for index's hero.

## 🚀 Get Started

  ### Initial Environment
  
  While you are in this folder, initialize and install dependency using yarn:
  
  ```bash
  yarn
  ```
  
  Follow promt on your terminal if anything happens.
  
  ### Configure
  
  Before you start, configure environment variable first. 
  
  Create ```.env``` file with ```.env.example```
  ```bash
  cp .env.example .env
  ```
 
 There are two items you can modify:
 - ```GATSBY_ROOT_URL``` Is your site address
 - ```GATSBY_STRAPI_API_URL``` Is your Strapi backend address

For development you can configure:
```shell
GATSBY_ROOT_URL=
GATSBY_STRAPI_API_URL=http://localhost:3000
```
⚠️ Specify port after domain. Your configuration might be different than mine, create your own file to reflect your actural environment.

> If you come from docker configuration, continue instruction on [```docker.md```](docker.md#build-image)

For the rest, continue to here:

Ensure you have configure Strapi so Gatsby can pull data from it. If you not configure GATSBY_ROOT_URL, the site will be up at ```http://localhost:8000```. You should be able to see couple links to your site and graphql dashboard on your terminal.

  ### Develop
  Start Gatsby development server is simple after you have configure it.
  
  Ensure you are in this folder, then
  
  ```
  yarn develop
  ```
  
  It will take some time to build your site and admin bundle. When it finish, you can access your site and Graphql as prompted.
  
  ### Production
  Before started, configure your ```.env``` file using acutural domain.
  
  There are two ways to serve your site:
  #### Using NodeJS server.
  
  If you have pm2:
  
  ```bash
  pm2 start "gatsby build && gatsby serve"
  ```
  If using gatsby command failed, install gatsby-cli tools first
  ```
  yarn global add gatsby-cli
  ```
  
  #### Serve as static file.
  First build your site
  ```bash
  yarn build
  ```
  
  Configure nginx for access
  
  At your nginx configuration file location ```/etc/nginx/sites-availabe``` create your site configuration
  
  ```nginx
  server {
    root <path to my-gatsby-app>/public;
    index index.html index.htm index.nginx-debian.html;
    server_name <your-domain-name>;
    location / {
      try_files $uri $uri/ =404;
    }
  }
  ```
  When you are done, system link it to ```/etn/nginx/sites-enable```
  
  Remember to secure your website using SSL. Easiest way is to use ```certbot``` to get an Let's Encrypt certificate. Certbot should automatically install and configure it to your nginx configuration file.
  
## Issue
~~When trying to deploy this site on platforms like Gatsby Cloud, Cloudflare Page or any other similar services, it will have dependency issue on ```@fontsource``` font package. Even the dependency had decleared on ```yarn.lock``` and being installed first time using ```yarn```. I had to reinstall the font again manually using ```yarn add @fontsource/<font-to-be-installed>``` to solve the issue.~~
It seems like my fontsource package to the latest version solve this issue. 

## Use Docker
I have create a Dockerfile for this gatsby front-end so you may use it create a docker container image, and serve this site use docker. Learn more on the [```docker.md```](docker.md) file.