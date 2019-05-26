// inputout.js
process.stdin.setEncoding('utf8')

let argvs = process.argv

let param = argvs.splice(2)
if (param[0] && param[0] == '--name') {
  if (param[1]) {
    console.log(`hello ${param[1]}`)
  } else {
    process.stdout.write(`请输入name:`)
    process.stdin.resume()
    process.stdin.on('data', chunk => {
      if (!!chunk.replace(/[\r\n]/g, '')) {
        process.stdout.write(`你输入的name是: ${chunk}`)
        process.stdin.emit('end')
      } else {
        process.stdout.write(`请输入name:`)
      }
    })
  }
}

process.stdin.on('end', () => {
  process.stdout.write('结束\n')
})
