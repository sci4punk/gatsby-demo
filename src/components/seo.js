import React from "react";
import { Helmet } from "react-helmet";

const SEO = (props) => {
  const title = props.title || "My cool Gatsby app!"
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;