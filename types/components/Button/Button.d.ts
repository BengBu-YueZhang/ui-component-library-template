import * as React from 'react';
export interface ButtonProps {
    type?: 'primary' | 'ghost' | 'warning' | 'default';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    loading?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
