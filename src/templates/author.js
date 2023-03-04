import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Link } from "gatsby";


import { Layout, PostCard, Pagination } from "../components/common";
import { MetaData } from "../components/common/meta";

/**
 * Author page (/author/:slug)
 *
 * Loads all posts for the requested author incl. pagination.
 *
 */
const Author = ({ data, location, pageContext }) => {
    const author = data.ghostAuthor;
    const posts = data.allGhostPost.edges;
    const twitterUrl = author.twitter
        ? `https://twitter.com/${author.twitter.replace(/^@/, ``)}`
        : null;
    const facebookUrl = author.facebook
        ? `https://www.facebook.com/${author.facebook.replace(/^\//, ``)}`
        : null;

    return (
        <>
            <MetaData data={data} location={location} type="profile" />
            <Layout>
                <div className="container">
                    <article className="content" style={{ textAlign: `center` }}>
                        <h1 className="content-title">Error 404</h1>
                        <section className="content-body">
                                Page not found, <Link to="/">return home</Link> to start
                                over
                        </section>
                    </article>
                </div>
            </Layout>
        </>
    );
};

Author.propTypes = {
    data: PropTypes.shape({
        ghostAuthor: PropTypes.shape({
            name: PropTypes.string.isRequired,
            cover_image: PropTypes.string,
            profile_image: PropTypes.string,
            website: PropTypes.string,
            bio: PropTypes.string,
            location: PropTypes.string,
            facebook: PropTypes.string,
            twitter: PropTypes.string,
        }),
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
};

export default Author;

export const pageQuery = graphql`
    query GhostAuthorQuery($slug: String!, $limit: Int!, $skip: Int!) {
        ghostAuthor(slug: { eq: $slug }) {
            ...GhostAuthorFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] }
            filter: { authors: { elemMatch: { slug: { eq: $slug } } } }
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
