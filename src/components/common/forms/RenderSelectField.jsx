import React from 'react';

const RenderSelectField = ({ input, meta, ...props }) => {

  // const onChange = (event) => {
  //   event.preventDefault();
  //   console.log('change', event.target.value);
  // }

  return (
    <div>
      <select {...input} {...props} />
    </div>
  )
}

export default RenderSelectField;