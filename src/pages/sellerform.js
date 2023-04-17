import React, { useState, useRef } from "react";
//import SellerFormTwo from "../pages/SellerFormTwo.js";
//import displaySellerList from "../pages/displaySellerList.js"
import { Link } from "gatsby";

//import { Layout } from "../components/common";
import { Navigation } from "../components/common";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
import { Form, FloatingLabel } from 'react-bootstrap';
//import SellerFormList from "../pages/SellerFormList.js";
import View from "../pages/View.js";
import Axios from "axios";


const FormX = () => {
    const [formValues, setFormValues] = useState({
        title: "",
        manufacturer: "",
        brand: "",
        description: "",
        condition: "",
        category: "",
        security: "",
        endDate: ""
    });

    const [image, setImage] = useState([])
    console.log(image)

    const [thumbnail, setThumbnail] = useState([])
    console.log(thumbnail)



    const [isFormVisible, setIsFormVisible] = useState(true);

    const inputFileRef = useRef();

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);

        setFormValues({ ...formValues, [name]: value });
    };

    const dateInputRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        console.log(inputFileRef?.current?.files);
        console.log(thumbnail);

        let epoch = Math.floor((+(new Date(formValues.endDate))) / 1000);
        console.log(epoch);

        let fd = new FormData();
        fd.append("thumbnail", thumbnail[0]);
        fd.append("title", formValues.title);
        fd.append("description", formValues.description);
        fd.append("brand", formValues.brand);
        fd.append("price", 0);
        fd.append("category", formValues.category);
        fd.append("end_time", epoch);

        Axios.post("http://localhost:9999/auctions/create", fd, {
            withCredentials: true
        }).then((e) => {
            console.log(e);
        });
    };

    return (
    <>
      {isFormVisible ? (
	<Navigation>
	  <div className="container">
        <Form onSubmit={handleSubmit}>
            <h1 style={{ textAlign:'center' }}>Seller Form</h1>
            <Row></Row>
          <Row className="mb-3">
              <Form.Group as={Col} controlId="title">
                   <Form.Label 
                        style={{ color: 'black', textAlign:'left' }}
                    > 
                        Product Name: 
			       </Form.Label>
                        <Form.Control 
					        type="text" 
					        name="title" 
                 			value={formValues?.title} 
                  		    onChange={handleChange} 
                  		    placeholder="What is the Product Name?" 
                  		    size="lg"
                        />
		                <Form.Text>
                            Required
                        </Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="manufacturer">
                    <Form.Label 
                        style={{ color: 'black', textAlign:'left' }}
                    > 
                        Manufacturer: 
                    </Form.Label>
                        <Form.Control 
                        type="text" 
                        name="manufacturer" 
                        placeholder="Who is the Manufacturer?" 
                        size="lg"
                        value={formValues.manufacturer}
                        onChange={handleChange}
                        />
                        <Form.Text>
                            Required
                        </Form.Text>
                </Form.Group>
            </Row>

            <Row><p></p></Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="brand">
                <Form.Label style={{ color: 'black', textAlign:'left' }}> 
                    Brand Name: 
                </Form.Label>
                        <Form.Control
                            type="text" 
                            name="brand" 
                            placeholder="What is the brand name?" 
                            size="lg" 
                            value={formValues.brand}
                            onChange={handleChange}
                        />
                        <Form.Text>
                            Required
                        </Form.Text>
                </Form.Group>

                <Form.Group as={Col} controlId="endDate">
                    <Form.Label 
                        style={{ color: 'black', textAlign:'left' }}
                    > 
                        Selected End Date: {formValues.endDate}
                    </Form.Label>
                        <Form.Control 
                            type="date" 
                            name="endDate" 
                            size="lg"
                            value={formValues.endDate}
                            onChange={handleChange}
                            ref={dateInputRef}
                        />
                        <Form.Text>
                            Choose the date you want your auction to end. Required.
                        </Form.Text>
                </Form.Group>
            </Row>

            <Row><p></p></Row>

                <Form.Group className="mb-3"  controlId="description">
                    <Form.Label 
                        style={{ color: 'black', textAlign:'left' }}
                    > 
                        Description: 
                    </Form.Label>
                    <Form.Control 
                        as="textarea" 
                        placeholder="Please describe the product." 
                        name="description"
                        size="lg" 
                        rows={4}  
                        value={formValues.description}
                        onChange={handleChange}
                    />
                    <Form.Text>
                        Required
                    </Form.Text>
                </Form.Group>

                <Row><p></p></Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="condition">
                        <Form.Label 
                            style={{ color: 'black', textAlign:'left' }}
                        > 
                            Is the Condition Excellent, Fair, or Poor? 
                        </Form.Label>
                        <Form.Select 
                            defaultValue="Choose..." 
                            size="lg"
                            name="condition"
                            value={formValues.condition}
                            onChange={handleChange}
                        >
                            <option>Choose...</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Fair">Fair</option>
                            <option value="Poor">Poor</option>
                        </Form.Select>
                        <Form.Text>
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="category">
                        <Form.Label 
                            style={{ color: 'black', textAlign:'left' }}
                        >
                            What type of Product are you selling?
                        </Form.Label>
                        <Form.Select 
                            defaultValue="Choose..." 
                            size="lg"
                            name="category"
                            value={formValues.category}
                            onChange={handleChange}
                        >
                            <option>Choose...</option>
                            <option value="Clothing, Shoes, & Fashion">Clothing, Shoes, & Fashion</option>
                            <option value="Cars & Parts">Cars & Parts</option>
                            <option value="Electronics & Parts">Electronics & Parts</option>
                            <option value="Appliances & Parts">Appliances & Parts</option>
                            <option value="Home & Accessories">Home & Accessories</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                        <Form.Text>
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="security">
                        <Form.Label 
                            style={{ color: 'black', textAlign:'left' }}
                        >
                            Security
                        </Form.Label>
                        <Form.Select 
                            defaultValue="Choose..." 
                            size="lg"
                            name="security"
                            value={formValues.security}
                            onChange={handleChange}
                        >
                            <option>Choose...</option>
                            <option value="Show the winner">Show the winner</option>
                            <option value="Hide the winner">Hide the winner</option>
                        </Form.Select>
                        <Form.Text>
                            Required
                        </Form.Text>
                    </Form.Group>

                </Row>

                <Row><p></p></Row>
                    <Form.Group controlId="formFileTn" className="mb-3">
                                <Form.Label 
                                    style={{ color: 'black', textAlign:'left' }}
                                >
                                    Upload Desired Thumbnail
                                </Form.Label>
                                <div>
                                        {
                                            Array.from(thumbnail).map(item => {
                                            return (
                                                <span>
                                                    <img
                                                        style={{ padding: '10px' }}
                                                        width={150} height={100}
                                                        src={item ? URL.createObjectURL(item) : null} 
                                                    />
                                                </span>
                                            )
                                            })
                                        }
                                </div>
                                <Form.Control 
                                    type="file" 
                                    size="lg" 
                                    onChange={(e) => {
                                        setThumbnail(e.target.files)
                                      }} 
                                    ref={inputFileRef} 
                                />
                                <Form.Text>
                                    Upload one image to make a great first impression on potential buyers.
                                    Required
                                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formFileLg" className="mb-3">
                                <Form.Label 
                                    style={{ color: 'black', textAlign:'left' }}
                                >
                                    Upload Images of Product
                                </Form.Label>
                                    <div>
                                        {
                                            Array.from(image).map(item => {
                                            return (
                                                <span>
                                                    <img
                                                        style={{ padding: '10px' }}
                                                        width={150} height={100}
                                                        src={item ? URL.createObjectURL(item) : null} 
                                                    />
                                                </span>
                                            )
                                            })
                                        }
                                    </div>
                                <Form.Control
                                    onChange={(e) => {
                                        setImage(e.target.files)
                                      }} 
                                    multiple 
                                    type="file" 
                                    size="lg" 
                                    ref={inputFileRef} 
                                />
                                <Form.Text>
                                    You can upload up to five images.
                                    Required
                                </Form.Text>
                    </Form.Group>


                <Row><p></p></Row>

                <Row style={{ textAlign:'center' }}>
                    <Button variant="outline-success" type="submit" size="lg">
                            Submit
                    </Button>
                </Row>

            </Form>
	    </div>
        </Navigation>
      ) : (
        <View data={formValues} />
      )}
    </>
  );
};

export default FormX;