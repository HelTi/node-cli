const download = require('download-git-repo')
const ora = require('ora');
 
const spinner = ora();

spinner.start("开始下载模版... \n")
download('helti/helti-cli', 'tmp', function (err) {
  console.log(err ? 'Error' : 'Success')
  if(err){
    spinner.fail("下载模版失败 ！\n")
  }else{
    spinner.succeed("下载模版成功！ \n")
  }
})