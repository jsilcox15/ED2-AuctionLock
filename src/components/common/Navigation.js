import * as React from "react";
import PropTypes from "prop-types";

import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { Container, Row, Col, Card, Image, Button, Modal} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import AuctionLogo from "../../images/ghost-icon.png";
//import { Navigation } from ".";
import config from "../../utils/siteConfig";

// Styles
import "../../styles/app.css";


function Item({ name, isRegistered }) {

    if (isRegistered) {
      return null;
    }
    return(
        <Button variant="success" size="lg" style={{fontWeight: "bold"}}                 
        >
              {name}
        </Button>
    );
  }

function PastBids(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 style={{textAlign: "center"}}> Entered Auctions</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 style={{textAlign: "center"}}>Your Past Bids...</h2>
            <Row><div></div></Row>
            <div 
                style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '100px', 
                    height: '26px', 
                    background: 'transparent'}}
            >
                <p></p>
            </div>
            <div
                style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                     }}
            >
                    <p 
                    style={{ fontSize: 18 }}>
                        Huh!? Looks like you have not joined any auctions at this time...</p>
            </div>
            <div 
                style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '100px', 
                    height: '15px', 
                    background: 'transparent'}}
            >
                <p></p>
            </div>
            <p 
                style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: 60 }}
            >
                &#128542;
            </p>
            <div
                style={{ 
                    float: 'center',
                    textAlign: 'center'
                }}
            >
            </div>
                <div><p></p></div>
            <Row><p></p></Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success" size="lg" style={{fontWeight: "bold"}}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

  

const Navigation = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node;

    const twitterUrl = site.twitter
        ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
        : null;
    const facebookUrl = site.facebook
        ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
        : null;
    
    //you can put the local function to check for user authentication
    let itemContent = "Testing"
    const myFunction = () => {
        if (itemContent.startsWith("T")) {
        //if the user is logged in disappear
        return true;  // true -- disappear
        }
        //if the user is not logged in / sign up the login should show up
        return false;  //false -- show up
    }

    const [modalShow, setModalShow] = React.useState(false);


    return <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">
            <div className="viewport-top">
                {/* The main header section on top of the screen */}
                <header
                    className="site-head"
                    style={{
                        ...(site.cover_image && {
                            backgroundImage: `url(${site.cover_image})`,
                        }),
                    }}
                >
                    <div className="container">
                        <div className="site-mast">
                            <div className="site-mast-left">
                                <Link to="/">
                                    {site.logo ? (
                                        <img
                                            className="site-logo"
                                            src={AuctionLogo}
                                            alt= "AuctionLock"
                                        />
                                    ) : (
                                        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="AuctionLock" />
                                    )}
                                </Link>
                            </div>
                            <div className="site-mast-right">
                                <a 
                                    className="site-nav-item" 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                > 
                                    <Link
                                        className="site-nav-react-button"
                                        //style={{fontWeight: "bold"}}                 
                                        to="/login"
                                    > 
                                        <Item 
                                            name="Login"
                                            isRegistered={false} 
                                        />
                                    </Link>
                                    {' '}
                                    <Link
                                        className="site-nav-react-button"
                                        to="/register"
                                        //style={{fontWeight: "bold"}}
                                    > 
                                        <Item 
                                            isRegistered={false} 
                                            name="Sign Up" 
                                        />
                                    </Link>
                                    {' '}
                                    <Link
                                        className="site-nav-react-button"
                                        to="/cards"
                                        //style={{fontWeight: "bold"}}
                                    > 
                                        <Item 
                                            isRegistered={false} 
                                            name="My Account" 
                                        />
                                    </Link>
                                    {' '}
                                   <Link
                                        className="site-nav-react-button"
                                        to="/404"
                                        //style={{fontWeight: "bold"}}
                                    > 
                                        <Item 
                                            isRegistered={false} 
                                            name="Log Out" 
                                        />
                                    </Link>
                                </a>
                            </div>
                        </div>
                        {isHome ? (
                            <div className="site-banner">
                                <h1 className="site-banner-title">
                                    <img src={AuctionLogo} alt= "AuctionLock" height="55px"/>
                                    uctionLock
                                </h1>
                                <p className="site-banner-desc">
                                    Improving your Online Auctions Security and Privacy!
                                </p>
                            </div>
                        ) : null}
                        <nav className="site-nav">
                            <div className="site-nav-left">
                                {/* The navigation items as setup in Ghost */}
                                {/* 
                                <Navigation
                                    data={site.navigation}
                                    navClass="site-nav-item"
                                />         */}
                                <a 
                                    className="site-nav-item"  
                                >
                                    <Link
                                        className="site-nav-item"
                                        variant="outline-success"
                                        to="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{fontWeight: "bold"}}
                                    > 
                                        Home Favs   
                                    </Link>
                                </a>
                                <a 
                                    className="site-nav-item"  
                                >
                                    <Link
                                         className="site-nav-item"
                                        variant="outline-success"
                                        to="/404"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Clothing, Shoes, & Fashion
                                    </Link>
                                </a>
                                <a 
                                    className="site-nav-item"  
                                >
                                    <Link
                                         className="site-nav-item"
                                        variant="outline-success"
                                        to="/404"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                       Cars & Parts
                                    </Link>
                                </a>
                                <a 
                                    className="site-nav-item"  
                                >
                                    <Link
                                         className="site-nav-item"
                                        variant="outline-success"
                                        to="/404"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Electronics & Parts
                                    </Link>
                                </a>
                                <a 
                                    className="site-nav-item"  
                                >
                                    <Link
                                         className="site-nav-item"
                                        variant="outline-success"
                                        to="/404"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Home & Accessories
                                    </Link>
                                </a>
                            </div>
                            <div className="site-nav-right">
                                <Button variant="success" size="lg">
                                    <Link
                                        className="site-nav-react-button"
                                        to="/sellerform"
                                    >
                                        Add Auction 
                                    </Link>
                                </Button>
                                {' '}
                                <Button variant="success" size="lg" onClick={() => setModalShow(true)}>
                                    <Link
                                        className="site-nav-react-button"
                                        //to="/SellerFormList"
                                    >
                                        Past Bids
                                    </Link>                
                                </Button>
                                <PastBids
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                                {' '}
                                <Button variant="light" size="lg">
                                    <Link
                                        className="site-nav-react-button"
                                        to="/CheckOut"
                                        style={{ fontSize: 14 }}
                                    >
                                        &#128722;
                                    </Link>
                                </Button>
                            </div>
                        </nav>
                    </div>
                </header>

                <main className="site-main">
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}               
                </main>
            </div>

            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="site-foot">
                    <div className="site-foot-nav container">
                        <div className="site-foot-nav-left">
                            <Link to="/">AuctionLock</Link> © 2023 &mdash;
                            Published with{" "}
                            <a
                                className="site-foot-nav-item"
                                href="https://ghost.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ghost
                            </a>
                        </div>
                        <div className="site-foot-nav-right">
                            {/* <Navigation
                                data={site.navigation}
                                navClass="site-foot-nav-item"
                            /> */}
                            {site.twitter && (
                                    <a
                                        href="/404"
                                        className="site-foot-nav-item"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="site-nav-icon"
                                            src="/images/icons/twitter.svg"
                                            alt="Twitter"
                                        />
                                    </a>
                                )}
                                {site.facebook && (
                                    <a
                                        href="/404"
                                        className="site-foot-nav-item"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="site-nav-icon"
                                            src="/images/icons/facebook.svg"
                                            alt="Facebook"
                                        />
                                    </a>
                                )}
                                <a
                                    className="site-foot-nav-item"
                                    href="/404"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="site-nav-icon"
                                        src="/images/icons/rss.svg"
                                        alt="RSS Feed"
                                    />
                                </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>;
};

Navigation.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
};

//export default Navigation;

const NavigationSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`query getGhostSettingsAndGetGhostSettings {
allGhostSettings {
    edges {
      node {
        ...GhostSettingsFields
      }
    }
  }
  file(relativePath: {eq: "ghost-icon.png"}) {
    childImageSharp {
      gatsbyImageData(width: 30, height: 30, layout: FIXED)
    }
  }
}
`}
        render={(data) => <Navigation data={data} {...props} />}
    />
);

export default NavigationSettingsQuery;