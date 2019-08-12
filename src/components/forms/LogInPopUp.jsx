import React from 'react';
import Popup from "reactjs-popup";
import { Button } from 'semantic-ui-react';
import LoginForm from "../forms/LoginForm";

const LogInPopUp = (props) =>{
console.log(props)
return(
        <Popup
            trigger={<Button compact color="purple" >Login</Button>}
            closeOnDocumentClick
        >
            
            <LoginForm/>
            </Popup>
)};

export default LogInPopUp;