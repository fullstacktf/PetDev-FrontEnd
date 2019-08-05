import React from "react";
import styled from "@emotion/styled";
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

export const SignUpFormNew = ({ state, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Label>E-mail</Label>
    <Input
      name="email"
      type="email"
      value={state.values.email}
      placeholder="E-mail"
    />
    <Label>Password</Label>
    <Input
      name="password"
      type="password"
      value={state.values.password}
      placeholder="Password"
    />
    <Label>Nombre</Label>
    <Input
      name="name"
      type="text"
      value={state.values.name}
      placeholder="Nombre"
    />
    <Label>Apellidos</Label>
    <Input
      name="lastName"
      type="text"
      value={state.values.lastName}
      placeholder="Apellidos"
    />
    <Label>Nickname</Label>
    <Input
      name="nickName"
      type="text"
      value={state.values.nickName}
      placeholder="Nickname"
    />
    <Label>Tipo de casa</Label>
    <Input
      name="houseType"
      type="text"
      value={state.values.houseType}
      placeholder="Tipo de casa"
    />
    <Label>Fecha de nacimiento</Label>
    <Input name="birthDate" type="date" value={state.values.birthDate} />
    <Label>Descripción</Label>
    <Input
      name="description"
      type="text"
      value={state.values.description}
      placeholder="Háblanos de ti"
    />
    <Label>Preferencias</Label>
    <Input
      name="preferences"
      type="text"
      value={state.values.preferences}
      placeholder="Preferencias"
    />
    <Label>Pet Coins</Label>
    <Input
      name="coins"
      type="text"
      value={state.values.coins}
      placeholder="Pet Coins"
    />
    <Label>País</Label>
    <Input
      name="country"
      type="text"
      value={state.values.country}
      placeholder="País"
    />
    <Label>Provincia</Label>
    <Input
      name="province"
      type="text"
      value={state.values.province}
      placeholder="Provincia"
    />
    <Label>Dirección</Label>
    <Input
      name="addressLine"
      type="text"
      value={state.values.addressLine}
      placeholder="Dirección"
    />
    <Label>Código Postal</Label>
    <Input
      name="postalCode"
      type="text"
      value={state.values.postalCode}
      placeholder="Código Postal"
    />
    <LatLngContainer>
      <CoordInput
        name="lat"
        type="number"
        value={state.values.lat}
        placeholder="Lat"
      />
      <CoordInput
        name="lng"
        type="number"
        value={state.values.lng}
        placeholder="Lng"
      />
    </LatLngContainer>
    <Button>Enviar</Button>
    <pre>{JSON.stringify(state)}</pre>
  </Form>
);
