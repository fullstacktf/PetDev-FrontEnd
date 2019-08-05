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
          console.log({...path,name,root,components,})
          return {...path,root,components,name}
        }
      })
  },
}