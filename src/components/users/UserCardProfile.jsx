/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Card, Icon, Image, Rating } from "semantic-ui-react";
import photo from "../../assets/matthew.png";
import "../../UserProfile.css";
import { MiniMap } from "../maps/MiniMap";
import axios from "axios";

//const id = "5d48d3c2e28e1c5854a01c79";
const API_URL = "http://localhost:3001/api";

const cardStyle = {
  marginTop: "42px",
  boxShadow: '0.5px 0.5px 5px grey'
};

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
      url: `${API_URL}/users/${userID}`
    }).then(res => {
      const user = res.data;
      const address = res.data.address;
      const lat = res.data.geo.coordinates[0];
      const lng = res.data.geo.coordinates[1];

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

console.log(typeof(state.user.rating))

const rating = state.user.rating;
  return (
    <Card style={cardStyle}>
      <Image src={state.user.avatarURL} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          {state.user.name} {state.user.lastName}
        </Card.Header>
        <Card.Content>
          <Rating icon='star' disabled defaultRating={state.user.rating} maxRating={5} />
        </Card.Content>
        <Card.Content style={{ paddingTop: "20px" }}>
          <Icon name="edit outline" />
          {state.user.description}
        </Card.Content>
        <Card.Content style={{ paddingTop: "20px" }}>
          {state.address.addressLine}
        </Card.Content>
      </Card.Content>{" "}
      <Card.Content style={{ paddingTop: "20px" }}>
        House type: {state.user.houseType}
      </Card.Content>{" "}
      <Card.Meta>
        <span className="date">Joined on 03/08/2019</span>
      </Card.Meta>
      <Card.Meta />

      <Card.Content extra>
        <a href="http://google.com">
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
      <Card.Content extra>
        <a href="http://google.com">
          <Icon name="hand peace" />
          Number of pets: 1
        </a>
      </Card.Content>
      <Card.Content extra>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MiniMap center={[state.lat, state.lng]} />
        </div>
      </Card.Content>
    </Card>
  );
};

export default UserCardProfile;
