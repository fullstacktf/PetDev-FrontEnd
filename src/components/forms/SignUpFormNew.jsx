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

const Input = styled.input`
  width: 200px;
`;

const Label = styled.label`
  font-weight: bold;
`;

export function SignUpFormNew (props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: 'http://localhost:3001/api/users/',
      data: {
        email, password, name, lastName, 
      }
    });
    alert(`Email ${email}`);
}

  return(
  <Form onSubmit={handleSubmit}>
    <Label>E-mail</Label>
    <Input
      name="email"
      type="email"
      value={email}
      onChange={e => setEmail(e.target.value)}
      placeholder="E-mail"
    />
    <Label>Password</Label>
    <Input
      name="password"
      type="password"
      value={password}
      onChange={e => setEmail(e.target.value)}
      placeholder="Password"
    />
    <Label>Nombre</Label>
    <Input
      name="name"
      type="text"
      value={name}
      onChange={e => setEmail(e.target.value)}
      placeholder="Nombre"
    />
    <Label>Apellidos</Label>
    <Input
      name="lastName"
      type="text"
      value={lastName}
      onChange={e => setEmail(e.target.value)}
      placeholder="Apellidos"
    />
    <Label>Username</Label>
    <Input
      name="userName"
      type="text"
      value={userName}
      onChange={e => setEmail(e.target.value)}
      placeholder="Username"
    />
    <Label>Tipo de casa</Label>
    <Input
      name="houseType"
      type="text"
      value={houseType}
      onChange={e => setEmail(e.target.value)}
      placeholder="Tipo de casa"
    />
    <Label>Fecha de nacimiento</Label>
    <Input name="birthDate" type="date" value={birthDate} onChange={e => setEmail(e.target.value)} />
    <Label>Descripción</Label>
    <Input
      name="description"
      type="text"
      value={description}
      onChange={e => setEmail(e.target.value)}
      placeholder="Háblanos de ti"
    />
    <Label>Preferencias</Label>
    <Input
      name="preferences"
      type="text"
      value={preferences}
      onChange={e => setEmail(e.target.value)}
      placeholder="Preferencias"
    />
    <Label>Pet Coins</Label>
    <Input
      name="coins"
      type="text"
      value={coins}
      onChange={e => setEmail(e.target.value)}
      placeholder="Pet Coins"
    />
    <Label>País</Label>
    <Input
      name="country"
      type="text"
      value={country}
      onChange={e => setEmail(e.target.value)}
      placeholder="País"
    />
    <Label>Provincia</Label>
    <Input
      name="province"
      type="text"
      value={province}
      onChange={e => setEmail(e.target.value)}
      placeholder="Provincia"
    />
    <Label>Dirección</Label>
    <Input
      name="addressLine"
      type="text"
      onChange={e => setEmail(e.target.value)}
      value={addressLine}
      placeholder="Dirección"
    />
    <Label>Código Postal</Label>
    <Input
      name="postalCode"
      type="text"
      onChange={e => setEmail(e.target.value)}
      value={postalCode}
      placeholder="Código Postal"
    />
    <LatLngContainer>
      <CoordInput
        name="lat"
        type="number"
        value={lat}
        onChange={e => setEmail(e.target.value)}
        placeholder="Lat"
      />
      <CoordInput
        name="lng"
        type="number"
        value={lng}
        onChange={e => setEmail(e.target.value)}
        placeholder="Lng"
      />
    </LatLngContainer>
    <Button>Enviar</Button>
    <pre>{JSON.stringify}</pre>
  </Form>
  )
};
