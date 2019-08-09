import React, { Component } from "react";
import { Card, Icon, Image, Label } from "semantic-ui-react";
import photo from "../../assets/matthew.png";
import "../../UserProfile.css";
import MiniMap from "../maps/MiniMap";
import RatingUser from "./RatingUser";
import axios from "axios";

const id = "5d49c446b097c85ec3631e6f";

class UserCardProfile extends Component {
  state = {
    user: {},
    address: {}
  };

  componentWillMount() {
    axios.get(`http://localhost:3001/api/users/${id}`).then(res => {
      const user = res.data;
      const address = res.data.address;
      console.log(address);
      this.setState({
        user,
        address
      });
      console.log(user);
    });
  }
  render() {
    return (
      <Card style={{marginTop: '20px', background: 'whitesmoke',  boxShadow: '0.5px 0.5px 5px black'}}>
        <Image src={photo} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            {this.state.user.name} {this.state.user.lastName}{" "}
            <Label as="a">
              15
              <Icon name="paw" />
            </Label>
          </Card.Header>
          <Card.Content style={{ paddingTop: "20px" }}>
            <Icon name="edit outline" />
            {this.state.user.description}
          </Card.Content>
          <Card.Content style={{ paddingTop: "20px" }}>
            {this.state.address.addressLine}
          </Card.Content>
        </Card.Content>

        <Card.Content style={{ paddingTop: "20px" }}>
          Tipo de casa: {this.state.user.houseType}
        </Card.Content>

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
            <MiniMap />
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default UserCardProfile;
