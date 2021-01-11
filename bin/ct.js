#!/usr/bin/env node
const program = require('commander');
const { version } = require('../lib/utils/constants');
const cleanArgs = require('../lib/utils/cleanArgs');
const open = require('../lib/open')
const markdown = require('../lib/usual/markdown')
const daily = require('../lib/usual/daily')
const initKoa = require('../lib/init/init-koa')
const deploy = require('../lib/usual/deploy')
const { suggestCommands } = require('../lib/utils/ways')


// 如果不是当前已挂载的命令，会猜测用户意图
program.arguments('<command>').action(cmd => {
  suggestCommands(cmd);
});

program
  .version(version, '-v, --version')
  .usage('<command>')

/**
 * 快速打开个人项目
 */
program
  .command('open')
  .description('用 vscode 打开项目')
  .option('-w,--work', '打开工作项目')
  .option('-s,--self', ' 打开个人项目')
  .on('--help', () => {
    console.log('默认为工作项目, example:')
    console.log('工作项目: ct open -w')
    console.log('or')
    console.log('个人项目: ct open -s')
  })
  .action((cmd) => {
    const option = cleanArgs(cmd);
    open(option)
  })

/**
 * 快速初始化模板
 */
program
  .command('init <name>')
  .description('新建模板项目')
  .option('-k,--koa', '新建 koa 模板')
  .on('--help', () => {
  })
  .action((name, cmd) => {
    const option = cleanArgs(cmd);
    initKoa(name, option)
  })

/**
 * 快速在桌面新建 markdown
 */
program
  .command('mk <project-name>')
  .description('新建 markdown')
  .action((name) => {
    markdown(name);
  })

/**
 * 快速新建日志
 */
program
  .command('daily')
  .description('新建日志')
  .action(() => {
    daily();
  })

/**
 * 快速发布
 */
program
  .command('deploy')
  .description('快速发布')
  .action(() => {
    deploy();
  })

program.parse(process.argv)