import * as React from 'react';

interface InlineProps {
  growFirst?: boolean;
  rootStyle?: React.CSSProperties;
  children: JSX.Element[];
}

export const Inline = ({children, growFirst, rootStyle}: InlineProps) => {
  const [firstChild, secondChild] = React.Children.toArray(children);
  const firstChildStyle: React.CSSProperties = {
    alignItems: 'center',
    display: 'flex',
  };

  if (growFirst) {
    firstChildStyle.flex = 1;
  }

  return (
    <div style={{display: 'flex', flex: 1, ...rootStyle}}>
      <div style={firstChildStyle}>
        {firstChild}
      </div>
      {secondChild && <div>{secondChild}</div>}
    </div>
  );
};
