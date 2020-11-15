const fs = require('fs')
const path = require('path')
const os = require('os')
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

const getDesktopPath = () =>{
  return path.resolve(os.homedir(),'Desktop')
}

module.exports = {
  toUpperCaseFirst,
  fsReadable,
  fsWriteable,
  getDesktopPath
}