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

const Input = ({ name, placeholder="", type = "text", label, value, handleChange }) => {
    return (
    <Form.Input >
        
        <input
        name={name}
        type={type}
        value={value[name]}
        onChange={handleChange}
        placeholder={placeholder}
        
        />
    </Form.Input>
    );
};

const FIELDS1 = [
    {  name: "email", placeholder:"E-mail..."},
    {  name: "password", type:"password",  placeholder:"Password..." },
    {  name: "name", placeholder:"Name..."},
    {  name: "lastName", placeholder:"Last name..." }
];

const FIELDS2 = [
    {  name: "country", placeholder:"Coutry..."},
    {  name: "province",  placeholder:"Province..."},
    {  name: "addressLine",  placeholder:"Address line..."},
    {  name: "postalCode" , placeholder:"Postal code..."}
];

const FIELDS3 = [
    {  name: "description", placeholder:"Your description..." },
    {  name: "petPreference" ,placeholder:"Pet preference..."},
    {  name: "petName" , placeholder:"Pet name..."},
    {  name: "petDescription"  ,placeholder:"Pet description..."},
];

const initialState = {
    addressLine: "",
    country: "",
    description: "",
    petDescription:"",
    petName:"",
    email: "",
    houseType: "",
    lastName: "",
    name: "",
    password: "",
    petPreference: "",
    postalCode: "",
    province: "",
};
const FakeSignUpForm = () => {
const [step, setStep] = useState(1);
const [formData, setFormData] = useState(initialState);

const handleOnChange = ({ target: { name, value } }) =>{

    setFormData({ ...formData, [name]: value });
}
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
            
                    {/* <Form.Input onChange={handleOnChange} value={formData.name} placeholder='Name...' />
                    <Form.Input onChange={handleOnChange} value={formData.lastName} placeholder='Lastname...' />
                    <Form.Input onChange={handleOnChange} value={formData.email} type='email'  placeholder='Email...' /> */}
                    { FIELDS1 && FIELDS1.map((field, i)=> <Input handleChange={handleOnChange} key={i} value={formData} {...field}/>)}
                    
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
        
{/*                 <Form.Input  onChange={handleOnChange} value={formData.country}  placeholder='Country...' />
                <Form.Input  onChange={handleOnChange} value={formData.province} placeholder='Province...'/>
                <Form.Input  onChange={handleOnChange} value={formData.addressLine}placeholder='Address Line...'/>
                <Form.Input  onChange={handleOnChange} value={formData.postalCode} placeholder='Postal Code...'/> */}
                { FIELDS2 && FIELDS2.map((field, i)=> <Input handleChange={handleOnChange} key={i} value={formData} {...field}/>)}
                
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
        
{/*                <Form.Input  value="" placeholder='Short Description...' />
                <Form.Input  value="" placeholder='Pet Preferences...'/>
                <Form.Input  value="" placeholder='Pet...'/>
                <Form.Input  value="" placeholder='Pet Name'/> */}
                { FIELDS3 && FIELDS3.map((field, i)=> <Input handleChange={handleOnChange} key={i} value={formData} {...field}/>)}
                
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