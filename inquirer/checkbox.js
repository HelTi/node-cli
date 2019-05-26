const inquirer = require('inquirer')

//按空格键进行选择
const promptList = [
  {
    type: 'checkbox',
    message: '请选择一个包管理器',
    name: 'package',
    choices: ['npm', 'yarn', 'jspm']
  }
]

inquirer.prompt(promptList).then(answers => {
  console.log('anwsers', answers)
})
