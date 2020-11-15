const path = require('path')
const chalk = require('chalk')
const fs = require('fs')
const initKoa = require('./init-koa')

function initProgram(name, option) {
  let rootName = path.basename(process.cwd()) // 根目录名
  let pathName = '' // 目标目录名
  if (rootName === name) { // 若当前目录名和项目名相同
    pathName = '.'
  } else if (fs.existsSync(name)) {
    console.log(chalk.red(`项目${name}已经存在!`))
    return
  } else {
    pathName = path.join(pathName, name)
  }
  if (JSON.stringify(option) == "{}"){
    console.log(chalk.red('请输入短链来选择模板!'))
    console.log('example:')
    console.log('koa 项目: lhb init -k name')
  }
  if (option.koa) {
    initKoa(pathName, name)
  }
}
module.exports = initProgram