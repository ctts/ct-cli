const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')
module.exports = function (url,target) {
  return new Promise((resolve, reject) => {
    // 这里可以根据具体的模板地址设置下载的url，注意，如果是git，url后面的branch不能忽略
    // example: 'gitlab.lanhanba.com:fe/vuecli4-and-ts-demo#master'
    const spinner = ora(chalk.green(`项目模板下载中，源地址：${url}`))
    spinner.start()
    download(url, target, { clone: true }, (err) => {
      if (err) {
        spinner.fail()
        reject(err)
      } else {
        spinner.succeed()
        resolve()
      }
    })
  })
}
