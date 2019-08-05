import React from 'react';
import { GeocodingResult } from "./GeocodingInput";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const Name = styled.h2`
  color: ${props => props.color};
  animation: ${bounce} ${Math.random()}s ease infinite;
`;


interface AddressResultProps {
  address: GeocodingResult
}

const COLOR = ['red', 'green', 'blue'];


export const AddressResult = (props: AddressResultProps) => {
  const color = COLOR[~~(Math.random() * COLOR.length)];
  return <Container>
    <Name color={color}>{props.address.name}</Name>
    <div>{props.address.location.lat}</div>
  </Container>
};