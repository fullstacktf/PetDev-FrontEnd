import React from 'react'
import { Grid } from 'semantic-ui-react';
import CompleteLogin from './LoginForm'
import SignUpForm from './SignUpForm'

const style = {
  h1: { margin: '2em', },

}
const GridLogin = () => (

  <div className="landing">
    <style>{`
      html, body {
        background-color: #d7a8f0; !important
        width: 90%; !important;
        height: 90%; !important;
        z-index: -1;


      }

      `}
    </style>

    <Grid container columns={2} divided>

      <Grid.Column>
        <CompleteLogin />
      </Grid.Column>
      <Grid.Column>
        <SignUpForm />
      </Grid.Column>

    </Grid>

  </div>
)
export default GridLogin
