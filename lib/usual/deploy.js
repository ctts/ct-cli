const { execSync } = require('child_process');
const chalk = require('chalk')


const path = require('path')
module.exports = () => {
  const projectPath = path.resolve(`/Users/taojiaxing/SelfSpace/ctts-blog/`)
  console.log(chalk.green('开始发布'))
  try {
    execSync(`cd ${ projectPath } && npm run deploy`)
    console.log(chalk.green('发布成功'))
  } catch (error) {
    console.log(chalk.red('发布失败'))
  }
}
