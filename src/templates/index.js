import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout, PostCard, Pagination } from "../components/common";
import { MetaData } from "../components/common/meta";

import { Link } from "gatsby";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import carImg from "../images/car_box1.png";
import phoneImg from "../images/phone_box2.png";
import scaleImg from "../images/laptop_box.png";
import tvImg from "../images/retrotv_box4.png";
import unknownImg from "../images/import-image.png";



/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
 const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges;

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="container">
                    <Container>
                        <Row>
                           <Col md={4}>
                               <div style={{ padding: 10 }}>
                                   <Card className="text-center" style={{border: "1px solid gray"}}>
                                       <Card.Header>&#128293; Popular Bids</Card.Header>
                                       <Card.Img variant="top" src={carImg} alt="carImage" style={{ height: 175 }} />
                                       <Card.Body>
                                       <Card.Title><h1>Card Title</h1></Card.Title>
                                       <Card.Text>
                                       <p>
                                           Some quick example text to build on the card title and make up the
                                           bulk of the card's content.
                                       </p>
                                       </Card.Text>
                                       <Button variant="outline-success" size="lg" href="/bidPages">
                                           Enter Auction
                                       </Button>
                                       </Card.Body>
                                       <Card.Footer className="text-muted">&#128337; Started 1 hour ago</Card.Footer>
                                   </Card></div>
                           </Col>
                           <Col md={4}>
                               <div style={{ padding: 10 }}>
                                   <Card className="text-center" style={{border: "1px solid gray"}}>
                                       <Card.Header>&#128293; Popular Bids</Card.Header>
                                       <Card.Img variant="top" src={phoneImg} alt="phoneImage" style={{ height: 175 }} />
                                       <Card.Body>
                                       <Card.Title><h1>Card Title</h1></Card.Title>
                                       <Card.Text>
                                       <p>
                                           Some quick example text to build on the card title and make up the
                                           bulk of the card's content.
                                       </p>
                                       </Card.Text>
                                       <Button variant="outline-success" size="lg" href="/bidPages">
                                           Enter Auction
                                       </Button>
                                       </Card.Body>
                                       <Card.Footer className="text-muted">&#128337; Started 30 minutes ago</Card.Footer>
                                   </Card></div>
                           </Col>
                           <Col md={4}>
                               <div style={{ padding: 10 }}>
                                   <Card className="text-center" style={{border: "1px solid gray"}}>
                                       <Card.Header>&#128293; Popular Bids</Card.Header>
                                       <Card.Img variant="top" src={tvImg} alt="tvImage" style={{ height: 175 }} />
                                       <Card.Body>
                                       <Card.Title><h1>Card Title</h1></Card.Title>
                                       <Card.Text>
                                       <p>
                                           Some quick example text to build on the card title and make up the
                                           bulk of the card's content.
                                       </p>
                                       </Card.Text>
                                       <Button variant="outline-success" size="lg" href="/bidPages">
                                           Enter Auction
                                       </Button>
                                       </Card.Body>
                                       <Card.Footer className="text-muted">&#128337; Started 3 hours ago</Card.Footer>
                                   </Card></div>
                           </Col>
                           <Col md={4}>
                               <div style={{ padding: 10 }}>
                                   <Card className="text-center" style={{border: "1px solid gray"}}>
                                       <Card.Header>&#128293; Popular Bids</Card.Header>
                                       <Card.Img variant="top"  src={scaleImg} alt="scaleImage" style={{ height: 175 }} />
                                       <Card.Body>
                                       <Card.Title><h1>Card Title</h1></Card.Title>
                                       <Card.Text>
                                       <p>
                                           Some quick example text to build on the card title and make up the
                                           bulk of the card's content.
                                       </p>
                                       </Card.Text>
                                       <Button variant="outline-success" size="lg" href="/bidPages">
                                           Enter Auction
                                       </Button>
                                       </Card.Body>
                                       <Card.Footer className="text-muted">&#128337; Started 2 hours ago</Card.Footer>
                                   </Card></div>
                           </Col>
                        </Row>
                       </Container>
                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    );
};

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
};

export default Index;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
    query GhostPostQuery($limit: Int!, $skip: Int!) {
        allGhostPost(
            sort: { order: DESC, fields: [published_at] }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    ...GhostPostFields
                }
            }
        }
    }
`;
