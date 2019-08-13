import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import styled from "@emotion/styled";

const Image = styled.img`
border: 1px solid grey;
box-shadow: 0.5px 0.5px 5px black;
border-radius: 5px;
` 

const GridImages = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <AliceCarousel autoPlayInterval={4000} autoPlay fadeOutAnimation buttonsDisabled  mouseDragEnabled >
      <Image src="https://source.unsplash.com/random/500x301"  onDragStart={handleOnDragStart} className="yours-custom-class" />
      <Image src="https://source.unsplash.com/random/500x302"   onDragStart={handleOnDragStart} className="yours-custom-class" />
      <Image src="https://source.unsplash.com/random/500x303"   onDragStart={handleOnDragStart} className="yours-custom-class" />
      <Image src="https://source.unsplash.com/random/500x304"   onDragStart={handleOnDragStart} className="yours-custom-class" />
      <Image src="https://source.unsplash.com/random/500x300"   onDragStart={handleOnDragStart} className="yours-custom-class" />
    </AliceCarousel>
  )
}


export default GridImages
