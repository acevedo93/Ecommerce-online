import React from 'react';
import './FormInput.styles.scss';

export const FormInput = ( { handleChange, label, ...otherProps}) => (
<div className="group">
  <input
    className="form-input"
    onChange={handleChange}
    {...otherProps}
  />
  {
    console.log(otherProps.value)
  }
  {
    label ?
    (
      <label className={`${otherProps.value.length} ? 'shrink': '' } form-input-label`}>
          {label}
      </label>
    ) : null
  }
</div>
)
