import React from 'react';
import '../Checkbox/Checkbox.css'

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
                {choices.map((choice, idx) => (
                    <label key={idx} className="checkbox-container">
                        &lt; {Object.keys(choice)[0]}&nbsp;
                        <input type="checkbox" name={Object.keys(choice)[0]} checked={Object.values(choice)[0]} onChange={handleInputChange} />
                        <span class="checkmark"></span>
                    </label>
                ))}
            </>
          )
      }
      return null;
  }

