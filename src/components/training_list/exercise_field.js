import React from 'react';

export default (props) => {
  return (
    <td>
      <input type="text"
        onChange={ (e) => props.onInputChange(e, props.index, props.property) }
        value={ props.value }
      />
    </td>
  ) 
}
