import React from 'react';
import { Link } from 'gatsby';

const MyLink = ({ children, ...rest }) => {
  return <Link {...rest}>{children}</Link>;
};

export default MyLink;