import React from 'react';

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
            {/* not sure why DD suggested value in select tag */}
          <select name={labelFor} value={value} onChange={handleChange}>  
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
      </label>
        );
      }
      return null
  }