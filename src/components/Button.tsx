import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  el: 'button';
} & ComponentPropsWithoutRef<'button'>;

type LinkProps = {
  el: 'link';
} & ComponentPropsWithoutRef<'a'>;

const Button = (props: ButtonProps | LinkProps) => {
  const { el } = props;
  if (el === 'link') {
    return <a {...props} className="button"></a>;
  }
  return <button {...props} className="button"></button>;
};

export default Button;
