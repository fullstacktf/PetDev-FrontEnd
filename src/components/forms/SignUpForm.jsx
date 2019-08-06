import React, {useState} from "react";
import styled from "@emotion/styled";
import axios from 'axios';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const Button = styled.button`
  margin: auto;
  width: 100px;


`;

const InputField = styled.div`
  padding: 2px;
  width: 80px;


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

const initialState = {
  
  addressLine: "",
  country: "",
  description: "",
  email: "",
  houseType: "",
  lastName: "",
  name: "",
  password: "",
  petPreferences: "",
  postalCode: "",
  province: "",
  userName: "",
  lat: -16,
  lng: 28
};

const initialCoords = {
  
    
  
};

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
  { label: "Postal code", name: "postalCode" },
  { label: "Lat", name: "lat", type: "number" },
  { label: "Lng", name: "lng", type: "number" }
];

export function SignUpForm () {
  const [formData, setFormData] = useState(initialState);
  const [coords, setCoords] = useState(initialCoords);

  function handleChange({ target: { name, value } }){
    setCoords({...coords, [name]:value})
    setFormData({...formData, [name]:value}); 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const address = {
      country: formData.country,
      province: formData.province,
      addressLine: formData.addressLine,
      postal: formData.postalCode
      }
    
      const geo = {
        coordinates: [formData.lng, formData.lat]
      }

    axios({
      method: 'post',
      url: 'http://localhost:3001/api/users/',
      data: {...formData, address, geo} 
    });
    

}

  return(
  <Form onSubmit={handleSubmit}>
    {FIELDS.map((field, i)=> <Input handleChange={handleChange} key={i} value={formData} {...field}/>)}

{/*     <LatLngContainer>
      <CoordInput
        name="lat"
        type="number"
        value={coords}
        onChange={handleChange}
        placeholder="Lat"
      />
      <CoordInput
        name="lng"
        type="number"
        value={coords}
        onChange={handleChange}
        placeholder="Lng"
      />
    </LatLngContainer>  */}
    <Button>Enviar</Button>

  </Form>
  )
};
