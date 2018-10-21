import React from 'react'

const UserGreeting = () => <h1>Welcome LLR!</h1>
const GuestGreeting = () => <h1>Please sign up.</h1>

const Greeting = props => {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

export default Greeting