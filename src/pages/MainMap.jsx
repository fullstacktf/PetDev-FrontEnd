import React from 'react';
import LeafletMap from '../components/maps/LeafletMap';
import { slide as Menu } from 'react-burger-menu';
import styled from "@emotion/styled";

const Filters = styled.div`
  display: flex;
  flex-direction: column;
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
    boxShadow:"2px 2px 2px black"
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
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
const MainMap = () =>{

    return(<div>
      <Menu styles = {sidebarStyle}>
          <h3>Filtros</h3><br/>
          <Filters>
          <FilterRow><input type = "checkbox"/>Piso</FilterRow>
          <FilterRow><input type = "checkbox"/>Casa</FilterRow>
          <FilterRow><input type = "checkbox"/>Con mascota</FilterRow>
          <FilterRow><input type = "checkbox"/>Sin mascota</FilterRow>
          <FilterRow><input type = "checkbox"/>Con jardín</FilterRow>
          <FilterRow><input type = "checkbox"/>Sin jardín</FilterRow>

          </Filters>
        </Menu>
          
      
        
        <LeafletMap/>
        </div>
    )
}

export default MainMap;