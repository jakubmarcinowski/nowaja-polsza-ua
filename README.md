# Installation instruction

1. Run `yarn install`.
2. Copy `.env.dev` file to `.env` file (`cp .env.dev .env`).
3. Setup env vars in `.env` file.
4. To run development server run command `yarn start`.

## Flow

Add three remotes on your local machine:

1. `git remote add origin https://github.com/boldare/nowaja-polsza.git`.
2. `git remote add nowaja https://github.com/cprdip/nowaja-polsza.git`.
3. `git remote add nowaja-ua https://github.com/cprdip/nowaja-polsza-ua.git`.

The reason of `nowaja-polsza-ua` is that CI is on GatsbyCloud, which restricts to have only one site on one repository. As soon as GatsbyCloud will change it (they have it on their road map), ru and ua sites should use `nowaja-polsza` repository (configuration on GatsbyCloud should be changed) and `nowaja-polsza-ua` repository should be removed. 

### Development

1. Create a fix/feature branch from DEVELOP with convention `feat/ID-name-of-feature` or `fix/ID-name-of-fix`.
2. Create a pull request to DEVELOP on boldare repo.
3. Create a pull request from DEVELOP to MASTER on boldare repo.
4. If you want to see effects on live enviroment (novayapolsha.pl) push your code into MASTER on client's repository (*How to go live* section). 

### Hot fixes/features

1. Create a fix/feature branch from MASTER with convention `feat/ID-name-of-feature` or `fix/ID-name-of-fix`.
2. Create a pull request with fix/feature branch to MASTER on boldare repo.
3. Create a pull request with fix/feature branch to DEVELOP on boldare repo.
4. Push your code into MASTER on client's repository (*How to go live* section).

### How to go live

1. Checkout into MASTER branch on boldare repo `git checkout origin/master`.
2. Push your code into MASTER on cprdip nowaja-polsza repo `git push nowaja master`.
3. Push your code into MASTER on cprdip nowaja-polsza-ua repo `git push nowaja-ua master`.

## Environment variables

To switch from russian to ukrainian version and conversely, change CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_TOKEN and VERSION variables. You can find them in Contentful settings of chosen space. For quick changes from one version to another during development you can i.e. store russian `.env` in `.env-ru` file and ukrainian `.env` in `.env-ua` and copy paste appropriate variables to `.env`.

1. `GATSBY_ENV` = This variable should ve set to 'development' at first to prevent searchbots from crawling the production website at first when it's not ready, and then changed to 'production' when we want the searchbots to index the site for search engines - This variable controls proper searchbot crawling options setup in hostname/robots.txt
2. `CONTENTFUL_ENV` = 'master'
3. `CONTENTFUL_SPACE_ID` - found in contentful Settings/API keys/content delivery preview tokens
4. `CONTENTFUL_DELIVERY_TOKEN` - found in contentful Settings/API keys/content delivery preview tokens
5. `CONTENTFUL_API` = 'delivery' - This variable controls the contentful API that we use Delivery or Preview.
6. `GATSBY_GTM` = google tag manger key
7. `GATSBY_VERSION` = 'ru' - site version. Available values: ['ru', 'ua']

Keep in mind that in preview env you don't set CONTENTFUL_DELIVERY_TOKEN instead you set CONTENTFUL_PREVIEW_TOKEN. Use contentful [docs](https://www.contentful.com/developers/docs/references/content-preview-api/#/introduction/preview-api-authentication) for reference

## Translations

Translations are stored in `src/config`. During build `config-ru.js` or `config-ua.js` file is copied into `index.js` based on value of `VERSION` environment variable.

## Environments

There are three environments hosted on Netlify on `gajos@cprdip.pl` account. It's recommended to use just one accout on Netlify, because each additional user costs 15\$/month.

### `novayapolsha.pl`

Production environment of russian version. Builds and deploys are triggered on each `Publish` in contentful and push/merge to `master` branch on client's repository. Builds are done on GatsbyCloud.

### `novayapolsha-ua`

Testing environment of ukrainian version. Builds are done on GatsbyCloud..

### `novayapolsha-dev`

Testing environment of both versions. Build and deploys are triggered on each push/merge to `develop` branch on client's repository. Additionally `Deploy previews` option is enabled, so on every pull request to `develop` new environment, building the site as it would be if the proposed changes were merged, will be generated. Deploy Previews are published to a URL which has the prefix `deploy-preview` followed by the identifier number of the pull request or merge request. For example, a Deploy Preview for pull request #42 will deploy to `deploy-preview-42--novayapolsha-dev.netlify.app`.

## Continous integration

### Production

Production builds are done on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/). Each build is triggered by Publishing or Unpublishing article on Contentful. To customize build hook go to Contentful -> Settings -> Webhooks. Please note **[Gatsby Cloud has limit of 25 builds per day](https://www.gatsbyjs.com/pricing/).** When the limit is exceeded, the build will not start. Possible workaround is to do build on Netlify (but remember that build on Netlify takes much longer than Gatsby Cloud).

### Development

Development builds are done on Netlify. The reason is that Gatsby Cloud free license enables to use one repo and one branch per site. On Netlify it's possible to deploy for preview as many branches as you wish.

#### Notifications

Currently Gatsby Cloud has no build notifications option, but is it possible to set build/deploy notifications on Netlify.

## Contentful extensions

Contentful extensions are stored in `contentful-extensions` package.

## Resources

### Magazine archive

Novaya Polsha's magazine archive (1999-2018) is stored on `https://novaya-pdfs.netlify.app`. There are 209 PDF files. Magazines' covers are stored in `assets/covers`. The reason is to save Contentful entries and to use benefits of responsive images.
