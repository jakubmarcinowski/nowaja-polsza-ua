# Post Autocomplete Field

The folder contains custom CMS autocomplete field. The purpose of the field is to link articles from different spaces.

## Development

1. Go to extension folder.
2. Copy `.env.dev` file to `.env` file (`cp .env.dev .env`).
3. Set up environment variables.
4. Login to contentful `npm run login`.
5. Choose space and environment `npm run configure`. **Do not use master environment!**
6. Host extension on your local machine to chosen space and environment `npm start`.
7. To deploy extension run `npm run deploy`.

## Options

Options are titles of `Blog Post` which are fetched from appropriate Contentful space. After an title is selected, its slug is stored in Contentful. If you want to have options from ukrainian/russian `Blog Posts`, set up environment variables for ukrainian/russian Contentful.

## Environment variables

1. `CONTENTFUL_SPACE_ID` - found in contentful Settings/API keys/content delivery preview tokens
2. `CONTENTFUL_DELIVERY_TOKEN` - found in contentful Settings/API keys/content delivery preview tokens
