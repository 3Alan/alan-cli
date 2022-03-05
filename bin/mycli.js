#!/usr/bin/env node
// TODO: 上面这段代码的含义

const program = require('commander');
const chalk = require('chalk');
const questions = require('./questions');
const inquirer = require('inquirer');

program
  .command('create')
  .description('create a project ')
  .action(function () {
    chalk.blue('🎉🎉🎉');
    inquirer.prompt(questions).then(answer => {
      console.log('answer=', answer);
    });
  });

program.option('-d, --debug', 'output extra debugging').option('-s, --small', 'small pizza size');
program.parse(process.argv);

if (program.opts().debug) {
  console.log(chalk.blue('option is debug'));
} else if (program.opts().small) {
  console.log(chalk.blue('option is small'));
}
