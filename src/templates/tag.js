import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import { Layout, PostCard, Pagination } from "../components/common";
import { MetaData } from "../components/common/meta";

/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag incl. pagination.
 *
 */
const Tag = ({ data, location, pageContext }) => {
    const tag = data.ghostTag;
    const posts = data.allGhostPost.edges;

    return (
        <>
            <MetaData data={data} location={location} type="series" />
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

Tag.propTypes = {
    data: PropTypes.shape({
        ghostTag: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
        }),
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
};

export default Tag;

export const pageQuery = graphql`
    query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
        ghostTag(slug: { eq: $slug }) {
            ...GhostTagFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] }
            filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
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
