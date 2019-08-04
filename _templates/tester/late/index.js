const fs = require('fs');
function searching(stringArray){
  return stringArray.map( item => item.endsWith('jsx'))
}
function dirSearch(path){
  return fs.readdirSync(path)
}

module.exports = {
  prompt: ({ prompter, args }) => 
  {
    const directory = [{
      type: 'input',
      name: 'path',
      message: 'What is the directory component?',
    }]

    return prompter.prompt(directory).then( ( {path} ) => 
    {
      const dir = `${path}`;
      let search = dirSearch(dir);

      if(searching(search)[0])
        {
          console.log(search)
          console.log(dir)
          console.log('Here are the components! Saving names ...')
          console.log(search)
          const { search } = path
        }
        else
        {
          console.log('Root dir, searching ...')
          const components = search.map( item => fs.readdirSync(`${path}/`+ item ))
          if(searching(components[0])[0])
          {
            
            console.log('Here are the components! Saving names ...')
            const { components } = path
          }
        }
        return path
      })
  },
}

// module.exports = {
//   prompt: ({ inquirer }) => {
//     // defining questions in arrays ensures all questions are asked before next prompt is executed
//     const questions = [{
//       type: 'input',
//       name: 'name',
//       message: 'Name of form? (ex: AddContactForm)',
//     },
//     {
//       type: 'confirm',
//       name: 'shouldValidateForm',
//       message: 'Do you need to validate the form?',
//     },
//     {
//       type: 'input',
//       name: 'formFieldNames',
//       message: 'Field names? (separate by comma: "field1, field2,field3")',
//     }]

//     return inquirer
//       .prompt(questions)
//       .then(answers => {
//         const { formFieldNames } = answers
//         const questions = []

//         // these values can be retrieved in the template with: eval(field + '.validation')
//         formFieldNames.split(',').forEach((field) => {
//           questions.push({
//             type: 'input',
//             name: field + '.validation',
//             message: `Input the validation for ${field} (ex: isBlank(${field}) && '${field} is required')`,
//           })
//         })

//         // both set of answers must be returned as a merged object, else the previous set of answers won't be available to the templates
//         return inquirer.prompt(questions).then(nextAnswers => Object.assign({}, answers, nextAnswers))
//       })
//   },
// }