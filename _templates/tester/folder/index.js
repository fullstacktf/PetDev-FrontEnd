const fs = require('fs');
function searching(stringArray){
  const booleans = stringArray.map( item => item.endsWith('jsx'))
  return booleans.every(items => items === true)
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
      message: 'Where are the component?',
    }]

    return prompter.prompt(directory)
    .then( path  => 
    {
      const dir = path.path;
      const root = dirSearch(dir);

      if(searching(root)) 
        {
          const name = root[0].split('.')[0]
          return {...path,name}
        }
        else
        {
          console.log('Root dir, searching ...')
          const searchComponents = root.map( item => dirSearch(dir +'/'+ item ))
          const components = searchComponents.map(item => item.filter(item => item.split('.')[1]==='jsx'))
          const name = components.toString().split(',')
          console.log({...{path},root,components,name})
          return {...path,root,components,name}
        }
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