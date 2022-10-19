import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className={'nav'}>
            <nav>
                <Link to={'/'}> Верстка</Link>
                <Link to={'/layout2'}>Верстка 2я часть</Link>
                <Link to='/table'> Табличка </Link>
                <Link to={'/JavaScript'}> JavaScript</Link>
            </nav>
        </div>
    );
};

export default Nav;
