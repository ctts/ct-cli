const chalk = require('chalk')
const { execSync } = require('child_process');
const fs = require('fs')
const path = require('path')
const readline = require('readline');
const os = require('os')


function open(dirname) {
  console.log(chalk.green('请输入项目名:'))
  const root = path.resolve(os.homedir(), dirname)
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: (line) => {
      line = line.trim()
      const completions = fs.readdirSync(root)
      const hits = completions.filter((c) => c.toLowerCase().startsWith(line.toLowerCase()));
      // 如果没有匹配，则显示所有补全。
      return [hits.length ? hits : completions, line];
    }
  });
  rl.on('line', (line) => {
    line = line.trim()
    try {
      const finalPath = path.resolve(os.homedir(), dirname, line)
      execSync(`cd ${finalPath} && code .`)
      console.log(chalk.green('打开成功!'));
    } catch (err) {
      console.log(chalk.red(err));
    } finally {
      rl.close()
    }
  });
}



function createTemplate(option) {
  if (option.work || JSON.stringify(option) == "{}") { // --work, 默认为 work
    open('WorkSpace')
  }
  if (option.self) { // --self
    open('SelfSpace')
  }
}

module.exports = createTemplate