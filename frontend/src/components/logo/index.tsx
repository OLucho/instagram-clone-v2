import React from 'react';
import { Logo as LogoStyle } from './styles';

interface LogoProps {
  src: string;
  width?: string;
}

const Logo: React.FC<LogoProps> = ({ src, width }) => {
  return <LogoStyle src={src} alt="logo" width={width} />;
};

export default Logo;
