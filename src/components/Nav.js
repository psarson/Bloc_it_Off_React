import React from 'react'     
import { IndexLink, Link } from "react-router"; 

class Nav extends React.Component {
    
    render() {      
        return (    
            <div className="nav">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <IndexLink to="/">Home</IndexLink>
                    </li>
                    <li className="active">
                        <Link to="expired">Expired</Link>
                    </li>
                    <li className="active">
                        <Link to="completed">Completed</Link>
                    </li> 
                    <li className="active">
                        <Link to="about">About</Link>
                    </li>
                </ul>
            </div>  
        ) 
    }
} 

export default Nav