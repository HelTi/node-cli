const inquirer = require('inquirer')

const promptList = [
  {
    type: 'confirm',
    message: '确定要进行下一步吗？',
    name: 'next'
  },
  {
    type: 'confirm',
    message: '这是最后一步了',
    name: 'last',
    when: function(answers) {
      return answers.next
    }
  }
]

inquirer.prompt(promptList).then(answers => {
  console.log('answers', answers)
})
