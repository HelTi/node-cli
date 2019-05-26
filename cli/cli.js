const program = require('commander')
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

const CWD = process.cwd()

const promptList = [
  {
    type: 'list',
    message: '请选择一种模版',
    name: 'template',
    choices: ['vue', 'angular', 'webpack-m-pages'],
    filter: function(val) {
      return val.toLowerCase()
    }
  }
]

program
  .version(pkg.version)
  .command('create <dir>')
  .description('create project template')
  .action(function(dir, cmd) {
    const TEMPLATE_PATH = path.join(CWD, dir)
    if (fs.existsSync(TEMPLATE_PATH)) {
    } else {
      fs.mkdirSync(TEMPLATE_PATH)
    }
    if (dir) {
      inquirer.prompt(promptList).then(anwsers => {
        console.log(anwsers)
      })
    }
  })

program.parse(process.argv)
