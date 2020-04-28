# Installation instruction

(It doesn't work on node in version ~12, please use 10.16.0)

1. Run `yarn install`.
2. Copy `.env.dev` file to `.env` file (`cp .env.dev .env`).
3. Setup env vars in `.env` file.
4. To run development server run command `yarn run dev`.

# Flow

1. Create a feature branch
2. Create a pull request to DEVELOP on boldare repo
3. Create a pull request from DEVELOP to MASTER on boldare repo
4. If you want to see effects on live enviroment (novayapolsha.pl) push your code into MASTER on client's repository https://github.com/cprdip/nowaja-polsza

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

## Environments

There are three environments hosted on Netlify on `gajos@cprdip.pl` account. It's recommended to use just one accout on Netlify, because each additional user costs 15$/month. 

### `novayapolsha.pl`

Production environment of russian version. Builds and deploys are triggered on each `Publish` in contentful and push/merge to `master` branch on client's repository.

### `novayapolsha-ua` 

Testing environment of ukrainian version.

### `novayapolsha-dev`

Testing environment of both versions. Build and deploys are triggered on each push/merge to `develop` branch on client's repository. Additionally `Deploy previews` option is enabled, so on every pull request to `develop` new environment, building the site as it would be if the proposed changes were merged, will be generated. Deploy Previews are published to a URL which has the prefix `deploy-preview` followed by the identifier number of the pull request or merge request. For example, a Deploy Preview for pull request #42 will deploy to `deploy-preview-42--novayapolsha-dev.netlify.app`.
