//  argv.js
console.log(process.argv);

let argvs = process.argv;

let param = argvs.splice(2);
if (param[0] && param[0] == "--name") {
  if (param[1]) {
    console.log(`hello ${param[1]}`);
  } else {
    console.log("请输入name");
  }
}

process.stdin.setEncoding("utf8");

process.stdin.on("readable", () => {
  var chunk = process.stdin.read();
  console.log(typeof(chunk))
  if (chunk !==null) {
    process.stdout.write(`data: ${chunk}`);
    process.stdin.emit("end");
  }
});

process.stdin.on("end", () => {
  process.stdout.write("end");
});
