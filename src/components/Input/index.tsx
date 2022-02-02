import { useField } from '@unform/core';
import { useEffect, useRef } from 'react';
import { Container } from './styles';

interface InputProps {
  id: string;
  label: string;
}

export function Input(
  { id: name, label }: InputProps,
  { ...rest }
): JSX.Element {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [inputRef, fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={label}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
}
