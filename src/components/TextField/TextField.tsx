import React from 'react';

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextField: React.FC<ITextFieldProps> = (props) => {
  return <input placeholder='Enter your task' {...props}/>;
};

export default TextField;
