import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

export const Thing: React.FC = () => {
  return <div>Updated again and again!</div>;
};

export const Header: React.FC<Props> = (props: Props) => {
  return (
  <h1 style={{ color: 'red'}}>{props.children}</h1>
  )
}
