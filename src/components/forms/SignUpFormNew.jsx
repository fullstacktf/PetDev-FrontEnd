import React from "react";
import styled from "@emotion/styled";

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

export const SignUpFormNew = () => (
  <FormsContainer>
    <Form>
      <Label>E-mail</Label>
      <Input type="text" placeholder="E-mail" />
      <Label>Password</Label>
      <Input type="password" placeholder="Password" />
      <Label>Nombre</Label>
      <Input type="text" placeholder="Nombre" />
      <Label>Apellidos</Label>
      <Input type="text" placeholder="Apellidos" />
      <Label>Nickname</Label>
      <Input type="text" placeholder="Nickname" />
      <Label>Tipo de casa</Label>
      <Input type="text" placeholder="Tipo de casa" />
      <Label>Fecha de nacimiento</Label>
      <Input type="date" />
      <Label>Descripción</Label>
      <Input type="text" placeholder="Háblanos de ti" />
      <Label>Preferencias</Label>
      <Input type="text" placeholder="Preferencias" />
      <Label>Pet Coins</Label>
      <Input type="text" placeholder="Pet Coins" />
      <Label>País</Label>
      <Input type="text" placeholder="País" />
      <Label>Provincia</Label>
      <Input type="text" placeholder="Provincia" />
      <Label>Dirección</Label>
      <Input type="text" placeholder="Dirección" />
      <Label>Código Postal</Label>
      <Input type="text" placeholder="Código Postal" />
      <LatLngContainer>
        <CoordInput type="number" placeholder="Lat" />
        <CoordInput type="number" placeholder="Lng" />
      </LatLngContainer>
      <Button>Enviar</Button>
    </Form>
  </FormsContainer>
);
