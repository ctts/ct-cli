const work = require('./work-space.js')
const self = require('./self-space.js')

function createTemplate(option) {
  if (option.work || JSON.stringify(option) == "{}") { // --work, 默认为 work
    work()
  }
  if (option.self) { // --self
    self()
  }
}

module.exports = createTemplate