import React from 'react'
import { Grid, Header, Image} from 'semantic-ui-react';
import CompleteLogin from './CompleteLogin'
import SignUpForm from './SignUp'

const style = {
    h1: { margin: '2em',},
    
  }
  const Container = () => (
 
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
        <CompleteLogin/>
      </Grid.Column>
      <Grid.Column>
        <SignUpForm/>
      </Grid.Column>
   
    </Grid>
  
</div>
)
export default Container 
