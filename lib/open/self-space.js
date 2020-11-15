const chalk = require('chalk')
const { execSync } = require('child_process');
const fs = require('fs')
const path = require('path')
const readline = require('readline');
const { getDesktopPath } = require('../utils/ways')

module.exports = function self() {
  console.log(chalk.green('请输入项目名:'))
  const root = path.resolve(getDesktopPath(),'SelfSpace')
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: (line) => {
      const completions = fs.readdirSync(root)
      const hits = completions.filter((c) => c.toLowerCase().startsWith(line.toLowerCase()));
      // 如果没有匹配，则显示所有补全。
      return [hits.length ? hits : completions, line];
    }
  });
  rl.on('line', (line) => {
    try {
      execSync(`cd ${getDesktopPath()}/SelfSpace/${line} && code .`)
      console.log(chalk.green('打开成功!'));
    } catch (err) {
      console.log(chalk.red(err));
    } finally{
      rl.close()
    }
  });

}
