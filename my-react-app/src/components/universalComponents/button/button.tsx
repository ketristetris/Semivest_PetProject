
import React from 'react';
import styles from './button.module.scss';

export type ButtonType = 'Accent' | 'Neutral';
export type ButtonStyle = 'Primary' | 'Secondary';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonState = 'Default' | 'Disabled';

interface ButtonProps {
  type: ButtonType;
  style: ButtonStyle;
  size?: ButtonSize;
  state?: ButtonState;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  style,
  size = 'medium',
  state = 'Default',
  children,
  onClick,
  className = '',
}) => {
  const baseClass = styles.button;
  const typeStyleClass = styles[`${type}${style}`];
  const sizeClass = styles[size];
  const disabledClass = state === 'Disabled' ? styles.disabled : '';
  
  const buttonClass = `${baseClass} ${typeStyleClass} ${sizeClass} ${disabledClass} ${className}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={state === 'Disabled'}
      aria-disabled={state === 'Disabled'}
    >
      {children}
    </button>
  );
};

export default Button;