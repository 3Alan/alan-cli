#!/usr/bin/env node
// https://stackoverflow.com/questions/33509816/what-exactly-does-usr-bin-env-node-do-at-the-beginning-of-node-files

const program = require('commander');
const chalk = require('chalk');
const questions = require('./questions');
const inquirer = require('inquirer');
const fse = require('fs-extra');
const path = require('path');

program
  .command('create')
  .description('create a project ')
  .action(function () {
    inquirer.prompt(questions).then(answer => {
      const templateType = answer.type;
      console.log('answer=', answer, __dirname);
      fse
        .copy(path.resolve(__dirname, `../template/${templateType}`), process.cwd())
        .then(() => console.log(chalk.blue('complete')))
        .catch(err => console.error(err));
    });
  });

program.option('-d, --debug', 'output extra debugging').option('-s, --small', 'small pizza size');
program.parse(process.argv);

if (program.opts().debug) {
  console.log(chalk.blue('option is debug'));
} else if (program.opts().small) {
  console.log(chalk.blue('option is small'));
}
