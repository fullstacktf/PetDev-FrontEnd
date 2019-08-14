import React from 'react';
import LeafletMap from '../components/maps/LeafletMap';
import { slide as Menu } from 'react-burger-menu';
import styled from "@emotion/styled";
import NearUsers from './NearUsers';
import { Button, Checkbox } from 'semantic-ui-react';
import { InputAndMap } from "../components/geocoding/InputAndMap"

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`
const FilterRow = styled.div`
display:flex;
`
const sidebarStyle = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '80px',
    top: '105px',
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    zIndex: "899999999999",
    position: 'fixed',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  bmMenu: {
    background: 'linear-gradient(90deg, rgba(66,68,69,1) 0%, rgba(66,68,69,1) 18%, rgba(66,68,69,0.7175245098039216) 19%)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',

  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'flex',
    outline: '0'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },

}

const divStyle = {
  width: '100%',
  height: '100%'
}

const buttonStyle = {
  width: '20px',
  marginTop: '35px'
}

const MainMap = () => {

  return (<div>

    <Menu styles={sidebarStyle}>
      <Container>

        <FiltersContainer>
          <h3>Filtros</h3><br />
          <FilterRow><input type="checkbox" />Piso</FilterRow>
          <FilterRow><input type="checkbox" />Casa</FilterRow>
          <FilterRow><input type="checkbox" />Con mascota <Checkbox toggle ></Checkbox></FilterRow>
          <FilterRow><input type="checkbox" />Sin mascota</FilterRow>
          <FilterRow><input type="checkbox" />Con jardín</FilterRow>
          <FilterRow><input type="checkbox" />Sin jardín</FilterRow>
          <div styles={buttonStyle}>
            <Button size='large' toggle type='button'>Aplicar Filtros</Button>
          </div>

        </FiltersContainer>
        <div style={divStyle}>
          <NearUsers />
        </div>
      </Container>
    </Menu>


    <InputAndMap />

    {/*   <LeafletMap /> */}
  </div>
  )
}

export default MainMap;
