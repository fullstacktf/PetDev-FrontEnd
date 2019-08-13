import * as React from "react";
import { useEffect, useState } from "react";
import { MOCK_RESPONSE } from "./mock";
import { AddressResult } from "./AddressResult";
import styled from "@emotion/styled";

const KEY = 'AIzaSyBzGVNtpx96mevl5hXFpx7n-ZeAeM3u1k8';
const BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${KEY}`;

export interface GeocodingResult {
  name: string;
  location: {
    lat: number;
    lng: number;
  },
};

let Container = styled.div``;

const styleInput = {
  width: '285px',
  height: '48px',
  paddingLeft: '10px',
  fontFamily: 'Lato,Arial,Helvetica,sans-serif',
  background: 'white',
  border: '1px solid #22242626',
  borderRadius: '3px 3px 3px 3px',
  color: 'grey',
  fontSize: '20px',
  padding: '5px'

}

const Ul = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  position: absolute;
  z-index: 15;
`;

const addressParser = (input): GeocodingResult[] => {
  return input.results.map(item => ({
    name: item.address_components[0].short_name + ' ' + item.address_components[1].short_name,
    location: {
      lat: item.geometry.location.lat,
      lng: item.geometry.location.lng,
    }
  }));
};

const getStreetsRequests = (inputValue: string): Promise<GeocodingResult[]> => {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}&address=${inputValue}`;
    // resolve(addressParser(MOCK_RESPONSE));
    //TODO only in production
    fetch(url)
      .then(result => result.json()).then(addressParser).then(resolve)
      .catch(err => reject(`😒 ${err}`));
  });
};

interface GeocodingInputProps {
  onSelectLocation: (lat: number, lng: number) => void;
  page: string
}

export const GeocodingInput = (props: GeocodingInputProps) => {
  const [inputValue, setInputValue] = useState<string>();
  const [results, setResults] = useState<GeocodingResult[]>([]);


  useEffect(() => {
    const getStreets = async () => {
      if (inputValue && inputValue.length > 3) {
        const results = await getStreetsRequests(inputValue);
        setResults([...results, ...results]);
      } else {
        setResults([]);
      }
    };
    getStreets();
  }, [inputValue]);

  const handleOnChange = ({ target }) => {
    setInputValue(target.value);

  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (results && results.length > 0) {
      const selectedLocation = results[0].location;
      props.onSelectLocation(selectedLocation.lat, selectedLocation.lng);
    }
  };
  if(props.page=="mainmap"){
  Container = styled.div`
  position:absolute;
  left: 40%;
  z-index:1232131;
  top: 15px;

`}


  return <Container onSubmit={handleOnSubmit}><form>
    <input style={styleInput} onChange={handleOnChange} placeholder=" Search direction..." />
    <i className='purple circular inverted paw icon' onClick={handleOnChange} style={{ marginLeft: '-35px' }}></i>
    <Ul>{results && results.map((result, i) => <AddressResult onAddressClick={props.onSelectLocation} key={i} address={result} />)}</Ul>
  </form>
  </Container>
};
