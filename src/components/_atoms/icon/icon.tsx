import * as React from 'react';

interface IIconProps {
  name: string;
  onClick?: () => void;
}

export const Icon = (props: IIconProps) => {
  const { name, ...rest } = props;
  return (
    <div
      style={{display: 'inline-flex'}}
      dangerouslySetInnerHTML={{ __html: require(`./icons/${name}.svg`) }}
      {...rest}
    />
  );
};
