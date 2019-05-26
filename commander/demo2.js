var program = require("commander");

program
  .command("rm <dir>")
  .option("-r, --recursive", "Remove recursively")
  .option("-f, --force", "remove force")
  .action(function(dir, cmd) {
    //console.log('cmd',cmd)
    if (cmd.recursive) {
      console.log("remove " + dir + " recursively");
    }
    if (cmd.force) {
      console.log("remove " + dir + " forcefully");
    }
  });

program.parse(process.argv);
