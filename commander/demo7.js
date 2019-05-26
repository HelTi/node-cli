var program = require("commander");

/**
 * 输出帮助信息并立即退出。 回调cb允许在显示帮助文本之前对其进行后处理。

自定义事件监听 Custom event listeners
可以通过监听command和option事件来执行自定义操作。
 */
program
  .version("0.1.0")
  .option("-C, --chdir <path>", "change the working directory")
  .option("-c, --config <path>", "set config path. defaults to ./deploy.conf")
  .option("-T, --no-tests", "ignore test hook");

program
  .command("setup [env]")
  .description("run setup commands for all envs")
  .option("-s, --setup_mode [mode]", "Which setup mode to use")
  .action(function(env, options) {
    var mode = options.setup_mode || "normal";
    env = env || "all";
    console.log("setup for %s env(s) with %s mode", env, mode);
  });

program
  .command("exec <cmd>")
  .alias("ex")
  .description("execute the given remote cmd")
  .option("-e, --exec_mode <mode>", "Which exec mode to use")
  .action(function(cmd, options) {
    console.log('exec "%s" using %s mode', cmd, options.exec_mode);
  })
  .on("--help", function() {
    console.log("");
    console.log("Examples:");
    console.log("");
    console.log("  $ deploy exec sequential");
    console.log("  $ deploy exec async");
  });

program.command("*").action(function(env) {
  console.log('deploying "%s"', env);
});

program.parse(process.argv);
