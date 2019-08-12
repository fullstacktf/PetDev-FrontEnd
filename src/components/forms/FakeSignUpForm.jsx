import React, {useState} from "react";
import FakeUserDetailsRegister from "./FakeUserDetailsRegister";
import FakeOtherDetailsRegister from "./FakeOtherDetailsRegister";
import FakeAddressDetailsRegister from "./FakeAddressDetailsRegister";
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react'


const EndMessage = () => {
    return(
        <div>
            <h1>¡Registro completado con éxito!</h1>
        </div>
    )
}

const FakeSignUpForm = () => {
const [step, setStep] = useState(1);

const handleOnClick = (e) => {
    e.preventDefault();
    console.log("hola");
    switch(step){
        case 1:
            setStep(2);
            break;
        case 2:
            setStep(3);
            break;
        case 3:
            setStep(4);
            break;

        default:
        console.log("Failed to change form");
}


    
}

const handleOnClickBack = (e) => {
    e.preventDefault();
    console.log("hola");
    switch(step){

        case 2:
            setStep(1);
            break;
        case 3:
            setStep(2);
            break;

        default:
        console.log("Failed to change form");
}


    
}

    switch(step){
        case 1:
            
            return(
                <Grid className="container2" textAlign='center'  style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 300 }}> 
                <Header as='h2' color='grey' textAlign='center'>
                    <Icon name="sign-in" color="purple" /> Register
                </Header>
                <Form style={
                    {border: '1px solid grey', 
                    borderRadius:'5px', 
                    padding: '10px', 
                    background: 'whitesmoke',
                    boxShadow: '0.5px 0.5px 5px grey'}} size='big' success>
            
                    <Form.Input  placeholder='Name...' />
                    <Form.Input  placeholder='Lastname...' />
                    <Form.Input type='email'  placeholder='Email...' />
                    
                    <Form.Input
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password:'
                    type='password'
                    />
                    
                    <Button color='purple' fluid size='large' onClick={handleOnClick}>Next</Button>
                
                    </Form>
            
                </Grid.Column>
            </Grid>
            )
            
        case 2:
            return(<Grid className="container2" textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 300 }}>
            <Header as='h2' color='grey' textAlign='center'>
                <Icon name="sign-in" color="purple" /> Register
            </Header>
            <Form 
            style={
                {border: '1px solid grey', 
                borderRadius:'5px', 
                padding: '10px', 
                background: 'whitesmoke',
                boxShadow: '0.5px 0.5px 5px grey'}}
            size='big' success>
        
                <Form.Input  placeholder='Country...' />
                <Form.Input  placeholder='Province...'/>
                <Form.Input  placeholder='Adress Line...'/>
                <Form.Input  placeholder='Postal Code...'/>
                
            <Button color="grey" size='large' onClick={handleOnClickBack}>Back</Button>
            <Button color='purple' size='large' onClick={handleOnClick} >Next</Button>
            
            
        
            </Form>
        
            </Grid.Column>
        </Grid>)
        
        case 3:
            return(  <Grid className="container2" textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 300 }}>
            <Header as='h2' color='grey' textAlign='center'>
                <Icon name="sign-in" color="purple" /> Register
            </Header>
            <Form
            style={
                {border: '1px solid grey', 
                borderRadius:'5px', 
                padding: '10px', 
                background: 'whitesmoke',
                boxShadow: '0.5px 0.5px 5px grey'}}
            size='big' success>
        
                <Form.Input  placeholder='Short Description...' />
                <Form.Input  placeholder='Pet Preferences...'/>
                <Form.Input  placeholder='Pet...'/>
                <Form.Input  placeholder='Pet Name'/>
                
            <Button  color="grey" size='large' onClick={handleOnClickBack}>Back</Button>
            <Button color='purple' size='large' onClick={handleOnClick}>Submit</Button>
            
        
            </Form>
        
            </Grid.Column>
        </Grid>)
        case 4:
            return(
                <EndMessage/>
            )
            default:
            console.log("Failed to render")
            break;
            
    }
    
}

export default FakeSignUpForm;