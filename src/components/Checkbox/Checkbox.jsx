import React from 'react';

export default function Checkbox({
    choices,
    labelFor,
    label,
    checked,
    handleInputChange
  }) {
      if (choices && choices.length > 0){
          return (
            <>
                {choices.map((choice) => (
                    <label>
                        {choice}: &nbsp;
                        <input type="checkbox" name={choice} checked={checked} onChange={handleInputChange} />
                    </label>
                ))}
            </>
          )
      }
      return null;
  }

