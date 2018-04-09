import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const RouterLink: React.SFC<LinkProps> = (props) => {
  return <Link style={{textDecoration: 'none'}} {...props} />;
};
