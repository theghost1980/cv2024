import React from 'react';
import './button.css';

interface Props {
    title: string;
    onClick: () => void;
    buttonStyleType: 'primary' | 'secondary' | 'agressive';
    additionalClassname?: string;
};

export const Button = ({title, onClick, additionalClassname, buttonStyleType}: Props) => {
  return (
    <button title={title} onClick={onClick} className={`button ${buttonStyleType}`}>{title}</button>
 )
}
