import React, { useState, useRef } from "react";
//import SellerFormTwo from "../pages/SellerFormTwo.js";
//import displaySellerList from "../pages/displaySellerList.js"
import { Link } from "gatsby";
import { Layout } from "../components/common";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
import { Form, FloatingLabel } from 'react-bootstrap';
//import SellerFormList from "../pages/SellerFormList.js";
import View from "../pages/View.js";


const FormX = () => {
    const [formValues, setFormValues] = useState({
       productName: "",
        Manufacturer: "",
        brandName: "",
        Description: "",
        Condition: "",
        productType: "",
        Security: "",
    });
    const [isFormVisible, setIsFormVisible] = useState(true);

    const inputFileRef = useRef();

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);

        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        console.log(inputFileRef?.current?.files);
        setIsFormVisible(false);
    };

    return (
    <>
      {isFormVisible ? (
	<Layout>
	  <div className="container">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
              <Form.Group as={Col} controlId="productName">
                   <Form.Label style={{ color: 'black', textAlign:'left' }}> 
                        Product Name: 
			       </Form.Label>
                        <Form.Control 
					        type="text" 
					        name="productName" 
                 			value={formValues?.productName} 
                  		    onChange={handleChange} 
                  		    placeholder="What is the Product Name?" 
                  		    size="lg"
                        />
		                <Form.Text>
                            Required
                        </Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="Manufacturer">
                    <Form.Label style={{ color: 'black', textAlign:'left' }}> Manufacturer: </Form.Label>
                        <Form.Control 
                        type="text" 
                        name="Manufacturer" 
                        placeholder="Who is the Manufacturer?" 
                        size="lg"
                        value={formValues.Manufacturer}
                        onChange={handleChange}
                        />
                        <Form.Text>
                            Required
                        </Form.Text>
                </Form.Group>
            </Row>

            <Row><p></p></Row>

                <Form.Group className="mb-3" controlId="brandName">
                    <Form.Label style={{ color: 'black', textAlign:'left' }}> 
                        Brand Name: 
                    </Form.Label>
                        <Form.Control
                            type="text" 
                            name="brandName" 
                            placeholder="What is the brand name?" 
                            size="lg" 
                            value={formValues.brandName}
                            onChange={handleChange}
                        />
                        <Form.Text>
                            Required
                        </Form.Text>
                </Form.Group>

                <Row><p></p></Row>

                <Form.Group className="mb-3"  controlId="Description">
                    <Form.Label style={{ color: 'black', textAlign:'left' }}> Description: </Form.Label>
                    <Form.Control 
                        as="textarea" 
                        placeholder="Please describe the product." 
                        name="Description"
                        size="lg" 
                        rows={4}  
                        value={formValues.Description}
                        onChange={handleChange}
                    />
                    <Form.Text>
                        Required
                    </Form.Text>
                </Form.Group>

                <Row><p></p></Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="Condition">
                        <Form.Label style={{ color: 'black', textAlign:'left' }}> Is the Condition Excellence, Fair, or Poor? </Form.Label>
                        <Form.Select 
                            defaultValue="Choose..." 
                            size="lg"
                            name="Condition"
                            value={formValues.Condition}
                            onChange={handleChange}
                        >
                            <option>Choose...</option>
                            <option value="Excellence">Excellence</option>
                            <option value="Fair">Fair</option>
                            <option value="Poor">Poor</option>
                        </Form.Select>
                        <Form.Text>
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="productType">
                        <Form.Label style={{ color: 'black', textAlign:'left' }}>What type of Product are you selling?</Form.Label>
                        <Form.Select 
                            defaultValue="Choose..." 
                            size="lg"
                            name="productType"
                            value={formValues.productType}
                            onChange={handleChange}
                        >
                            <option>Choose...</option>
                            <option value="Clothing & Shoes">Clothing & Shoes</option>
                            <option value="Tech, Cars, & Parts">Tech, Cars, & Parts</option>
                            <option value="Appliances & Parts">Appliances & Parts</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                        <Form.Text>
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Security">
                        <Form.Label style={{ color: 'black', textAlign:'left' }}>Security</Form.Label>
                        <Form.Select 
                            defaultValue="Choose..." 
                            size="lg"
                            name="Security"
                            value={formValues.Security}
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

                    <Form.Group controlId="formFileLg" className="mb-3">
                                <Form.Label style={{ color: 'black', textAlign:'left' }}>Upload Images of Product</Form.Label>
                                <Form.Control type="file" size="lg" ref={inputFileRef} />
                                <Form.Text>
                                    You can upload one or more images.
                                    Required
                                </Form.Text>
                    </Form.Group>


                <Row><p></p></Row>

                    <Button variant="outline-success" type="submit" size="lg">
                            Submit
                    </Button>

            </Form>
	    </div>
        </Layout>
      ) : (
        <View data={formValues} />
      )}
    </>
  );
};

export default FormX;