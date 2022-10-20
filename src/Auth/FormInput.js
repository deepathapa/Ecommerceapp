import React, { useState } from 'react';

const FormInput = (props) => {
  const [focused,setFocused] = useState(false);
  const {label,errorMessage,onChange,id,...inputProps} = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <>
      <div className="input_field register_input">
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
        <p className="error">{errorMessage}</p>
      </div>
    </>
  )
}

export default FormInput