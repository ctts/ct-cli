const chalk = require('chalk')
const download = require('../utils/download')

function initKoa(pathName, name) {
  const url = `github.com:ctts/Koa-template#master`
  // 下载模板
  download(url, pathName).then(() => {
    console.log(chalk.green('项目创建成功 :) \n'))
    console.log(` cd ${pathName} \n npm install \n npm run serve \n `)
  }).catch(err => {
    console.log(chalk.red(err))
  })
}

module.exports = initKoa