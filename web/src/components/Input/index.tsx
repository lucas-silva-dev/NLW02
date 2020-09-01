import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>
        {label}
        <input type="text" {...rest} id={name} />
      </label>
    </Container>
  );
};

export default Input;
