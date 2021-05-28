import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import styled from 'styled-components/macro';

interface Props {
  name: string;
  type?: string;
  placeholder?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input autoComplete="off" {...rest} defaultValue={defaultValue} ref={inputRef} />
      {error && <p>{error}</p>}
    </Container>
  );
};
export default React.memo(Input);

export const Container = styled.div`
  width: 100%;

  input {
    width: 100%;
    margin-bottom: 7px;
    padding: 10px 8px;
    font: 400 13.333px Arial;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    outline: none;
  }
  p {
    font-size: 12px;
    color: #fc4850;
    margin-bottom: 5px;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
  }
`;
