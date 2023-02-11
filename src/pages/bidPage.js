import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";

const NotFoundPage = () => (
    <Layout>
        <div className="container">
                    <Container>
                     <Row>
                        <Col md={4}>
                            <div style={{ padding: 10 }}>
                                <Card className="text-center" style={{border: "1px solid gray"}}>
                                    <Card.Header>Popular Bids</Card.Header>
                                    <Card.Img variant="top" src={unknownImg} />
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
                                    <Card.Footer className="text-muted">Started 2 hours ago</Card.Footer>
                                </Card></div>
                        </Col>
                        <Col md={4}>
                            <div style={{ padding: 10 }}>
                                <Card className="text-center" style={{border: "1px solid gray"}}>
                                    <Card.Header>Popular Bids</Card.Header>
                                    <Card.Img variant="top" src={unknownImg} />
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
                                    <Card.Footer className="text-muted">Started 2 hours ago</Card.Footer>
                                </Card></div>
                        </Col>
                        <Col md={4}>
                            <div style={{ padding: 10 }}>
                                <Card className="text-center" style={{border: "1px solid gray"}}>
                                    <Card.Header>Popular Bids</Card.Header>
                                    <Card.Img variant="top" src={unknownImg} />
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
                                    <Card.Footer className="text-muted">Started 2 hours ago</Card.Footer>
                                </Card></div>
                        </Col>
                        <Col md={4}>
                            <div style={{ padding: 10 }}>
                                <Card className="text-center" style={{border: "1px solid gray"}}>
                                    <Card.Header>Popular Bids</Card.Header>
                                    <Card.Img variant="top" src={unknownImg} />
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
                                    <Card.Footer className="text-muted">Started 2 hours ago</Card.Footer>
                                </Card></div>
                        </Col>
                     </Row>
                    </Container>
                    </div>
    </Layout>
);

export default NotFoundPage;