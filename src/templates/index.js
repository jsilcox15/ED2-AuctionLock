import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout, PostCard, Pagination } from "../components/common";
import { MetaData } from "../components/common/meta";

import { Link } from "gatsby";

import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayProduct from "../pages/displayProduct.js";


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
    const [allUsers, setAllUsers] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
        let userData;
        try {
            const response = await fetch("https://dummyjson.com/products");
            userData = await response.json();
        } catch (error) {
            console.log(error);
            userData = [];
        }
        setAllUsers(userData.products);
        setUsers(userData.products);
        })();
    }, []);

    const filterCards = event => {
        const value = event.target.value.toLowerCase();
        const filteredUsers = allUsers.filter(user => (`${user.title} ${user.category}`.toLowerCase().includes(value)));
        setUsers(filteredUsers);
    }

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="format">
                    <div class="search-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <form class="no-submit">
                            <input class="no-submit" type="search" placeholder="Search Names and Categories..." onInput={filterCards} />
                        </form>
                    </div>
                    <div><p></p></div>
                    <div className="box_space">
                          {users.map((user, id) => (
                              <DisplayProduct key={id} userData={user} />
                            ))}
                    </div>
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
