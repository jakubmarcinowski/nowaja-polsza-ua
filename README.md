# Installation instruction

1. Install Yarn
2. Run `yarn run setup`. You will be asked for contentful space ID, and access tokens for the Contentful Management and Delivery API. You can find them in contentful Settings/API keys/content delivery preview tokens and content management tokens.
3. Setup env vars.
4. Configure webhook.
5. Setup preview environment.

# Contentful content update

1. Install contentful-cli
   yarn global add contentful-cli
2. Login to contentful
   contentful login
3. Choose space of contentful
   contentful space use
4. Refresh contentful content (this will remove .cache, and create content to export.json in contentful folder)
   yarn contentful-refresh

## Environment variables

### Production

1. GATSBY_ENV = This variable should ve set to 'development' at first to prevent searchbots from crawling the production website at first when it's not ready, and then changed to 'production' when we want the searchbots to index the site for search engines - This variable controls proper searchbot crawling options setup in hostname/robots.txt
2. CONTENTFUL_ENV = 'master'
3. CONTENTFUL_SPACE_ID - found in contentful Settings/API keys/content delivery preview tokens
4. CONTENTFUL_DELIVERY_TOKEN - found in contentful Settings/API keys/content delivery preview tokens
5. CONTENTFUL_API = 'delivery' - This variable controls the contentful API that we use Delivery or Preview.
6. HOST = hostname used for sitemap and host values in robots.txt

### Preview Environment

In order to have the ability to preview the content that you put in contentful, that is in Draft status (not yet published) you have to setup a 2nd environment that will communicate with contentful through Preview API instead of Delivery API.

1. GATSBY_ENV = 'development' - This variable controls proper searchbot crawling options setup in hostname/robots.txt
2. CONTENTFUL_ENV = 'master'
3. CONTENTFUL_SPACE_ID - found in contentful Settings/API keys/content delivery preview tokens
4. CONTENTFUL_PREVIEW_TOKEN - found in contentful Settings/API keys/content delivery preview tokens.
5. CONTENTFUL_API = 'preview' - This variable controls the contentful API that we use Delivery or Preview.
6. HOST = hostname used for sitemap and host values in robots.txt

Keep in mind that in preview env you don't set CONTENTFUL_DELIVERY_TOKEN instead you set CONTENTFUL_PREVIEW_TOKEN. Use contentful [docs](https://www.contentful.com/developers/docs/references/content-preview-api/#/introduction/preview-api-authentication) for reference

## webhooks

Webhooks are needed for the gatsby based front app to know that it needs to rebuild the static files that it serves to the users, when the changes to the content are made (through contentful). You need to set up a webhook that after being hit with POST request by contentful will trigger a rebuild of the front app, by calling `yarn run build` command. Webhook needs to be configured in contentful as well.

If the build command returns a non-zero exit code it's recommended to run `contentful-refresh` command and then `yarn run build` again. That should be automated in the deploy script.

# Gatsby contentful starter

This product is based on [gatsby-contentful-starter](gatsby-contentful-starter-Readme.md)
