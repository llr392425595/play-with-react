import React from 'react'

const Mailbox = props => {
  const {unreadMessages} = props;
  return (
    <div>
      {unreadMessages.length > 0 && (<h2>你有{unreadMessages.length}条未读消息！</h2>)}
    </div>
  )
};

export default Mailbox
