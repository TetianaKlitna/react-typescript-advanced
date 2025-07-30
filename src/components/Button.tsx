import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & { href?: never;};
type LinkProps = ComponentPropsWithoutRef<'a'> & {href?: string};

const isLinkProps   = (props: ButtonProps | LinkProps): props is LinkProps => {
    return 'href' in props;
}

const Button = (props: ButtonProps | LinkProps) => {
  if (isLinkProps(props)) {
    return <a {...props} className="button"></a>;
  }
  return <button {...props} className="button"></button>;
};

export default Button;
