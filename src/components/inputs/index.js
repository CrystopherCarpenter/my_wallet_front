import React from 'react';
import { Input } from "../../components/Login/style";

function InputGenerator(type, placeholder, set, value) {
    return (
      <Input
        type={type}
        placeholder={placeholder}
        disabled={loading}
        onChange={(e) => {
          set(e.target.value);
        }}
        value={value}
      ></Input>
    );
}
  
export default InputGenerator;