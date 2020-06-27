import * as React from 'react';

export interface AlertProps {
  type?: 'success' | 'warning' | 'info' | 'error';
  delete?: boolean;
}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    children,
  } = props;

  return (
    <div
      className="alert"
    >
      {
        children
      }
    </div>
  );
};

export default Alert;
