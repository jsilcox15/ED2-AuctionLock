import React, { useState, useRef, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ImgGallary = ({ responseData }) => {
    console.log(responseData)

    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
        setCurrentIndex(index);
    }
    //console.log(responseData.images)

    return (
        <div style={{height: 450, width: 400 }}>
        <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            selectedItem={responseData[currentIndex]}
            onChange={handleChange}
        >
            <div>      
                <img src={responseData} alt="TBD" />
            </div>
        </Carousel>
        </div>
    );
  };

  export default ImgGallary;