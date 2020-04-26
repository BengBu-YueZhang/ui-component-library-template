import * as React from 'react';
export interface AlertProps {
    type?: 'success' | 'warning' | 'info' | 'error';
    delete?: boolean;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
