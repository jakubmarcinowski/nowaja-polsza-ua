# Custom WYSIWYG Editor

Custom React WYSIWYG Editor based on [Slate.js](https://www.slatejs.org/) and [Material Design](https://material-ui.com/). Editor is used on nowaja-polsha's Contentful and is a replacement for Markdown editor.

## Goal

Nowaja-polsha's specific feature like adding footnote were hard to maintain in Markdown editor. The goal of the app is to maximally ease editors work. Although Contentful is a headless CMS, we decided to adapt in new editor styles of nowaja-polsha.

## Development

### Standalone

To run editor as standalone React app on your local machine:

1. Run local [parcel](https://parceljs.org/) server `yarn run start`. The default PORT is 1234.

### Contentful

To test localhost version of app on Contentful:

1. Login to Contentful `yarn run cms:login`.
2. Choose space and environment `yarn run cms:configure`. **Do not use master environment!**
3. Host extension on your local machine to chosen space and environment `yarn run cms:start`.

## Build

Some of the features are Contentful specific - i.e. opening full page mode or chosing images from Contentful. These features are enabled when environment variable `IS_CONTENTFUL` is set to `true`.

### Standalone

`yarn run build`

### Contentful

`yarn run cms:build`

## Deployment

Bundled app is too big to host in on Contentful, hence new space on Netlify was created.

1. Build app
2. Go to [Netlify](https://app.netlify.com/sites/elastic-agnesi-a7010f/deploys) logged in on `gajos@cprdip.pl` account.
3. Drag & drop `build` folder.
4. If app was not previously added to Contentful go to `Settings -> Extensions` and click on `Add extension -> Add a new extension` button.

![Extension settings on Contentful](contentful-settings.png)
