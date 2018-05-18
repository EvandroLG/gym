import React from 'react';

export default function ExerciseField(props) {
  return (
    <td>
      <input
        type="text"
        onChange={ (e) => props.onInputChange(e, props.index, props.property) }
        value={ props.value }
      />
    </td>
  ) 
}
