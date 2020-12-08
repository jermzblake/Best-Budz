import React, {useEffect} from 'react';

export default function Checkbox({
    choices,
    labelFor,
    label,
    checked,
    handleInputChange
  }) {
    //   useEffect(() => {
    //       // re map choice
    //   }, )
      if (choices && choices.length > 0){
          return (
            <>
                {choices.map((choice, idx) => (
                    <label key={idx}>
                        {Object.keys(choice)[0]}: &nbsp;
                        <input type="checkbox" name={Object.keys(choice)[0]} checked={Object.values(choice)[0]} onChange={handleInputChange} />
                    </label>
                ))}
            </>
          )
      }
      return null;
  }

