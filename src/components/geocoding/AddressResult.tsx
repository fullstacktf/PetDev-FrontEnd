import React from 'react';
import { GeocodingResult } from "./GeocodingInput";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  width:285px ;
  background: white;
  border: 0;
  height: 60px;
  text-align: left;

  z-index: 10;
  &:hover {
    background: rgb(245, 245, 245) ;
  }
`;


interface AddressResultProps {
  address: GeocodingResult,
  key: number,
  page: string,
  onAddressClick: (lat: number, lng: number) => void;
}





export const AddressResult: any = (props: AddressResultProps) => {
  const handleOnClick = () => {
    if(props.page!=="home"){
    props.onAddressClick(props.address.location.lat, props.address.location.lng);
    console.log(props.address);
    }
  }
  return <Container onClick={handleOnClick}>

    <li><Button > <i className='map marker alternate icon'></i> {props.address.name}</Button></li>


  </Container>
};