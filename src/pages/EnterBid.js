import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import scaleImg from "../images/laptop_box.png";
import unknownImg from "../images/import-image.png";

const values = 5;

class ImageGallaryComponent extends React.Component {

    render() {
        return (
            <div className="contained">
                <Carousel autoPlay interval="5000" transitionTime="300" infiniteLoop useKeyboardArrows>
                    <div>
                        <img className="Img_sl" src={"https://i.dummyjson.com/data/products/" + values + "/1.jpg"} alt="scaleImage"/>
                    </div>
                    <div>
                        <img 
                            src={"https://i.dummyjson.com/data/products/" + values + "/2.jpg"} alt="unknownImg" />
                    </div>
                    <div>
                        <img className="Img_sl"
                           src={"https://i.dummyjson.com/data/products/" + values + "/3.jpg"} alt="ugh" />
                    </div>
                </Carousel>
            </div>
        )
    };
}
export default ImageGallaryComponent;