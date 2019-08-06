import React from "react";
import styled from "@emotion/styled";
import { SignUpFormNew } from "./SignUpFormNew";
import BabyFormik from "./BabyFormik";

export const SignUpFormWrapper = props => {
  const initialValues = {
    name: {
      lastName: "Raul",
      userName: "raulito",
      houseType: "Mansión",
      email: "raul_posse@hotmail.com",
      password: "reactmola",
      birthDate: "03/03/03",
      description: "Ayuda por favor",
      petPreferences: "Perros",
      coins: 15,
      geo: {
        default: "Point"
      },
      coordinates: {
        type: [26, -16],
        index: "2dsphere"
      },
      address: {
        country: "España",
        province: "Santa Cruz de Tenerife",
        adressLine: "Calle Fernando Guanarteme",
        postal: 38008
      }
    }
  };

  const onSubmit = values => alert(JSON.stringify(values));

  return (
    <BabyFormik initialValues={initialValues} onSubmit={onSubmit}>
      <SignUpFormNew />
    </BabyFormik>
  );
};
