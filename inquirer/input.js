const inquirer = require('inquirer')

const promptList = [
  {
    type: 'input',
    message: '请输入你的姓名',
    name: 'name',
    default: 'jack'
  },
  {
    type: 'input',
    message: '请输入你的年龄',
    name: 'age'
  }
]

inquirer.prompt(promptList).then(answers => {
  console.log('answers',answers) 
})
