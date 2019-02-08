# Installation instruction

1. Install Yarn
2. Run `yarn run setup`. You will be asked for contentful space ID, and access tokens for the Contentful Management and Delivery API. Instead of specifying them here you can use environmental vars.
3. Setup env vars.
4. Configure webhook.
5. Setup preview environment.

## Environment variables

### Production

1. GATSBY_ENV = 'production' - This variable controls proper searchbot crawling options setup in hostname/robots.txt
2. CONTENTFUL_ENV = 'master'
3. CONTENTFUL_SPACE_ID - found in contentful Settings/API keys/content delivery preview tokens
4. CONTENTFUL_DELIVERY_TOKEN - found in contentful Settings/API keys/content delivery preview tokens
5. CONTENTFUL_API = 'delivery' - This variable controls the contentful API that we use Delivery or Preview.

### Preview Environment

In order to have the ability to preview the content that you put in contentful, that is in Draft status (not yet published) you have to setup a 2nd environment that will communicate with contentful through Preview API instead of Delivery API.

1. GATSBY_ENV = 'development' - This variable controls proper searchbot crawling options setup in hostname/robots.txt
2. CONTENTFUL_ENV = 'master'
3. CONTENTFUL_SPACE_ID - found in contentful Settings/API keys/content delivery preview tokens
4. CONTENTFUL_PREVIEW_TOKEN - found in contentful Settings/API keys/content delivery preview tokens.
5. CONTENTFUL_API = 'preview' - This variable controls the contentful API that we use Delivery or Preview.

Keep in mind that in preview env you don't set CONTENTFUL_DELIVERY_TOKEN instead you set CONTENTFUL_PREVIEW_TOKEN. Use contentful [docs](https://www.contentful.com/developers/docs/references/content-preview-api/#/introduction/preview-api-authentication) for reference 

## webhooks 
Webhooks are needed for the gatsby based front app to know that it needs to rebuild the static files that it serves to the users, when the changes to the content are made (through contentful). You need to set up a webhook that after being hit with POST request by contentful will trigger a rebuild of the front app - `yarn run build` command. Webhook needs to be configured in contentful as well. 

# Gatsby contentful starter
This product is based on [gatsby-contentful-starter](gatsby-contentful-starter-Readme.md)
