import React from 'react';

const RenderSelectField = ({ input, meta, ...props }) => {

  return (
    <div>
      <select {...input} {...props} />
    </div>
  )
}

export default RenderSelectField;