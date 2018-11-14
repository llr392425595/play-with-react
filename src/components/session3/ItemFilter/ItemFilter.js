import React from 'react'
import Button from "@material-ui/core/Button/Button";


const TextButtons = (props) => {
  const {changeFilterMethod} = props;

  return (
    <div>
      <Button onClick={() => changeFilterMethod('SHOW_ALL')}>ALL</Button>
      <Button onClick={() => changeFilterMethod('SHOW_ACTIVE')} color="primary">Active</Button>
      <Button onClick={() => changeFilterMethod('SHOW_INACTIVE')} color="secondary">Completed</Button>
    </div>
  )
};

export default TextButtons
