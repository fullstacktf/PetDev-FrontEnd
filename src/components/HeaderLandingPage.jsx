import React from 'react'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
 
const MyHeader = () => (
  <StickyHeader
   
    header={
      <div className="Header_root">
        <h1 className="Header_title">Fanimals</h1>
 
        <ul className="Header_links">
          <li button className="Header_link">Login</li>
          <li button className="Header_link">Signpu</li>
          
        </ul>
      </div>
    }
  >
    
  </StickyHeader>
);

export default MyHeader