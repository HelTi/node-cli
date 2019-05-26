const inquirer = require('inquirer')

const promptList = [
  {
    type: 'password',
    message: '请输入密码',
    name: 'passwod'
  },
  {
    type: 'password',
    message: '再次输入密码',
    name: 'repasswod'
  }
]

inquirer.prompt(promptList).then(answers => {
  console.log(answers)
})
