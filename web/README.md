<p align="center">
  <img alt="Gatsby" src="src/images/icon.png" width="60" />
  <span style="font-size:2em; align:center; padding:.5em;">x</span>
  <img alt="Liwen Duan's Logo" src="src/images/lwd-stamp.png" width="60" />
</p>
<h1 align="center">
  lwdSite <span style="font-size:medium; font-weight:light;"></br>based on <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">Gatsby minimal starter</a></span>
</h1>

## ℹ️ Info

   This is a gatsby front-end that connects to my Strapi headless CMS. In order to make the site work, you need to configure a corresponding Strapi application at [```../api```](/api).

## 📜 Feature

-  ✅ Connects to Strapi, a headless CMS via Graphql. 
-  ✅ Tailwind CSS for page styling.
-  ✅ Responsive layout.
-  ✅ External Link Icon - There is a [debate](https://designnotes.blog.gov.uk/2016/11/28/removing-the-external-link-icon-from-gov-uk/) on this, and I will be looking into it.
-  ✅ SEO and manifest information for each page.
-  ✅ **[new]** Dark mode support with Toggle for user preferences 

## 📝 To-Do

-  🔜 Add i18n support: query, language switcher, content.
-  🔜 Maybe a video for index's hero.

## 🚀 Get Started

  ### Initial Environment
  
  While you are in this folder, initialize and install dependency using npm:
  
  ```bash
  npm i
  ```
  
  Follow prompts on your terminal if anything happens.
  
  ### Configure
  
  Before you start, configure the environment variable first. 
  
  Create ```.env``` file with ```.env.example```
  ```bash
  cp .env.example .env
  ```
 
 There are three items you can modify:
 - ```GATSBY_ROOT_URL``` is your site address.
 - ```GATSBY_STRAPI_API_URL``` is your Strapi backend address.
 - ```GATSBY_JPEG_ENCODER``` is for your JPEG encoding option. Learn more at [gatsby-plugin-sharp's documentation](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-sharp/README.md#using-mozjpeg)

For development you can configure:
```shell
GATSBY_ROOT_URL=
GATSBY_STRAPI_API_URL=http://localhost:3000
GATSBY_JPEG_ENCODER=MOZJPEG
```
⚠️ Specify port after the domain. Your configuration might be different than mine, create your own file to reflect your actual environment.

> If you come from docker configuration, continue instruction on [```docker.md```](docker.md#build-image)

For the rest, continue to here:

Ensure you have configured Strapi so Gatsby can pull data from it. If you did not configure GATSBY_ROOT_URL, the site will be up at ```http://localhost:8000```. Check your terminal output to see your development site URL and Graphql interface.

  ### Develop
  Start Gatsby development server is simple after you have configured it.
  
  Ensure you are in this folder, then
  
  ```
  npm run develop
  ```
  
  It will take some time to build your site and admin bundle. When it finishes, you can access your site and Graphql as prompted.
  
  ### Production
  Before started, configure your ```.env``` file using the actual domain.
  
  There are two ways to serve your site:
  #### Using NodeJS server.
  
  If you have pm2:
  
  ```bash
  pm2 start "gatsby build && gatsby serve"
  ```
  If using gatsby command failed, install gatsby-cli tools first
  ```
  npm i -g gatsby-cli
  ```
  
  #### Serve as static file.
  First, build your site
  ```bash
  npm run build
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
  When you are done, set a system link to ```/etn/nginx/sites-enable```
  
  Remember to secure your website using SSL. Easiest way is to use ```certbot``` to get a Let's Encrypt certificate. If you have install right plugin, Certbot should automatically install and configure it to your nginx configuration file.

## Use Docker
I have created a Dockerfile for this gatsby front-end so you may use it to create a docker container image, and serve this site using docker. Learn more on the [```docker.md```](docker.md) file.

## Serveless solution
You should be able to host this site using services like [Cloudflare Pages](https://pages.cloudflare.com/), [Vercel](https://vercel.com/), ~~[Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/)~~[^1], and more. Follow their instruction on how to do it. They should be able to serve your site really fast via their CDN network.

I have my site run on [my own server](http://www.liwenduan.com) and [Cloudflare Pages](https://lwdsite3.pages.dev). You can observe the performance difference easily.

[^1]: As of now, Gatsby Cloud does not support Yarn 2 yet. Refer to [Gatsby Cloud FAQ](https://support.gatsbyjs.com/hc/en-us/articles/1500009113962-Does-Gatsby-Cloud-work-with-Yarn-2-)