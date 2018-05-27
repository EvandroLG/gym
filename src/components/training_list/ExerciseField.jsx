import React from 'react';

export default function ExerciseField(props) {
  return (
    <td>
      <input
        type="text"
        onChange={ (e) => props.onInputChange(props.id, props.property, e.target.value) }
        value={ props.value }
      />
    </td>
  )
}
