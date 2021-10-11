'use strict'

const inquirer = require('inquirer');
const db = require('./');

const config = require('./config');

const prompt = inquirer.createPromptModule();

async function setup () {
  const  answer = await prompt([
    {
        type: 'confirm',
        name: 'setup',
        message: 'this will destroy your database,are your sure?'
    }
  ]);
  if(!answer.setup){
      return console.log("nothing happend :)");
  }
  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

setup()