const { runner } = require('hygen')
const Logger = require('hygen/lib/logger')
const path = require('path')
const defaultTemplates = path.join(__dirname, 'templates')
const searcher = require('./searcher')

console.log(searcher)
runner(process.argv.slice(2), {
  templates: defaultTemplates,
  cwd: process.cwd(),
  logger: new Logger(console.log.bind(console)),
  createPrompter: () => require('enquirer'),
  exec: (action, searcher) => {
    //The input body is the hygen execute
    const opts = searcher && searcher.length > 0 ? { input: searcher } : {}
    return require('execa').shell(action, opts)
  },
  debug: !!process.env.DEBUG
})