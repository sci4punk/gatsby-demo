import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery } from 'gatsby';

const SEO = props => {
  const data = useStaticQuery(graphql`
    query MyQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
  `);
  const { siteMetadata } = data.site;
  const title = siteMetadata.title || "My cool Gatsby app!"
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;