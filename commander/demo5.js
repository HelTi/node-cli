var program = require("commander");

program
  .version("0.1.0")
  .arguments("<cmd> [env]") //执行的自定义命令名称 例：node ./commander/demo5.js mk productenv
  .action(function(cmd, env) {
    cmdValue = cmd;
    envValue = env;
  });

program.parse(process.argv);

if (typeof cmdValue === "undefined") {
  console.error("no command given!");
  process.exit(1);
}
console.log("command:", cmdValue);
console.log("environment:", envValue || "no environment given");
