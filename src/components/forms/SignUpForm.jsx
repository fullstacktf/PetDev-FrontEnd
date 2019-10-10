import React, { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import { windowStyle } from '../../App'
const Form = styled.form`
  background: white;
`;

const Button = styled.button`
  margin: auto;
  width: 100px;
  border: 0;
`;

const InputField = styled.div`
  display: flex;
  flex-position: row;
  justify-content: center;
  padding: 4px;
  margin: auto;
  
`;
const Input = ({ name, type = "text", label, value, handleChange }) => {
  return (
    <InputField >
      {label}:
      <input
        name={name}
        type={type}
        value={value[name]}
        onChange={handleChange}

      />
    </InputField>
  );
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
  lat: "",
  lng: ""
};

const initialCoords = {};

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
  { label: "Nombre de mascota", name: "petName" },
  { label: "Chip", name: "chip" },
  { label: "Especie", name: "specie" },
  { label: "Descripcion", name: "petDescription" },
  { label: "Lat", name: "lat", type: "number" },
  { label: "Lng", name: "lng", type: "number" }
];


const URL = "http://165.22.85.125:3000";
export function SignUpForm() {
  const [formData, setFormData] = useState(initialState);
  const [coords, setCoords] = useState(initialCoords);

  function handleChange({ target: { name, value } }) {
    setCoords({ ...coords, [name]: value });
    setFormData({ ...formData, [name]: value });
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setFormData(initialState);
    setCoords(initialCoords);

    const address = {
      country: formData.country,
      province: formData.province,
      addressLine: formData.addressLine,
      postal: formData.postalCode
    };

    const pets = {
      chip: formData.chip,
      petName: formData.petName,
      specie: formData.specie,
      description: formData.description
    };

    const geo = {
      coordinates: [formData.lat, formData.lng]
    };

    axios({
      method: "post",
      url: `${URL}/api/users/`,
      data: { ...formData, address, geo, pets }
    });
  };


  return (
    <Form style={windowStyle} onSubmit={handleOnSubmit}>

      {FIELDS && FIELDS.map((field, i) => <Input handleChange={handleChange} key={i} value={formData} {...field} />)}

      <Button>Enviar</Button>

    </Form>
  )
};
