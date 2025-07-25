import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', disabled = false, onClick, className = '', ...props }) => {
  const classes = `btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''} ${className}`;
  return (
    <button className={classes} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
