import React from 'react'
import { Card } from 'semantic-ui-react'


const TeamCards = () => (
  < Card.Group >
    <Card
      image='https://avatars1.githubusercontent.com/u/50339331?s=460&v=4'
      header='Aarón Pérez'
      description='Desarrollador Full-Stack'
      link
      href='https://www.linkedin.com/in/aar%C3%B3n-p%C3%A9rez-p%C3%A9rez-77ab29182/'

    />
    <Card
      image='https://avatars2.githubusercontent.com/u/18171665?s=460&v=4'
      header='Alejandro Fuentes'
      description='Desarrollador Full-Stack'
      link
    />
    <Card
      image='https://avatars1.githubusercontent.com/u/50631393?s=460&v=4'
      header='Miguel Rodriguez'
      description='Desarrollador Full-Stack'
      link
    />
    <Card
      image='https://avatars2.githubusercontent.com/u/18354017?s=460&v=4'
      header='Darío Milanés'
      description='Desarrollador Full-Stack'
      link
      href='https://www.linkedin.com/in/dariomilanes/'
    />
  </Card.Group >

)

export default TeamCards

