import React, { PropsWithChildren } from "react";

import { RecoilRoot } from "recoil";

export const RecoilProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return <RecoilRoot>{children}</RecoilRoot>;
};
