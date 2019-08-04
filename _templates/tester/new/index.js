const fs = require('fs')
module.exports = {
    prompt: ({ prompter, args }) =>
     { 
        const question = [{
          type: 'input',
          name: 'path',
          message: 'What is the directory component?',
        }]
        return prompter.prompt(question)
        .then( path => {
          const file = fs.readdirSync(path.path)
          if(file.map(file => file.endsWith('jsx')))
          {
            const name = file[0].split('.')[0]
            return {...path,name}
          }
          else
          {
            throw new Error('There not are react component');
          }
        })
    },
  }