import React from 'react'
import Button from "@material-ui/core/Button/Button";


const TextButtons = () => {
  return (
    <div>
      <Button>ALL</Button>
      <Button color="primary">Active</Button>
      <Button color="secondary">Completed</Button>
    </div>
  )
};

export default TextButtons
