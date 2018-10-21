import React from 'react';
import {Link} from 'react-router-dom'


export default ()=>(
    <div className="header">
        <div><Link to={`/session1`}>session1</Link></div>
        <div><Link to={`/session2`}>session2</Link></div>
    </div>
)

