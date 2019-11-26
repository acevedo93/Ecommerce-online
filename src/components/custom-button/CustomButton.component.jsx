import React from 'react';
import './CustomButton.styles.scss'


export const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
  <button className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);
