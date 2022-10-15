import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className={'nav'}>
            <nav>
                    <Link to='/'> Табличка </Link>
                    <Link to={'/layout'}> Верстка Мобильная</Link>
                    <Link to={'/JavaScript'}> JavaScript</Link>

            </nav>
        </div>
    );
};

export default Nav;
