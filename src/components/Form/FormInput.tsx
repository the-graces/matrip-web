import React, { ChangeEvent } from 'react';
import { styled } from 'styled-components';

type FormInputProps = {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function FormInput({ name, value, onChange }: FormInputProps) {
  return (
    <Input
      type={name === 'password' ? 'password' : 'text'}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-width: 0 0 1px 0;
  border-bottom-color: #9c9c9c;
`;

export default FormInput;
