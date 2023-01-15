import React, { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <div className="flex relative min-h-[calc(220px)] h-[calc(100vh-120px)] py-20">{children}</div>
  );
};

export default Container;
