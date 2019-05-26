var program = require("commander");
var colors = require("colors");

/**outputHelp(cb)
 * 输出帮助信息而不退出。 回调cb允许在显示帮助文本之前对其进行后处理。如果要在默认情况下显示帮助（例如，如果未提供command,则输入），则可以使用以下内容：
 */
program
  .version("0.1.0")
  .command("getstream [url]", "get stream URL")
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp(make_red);
}

function make_red(txt) {
  return colors.red(txt); //display the help text in red on the console
}
