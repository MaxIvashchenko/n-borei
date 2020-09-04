import React from 'react'
import { Link } from 'react-router-dom';

export default function NavItem ({href, text}) {
    return <div className="nav-item "><Link to={href} className="nav-link"  >{text}</Link></div>
}