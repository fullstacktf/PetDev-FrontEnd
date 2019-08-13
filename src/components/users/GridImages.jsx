import React, {useState, useEffect} from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import styled from "@emotion/styled";
import axios from "axios";

const IMAGE_API_KEY = "18b5f0555f971339fa62cc5c859b13aa743db3c5e590ea50fa700ed66f76a5fa";
const API_URL = "https://api.unsplash.com/search/photos";
const TAG = "pet";
const ORIENTATION = "landscape"
const IMAGE_WIDTH = "500";
const IMAGE_HEIGHT = "300";
const QUERY = `?query=${TAG}&orientation=${ORIENTATION}&client_id=${IMAGE_API_KEY}`;

const Image = styled.img`
border: 1px solid grey;
box-shadow: 0.5px 0.5px 5px black;
border-radius: 5px;

` 


const GridImages = () => {
  const handleOnDragStart = e => e.preventDefault();
  const [pics, setPics] = useState();
  const data = [];
  
  
  const getPics = () => {



  axios({
      method: "get",
      url:  `${API_URL}${QUERY}`
      /* "https://api.unsplash.com/search/photos?query=pet&client_id=18b5f0555f971339fa62cc5c859b13aa743db3c5e590ea50fa700ed66f76a5fa" */
    }).then(res => {
      const {results} = res.data;
      console.log("results",results);
      setPics(
        results.map(result=>result.urls.small )
      )
      
  
    });
  };
  useEffect(() => {
    getPics();
  

    

  }, []);

  
  console.log("pics", pics);


  if(pics){
  return (
  <AliceCarousel autoPlayInterval={4000} autoPlay fadeOutAnimation buttonsDisabled  mouseDragEnabled >
    {pics && pics.map((result, i) => <Image src={`${result}&h=${IMAGE_HEIGHT}`} key={i} onDragStart={handleOnDragStart} />)}
  
  </AliceCarousel> )
  } else return <div></div>

// In case of petitions limit reached

/*     <AliceCarousel autoPlayInterval={4000} autoPlay fadeOutAnimation buttonsDisabled  mouseDragEnabled >
      <Image src="https://source.unsplash.com/random/500x301"  onDragStart={handleOnDragStart} className="yours-custom-class" />
      <Image src="https://source.unsplash.com/random/500x302"   onDragStart={handleOnDragStart} className="yours-custom-class" />
      <Image src="https://source.unsplash.com/random/500x303"   onDragStart={handleOnDragStart} className="yours-custom-class" />
      <Image src="https://source.unsplash.com/random/500x304"   onDragStart={handleOnDragStart} className="yours-custom-class" />
      <Image src="https://source.unsplash.com/random/500x300"   onDragStart={handleOnDragStart} className="yours-custom-class" />
    </AliceCarousel> */
  
}


export default GridImages
