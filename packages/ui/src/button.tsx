import { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import  MuiButton from '@mui/material/Button';
import React from 'react';
import type { FunctionComponent } from 'react';

interface ButtonProps extends MuiButtonProps {
  label: string;
}

const Button: FunctionComponent<ButtonProps> = ({label, ...props}) => {
  return <MuiButton {...props}>{label}</MuiButton>
}


export default Button
export { type ButtonProps };
