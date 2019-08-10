import * as React from "react";
import { useEffect, useState } from "react";
import { MOCK_RESPONSE } from "./mock";
import { AddressResult } from "./AddressResult";

const KEY = 'AIzaSyBzGVNtpx96mevl5hXFpx7n-ZeAeM3u1k8';
const BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${KEY}`;

export interface GeocodingResult {
  name: string;
  location: {
    lat: number;
    lng: number;
  },
}

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
    resolve(addressParser(MOCK_RESPONSE));
    // TODO only in production
    // fetch(url)
    //   .then(result => result.json()).then(addressParser).then(resolve)
    //   .catch(err => reject(`😒 ${err}`));
  });
};

interface GeocodingInputProps {
  onSelectLocation: (lat: number, lng: number) => void;
}

export const GeocodingInput = (props: GeocodingInputProps) => {
  const [inputValue, setInputValue] = useState<string>();
  const [results, setResults] = useState<GeocodingResult[]>([]);

  useEffect(() => {
    const getStreets = async () => {
      if (inputValue && inputValue.length > 3) {
        const results = await getStreetsRequests(inputValue);
        setResults([...results, ...results]);
        console.log('😌', results);
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

  return <form onSubmit={handleOnSubmit}>
    <input onChange={handleOnChange}/>
    {results && results.map((result, i) => <AddressResult key={i} address={result}/>)}
  </form>
};
