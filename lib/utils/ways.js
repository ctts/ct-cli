const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')
const program = require('commander');
const leven = require('leven');

// 首字母转大写
const toUpperCaseFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// 判断文件是否可读
const fsReadable = (path) => {
  try {
    fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK);
  } catch (err) {
    return false
  }
  return true
}

// 判断文件是否可写
const fsWriteable = (path) => {
  try {
    fs.accessSync(path, fs.constants.W_OK);
  } catch (err) {
    return false
  }
  return true
}

/**
 * 获取桌面路径
 */
const getDesktopPath = () =>{
  return path.resolve(os.homedir(),'Desktop')
}


// 猜测用户意图
function suggestCommands(unknownCommand) {
  const availableCommands = program.commands.map(cmd => cmd._name);

  let suggestion;

  availableCommands.forEach(cmd => {
    const isBestMatch =
      leven(cmd, unknownCommand) < leven(suggestion || '', unknownCommand);
    if (leven(cmd, unknownCommand) < 3 && isBestMatch) {
      suggestion = cmd;
    }
  });

  if (suggestion) {
    console.log(`  ` + chalk.red(`你想输入的是 ${chalk.yellow(suggestion)} 吗?`));
  }
}



module.exports = {
  toUpperCaseFirst,
  fsReadable,
  fsWriteable,
  getDesktopPath,
  suggestCommands
}