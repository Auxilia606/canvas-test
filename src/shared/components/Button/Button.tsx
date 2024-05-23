import React, { PropsWithChildren } from "react";

import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  return <button {...props} className={twMerge("", props.className)} />;
};
