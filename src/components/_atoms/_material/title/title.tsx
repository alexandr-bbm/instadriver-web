import * as React from 'react';
import Typography from 'material-ui/Typography';

interface IProps {
  gutterBottom?: boolean;
  children: React.ReactNode;
}

export const Title = ({children, gutterBottom}: IProps) => (
  <Typography variant="title" gutterBottom={gutterBottom}>
    {children}
  </Typography>
);
