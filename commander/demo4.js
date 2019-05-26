#!/usr/bin/env node

/**
 * 可变参数 命令后跟的参数是可变的
 * 命令command有且只有最后一个参数可变不固定的。 要使参数变量可变，必须将...附加到参数名称。 这* 是一个例子：
 */

var program = require("commander");

program
  .version("0.1.0")
  .command("rmdir <dir> [otherDirs...]")
  .option("-r, --recursive", "Remove recursively")
  .action(function(dir, otherDirs) {
    console.log("rmdir one %s", dir);
    console.log("otherDirs", otherDirs);
    if (otherDirs) {
      otherDirs.forEach(function(oDir) {
        console.log("rmdir %s", oDir);
      });
    }
  });

program.parse(process.argv);
