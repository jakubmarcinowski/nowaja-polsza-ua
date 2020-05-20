const chalk = require('chalk')

console.log(`
${chalk.green('Hey there! 👋')}
Repository consist two versions - RU and UA of nowaja-polsza, which are separate sites. 
You can specify the version by setting appropriate environment variable. 
Please check the README.md before development and setup environment variables in .env file. 
When this is done run:
${chalk.yellow(
  'yarn run dev'
)} to start a development environment at ${chalk.green('localhost:8000')}
or
${chalk.yellow(
  'yarn run build'
)} to create a production ready static site in ${chalk.green('./public')}
