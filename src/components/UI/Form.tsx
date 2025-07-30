import { ComponentPropsWithoutRef, FormEvent, useRef } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

const Form = ({ onSave, children, ...otherProps }: FormProps) => {
  const form = useRef<HTMLFormElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();
  };
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
};

export default Form;
