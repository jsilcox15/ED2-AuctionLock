import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url:
      "https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg"
  },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
  },
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://japan.stripes.com/sites/default/files/styles/community_site_carousel_750x500/public/article-images/main_13.jpg?itok=_GELFbpY"
  }
];

export default function App() {
  console.log(imageData)
  //console.log(renderSlides)
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div style={{height: 450, width: 400 }}>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval="5000" 
        transitionTime="300"
        useKeyboardArrows={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
      >
        {
            imageData.map((image) => (
                <div key={image.alt}>
                  <img src={image.url} alt={image.alt} />
                  <p className="legend">{image.label}</p>
                </div>
            ))
        }
      </Carousel>
    </div>
  );
}