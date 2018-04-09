import * as React from 'react';
import Typography from 'material-ui/Typography';

export const Headline = ({children}) => (
  <Typography variant="headline" gutterBottom>
    {children}
  </Typography>
);
