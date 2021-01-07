// 在桌面新建 markdown,并打开
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process');
const { fsReadable, getDesktopPath } = require('../utils/ways')
module.exports = (name) => {
  const filePath = path.resolve(getDesktopPath(), `${name}.md`)
  if (fsReadable(filePath)) {
    console.log(chalk.red('文件已存在!'))
    return
  }
  fs.writeFileSync(filePath, `# ${name}`)
  exec(`open ${filePath} -a 'Typora'`, (err, stdout, stderr) => {
    if (err) {
      console.log(chalk.green(err));
      return;
    }
    console.log(chalk.green('打开成功!'));
  })
}
