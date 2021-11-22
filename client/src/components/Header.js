import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
        <div className="nav-wrapper">
            <Link to={'/'} className="brand-logo">Koverpack</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to={'/shop'}>Tienda</Link></li>
                <li><Link to={'/about'}>Acerca de</Link></li>
            </ul>
        </div>
    </nav>
)

export default Header; 