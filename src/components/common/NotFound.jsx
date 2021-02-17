import React from 'react'
import { Link } from "react-router-dom";

export default function NotFound({mainPage}) {
    return (
        <div className='NotFound'>
            <p className="number">404</p>
            <p>Page not found</p>

            <p className='text'>Dear Customer,
            The page you have requested is no longer available.</p>


            <Link to={mainPage}>
                <div className="homeBtn">
                    <p>Back to Home</p>
                </div>
            </Link>


        </div>
    )
}
