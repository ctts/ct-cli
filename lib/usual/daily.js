const dayjs = require('dayjs')
const path = require('path')
const chalk = require('chalk')
const fs = require('fs')
const { exec } = require('child_process');
const { fsReadable } = require('../utils/ways')

module.exports = () => {
  const nowadays = dayjs(new Date()).format('YYYYMMDD');
  const filePath = path.join(`/Users/taojiaxing/SelfSpace/ctts-blog`,`/docs/pages/blogs/Daily/`, `${nowadays}.md`)
  if (!fsReadable(filePath)) {
    fs.writeFileSync(filePath, `---
title: ${nowadays}
---
# ${nowadays} 记录
`)
  }
  openMarkdown(filePath)
}
function openMarkdown(filePath) {
  exec(`open ${filePath} -a 'Typora'`, (err, stdout, stderr) => {
    if (err) {
      console.log(chalk.green(err));
      return;
    }
    console.log(chalk.green('打开成功!'));
  })
}