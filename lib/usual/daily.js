const dayjs = require('dayjs')
const path = require('path')
const chalk = require('chalk')
const fs = require('fs')
const { exec } = require('child_process');
const { fsReadable, getDesktopPath } = require('../utils/ways')

module.exports = createDailyMarkdown = () => {
  const nowadays = dayjs(new Date())
  const formateTime = nowadays.year().toString() + (nowadays.month()+1).toString() + nowadays.date().toString()
  const filePath = path.resolve(getDesktopPath(),'daily', `${formateTime}.md`)
  if (!fsReadable(filePath)) {
    fs.writeFileSync(filePath,'')
  }
  openMarkdown(filePath)
}
function openMarkdown(filePath){
  exec(`open ${filePath} -a 'Typora'`, (err, stdout, stderr) => {
    if (err) {
      console.log(chalk.green(err));
      return;
    }
    console.log(chalk.green('打开成功!'));
  })
}