var program = require("commander");

program
  .command("down <url>")
  .option("-d, --dir <d>", "deposit file address (Folder)）")
  .action(function(url, cmd) {
    console.log('下载')
    if (cmd.dir) {
      console.log(`存放的文件夹名称:${cmd.dir}`);
    }
    console.log('下载2')
  });

program.parse(process.argv);
