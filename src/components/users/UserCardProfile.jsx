import React, { useState, useEffect } from "react";
import { Card, Icon, Image, Label } from "semantic-ui-react";
import photo from "../../assets/matthew.png";
import "../../UserProfile.css";
import { MiniMap } from "../maps/MiniMap";
import RatingUser from "./RatingUser";
import axios from "axios";

//const id = "5d48d3c2e28e1c5854a01c79";
const UserCardProfile = props => {
  const [state, setState] = useState({
    user: {},
    address: {},
    lat: 10,
    lng: 10
  });
  const getUser = () => {
    const { userID } = props.id.params;
    axios({
      method: "get",
      url: `http://localhost:3001/api/users/${userID}`
    }).then(res => {
      const user = res.data;
      const address = res.data.address;
      const lat = res.data.geo.coordinates[0] ;
      const lng = res.data.geo.coordinates[1] ;
      setState({
        user,
        address,
        lat,
        lng
      });
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Card>
      <Image src={photo} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          {state.user.name} {state.user.lastName}{" "}
          <Label as="a">
            15
            <Icon name="paw" />
          </Label>
        </Card.Header>
        <Card.Content style={{ paddingTop: "20px" }}>
          <Icon name="edit outline" />
          {state.user.description}
        </Card.Content>
        <Card.Content style={{ paddingTop: "20px" }}>
          {state.address.addressLine}
        </Card.Content>
      </Card.Content>{" "}
      <Card.Content style={{ paddingTop: "20px" }}>
        Tipo de casa: {state.user.houseType}
      </Card.Content>{" "}
      <Card.Meta>
        <span className="date">Se unió en 2019</span>
      </Card.Meta>
      <Card.Meta />
      <Card.Content>
        <RatingUser />
      </Card.Content>
      <Card.Content extra>
        <a href="http://google.com">
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
      <Card.Content extra>
        <a href="http://google.com">
          <Icon name="upload" />
          Edita tu imagen de perfil
        </a>
      </Card.Content>
      <Card.Content extra>
        <a href="http://google.com">
          <Icon name="hand peace" />
          Número de mascotas: 2
        </a>
      </Card.Content>
      <Card.Content extra>
        <div style={{ alignItems: "center" }}>
          <MiniMap center={[ state.lat , state.lng ]} />
        </div>
      </Card.Content>
    </Card>
  );
};

export default UserCardProfile;
