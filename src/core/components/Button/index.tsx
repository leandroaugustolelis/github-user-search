import React from 'react';
import './styles.scss'

type ButtonProps = {
  children: string;
}

const Button = ({children}: ButtonProps) => {
  return (
    <button className="button-content">{children}</button>
    
  );
}

export default Button;
