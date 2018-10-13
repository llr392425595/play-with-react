import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const formatName = (user) => (user.firstName + ' ' + user.lastName)

const user = {
  firstName: 'Liang',
  lastName: 'Lingrui'
};

const getGreeting = (user) => {
    const defaultElem = <h1>Hello, Stranger.</h1>
    const userElem = <h1>Hello, {formatName(user)}!</h1>
    if(user){
        return userElem
    }else{
        return defaultElem
    }
}

ReactDOM.render(getGreeting(user),document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
