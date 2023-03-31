import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import scaleImg from "../images/laptop_box.png";
import unknownImg from "../images/import-image.png";


class ImageGallaryComponent extends React.Component {
    render() {
        return (
            <div style={{height: 450, width: 400 }}>
                <Carousel autoPlay interval="5000" transitionTime="300" infiniteLoop useKeyboardArrows>
                    <div>
                        <img
                            src="https://picsum.photos/180/100?img=2" alt="random" />
                    </div>
                    <div>
                        <img
                            src="https://picsum.photos/180/100?img=3" alt="random" />
                    </div>
                    <div>
                        <img
                            src="https://picsum.photos/180/100?img=4" alt="random" />
                    </div>
                </Carousel>
            </div>
        )
    };
}
export default ImageGallaryComponent;