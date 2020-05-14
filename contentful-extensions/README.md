# Contentful extensions

The folder contains custom CMS extensions using the [UI extensions SDK](https://www.contentful.com/developers/docs/extensibility/ui-extensions/). Each extension should have it's own directory. You can find [here](https://www.contentful.com/help/ui-extensions-guide/#configuring-a-field-to-use-an-extension) an article about how to add an example extension.

## Creating new extension

To create new extension, it's recommended to use [Create Contentful Extension CLI](https://github.com/contentful/create-contentful-extension).

## Testing new extension

1. Go to extension's directory
2. Login to Contentful `npm run login`.
3. Choose space and environment `npm run configure`. **Do not use master environment!**
4. Add extension hosted on your local machine to chosen space and environment `npm start`.
5. Add new field in appropriate `Content Type` and in field `Apperance` settings choose tested extension. Read more [here](https://www.contentful.com/help/ui-extensions-guide/#configuring-a-field-to-use-an-extension).

Remember to delete or deploy later tested extension, because it wouldn't be available when you stop hosting it on your local machine.

## Deploying new extension

Extension can be hosted on Contentful when it's lower than 512kb. To deploy extension on Contentful:

1. Go to extension's directory
2. Login to Contentful `npm run login`.
3. Choose space and environment `npm run configure`.
4. Deploy extension `npm run deploy`.