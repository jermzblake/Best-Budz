import React from 'react';
import '../Select/Select.css'

export default function Select({
    options,
    labelFor,
    label,
    value,
    handleChange
  }) {
      if(options && options.length > 0){
        return (
          <label htmlFor={labelFor}>
            {label}
            {/* not sure why DD suggested value={value} in select tag. unless you find use for it, keep it out */}
          <select className="custom-select border-none shadow-none" name={labelFor} onChange={handleChange}>  
            {options.map((option, idx) => (
              <option key={idx} value={option}>{option}</option>
            ))}
          </select>
      </label>
        );
      }
      return null
  }