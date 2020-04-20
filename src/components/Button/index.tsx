import * as React from 'react';
import noop from '../../utils/noop';

export interface ButtonProps {
  type?: 'primary' | 'ghost' | 'warning' | 'default';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    onClick = noop,
    children,
  } = props;

  return (
    <div
      role="button"
      onClick={onClick}
    >
      {
        children
      }
    </div>
  );
};

export default Button;
