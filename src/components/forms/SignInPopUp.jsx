import React from 'react';
import Popup from "reactjs-popup";
import { Button } from 'semantic-ui-react';
import {SignUpForm} from "../forms/SignUpForm";

const SignInPopUp = (props) => (
    <Popup
            modal
            trigger={<Button compact color="violet" >Register</Button>}          
            closeOnDocumentClick
        >
            <SignUpForm/>
            </Popup>          
            
);

export default SignInPopUp;