import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Row, Col, Card, Image, Button, ListGroup, Modal, Form, FloatingLabel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import AuctionLogo from "../../images/ghost-icon.png";
//import { Profile } from "../../pages/EnterBid.js";

//import { Navigation } from ".";
import config from "../../utils/siteConfig";

// Styles
import "../../styles/app.css";

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node;
    // Get the modal
    const twitterUrl = site.twitter
        ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
        : null;
    const facebookUrl = site.facebook
        ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
        : null;
    
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
                                > 
                                    <Button variant="success" size="lg">
                                        <Link
                                            className="site-nav-react-button"
                                            to="/register"
                                            style={{fontWeight: "bold"}}
                                        >
                                            Sign Up
                                        </Link>
                                    </Button>
                                </a>
                                <a 
                                    className="site-nav-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="success" size="lg">
                                        <Link
                                            className="site-nav-react-button"
                                            to="/login"
                                            style={{fontWeight: "bold"}}
                                        >
                                            Login
                                        </Link>
                                    </Button>
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
                                        to="/SellerFormList"
                                    >
                                        Hide Exper
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

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
};

const DefaultLayoutSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`query GhostSettings {
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
        render={(data) => <DefaultLayout data={data} {...props} />}
    />
);

export default DefaultLayoutSettingsQuery;
