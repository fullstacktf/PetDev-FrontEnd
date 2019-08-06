import React, {useState} from "react";
import styled from "@emotion/styled";
import axios from 'axios';
import { SignUpFormWrapper } from "./SignUpFormWrapper";

const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 70vw;
  height: 100vh;

  border: 1px solid red;
`;

const CoordInput = styled.input`
  width: 70px;
`;

const LatLngContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin: auto;
  width: 100px;
`;

 const InputField = styled.div`
 
`; 
const Input = ({ name, type = "text", label, value, handleChange }) => {
  return <InputField>
    {label}:
    <input
      name={name}
      type={type}
      value={value[name]}
      onChange={handleChange}
    />
  </InputField>;
};
const Label = styled.label`
  font-weight: bold;
`;


const FIELDS = [
  { label: "Email", name: "email" },
  { label: "Password", type: "password", name: "password" },
  { label: "Name", name: "name" },
  { label: "Last Name", name: "lastName" },
  { label: "Username", name: "userName" },
  { label: "House type", name: "houseType" },
  { label: "Description", name: "description" },
  { label: "Pet preferences", name: "petPreferences" },
  { label: "Country", name: "country" },
  { label: "Province", name: "province" },
  { label: "Address", name: "addressLine" },
  { label: "Postal code", name: "postalCode" }
];

export function SignUpFormNew (props) {
  const [formData, setFormData] = useState({});

  function handleChange({ target: { name, value } }){

    setFormData({...formData, [name]:value}); 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
/*     axios({
      method: 'post',
      url: 'http://localhost:3001/api/users/',
      data: {
        
      } 
    });*/

}

  return(
  <Form onSubmit={handleSubmit}>
    {FIELDS.map((field, i)=> <Input handleChange={handleChange} key={i} value={formData} {...field}/>)}
{/* 
    <LatLngContainer>
      <CoordInput
        name="lat"
        type="number"
        value={lat}
        onChange={e => setLat(e.target.value)}
        placeholder="Lat"
      />
      <CoordInput
        name="lng"
        type="number"
        value={lng}
        onChange={e => setLng(e.target.value)}
        placeholder="Lng"
      />
    </LatLngContainer> */}
    <Button>Enviar</Button>

  </Form>
  )
};
