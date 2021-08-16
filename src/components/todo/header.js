import React from 'react'
import {Link } from 'react-router-dom';

function Header() {
    return (

        <header>
            <nav>
                <Link to='/'>Main page</Link>
                <Link to='/settings'>settings</Link>
            </nav>
        </header>

    )
}

export default Header
