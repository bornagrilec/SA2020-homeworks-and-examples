import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Header.scss';

const links = {
    speakers: 'Speakers',
    events: 'Events',
    todos: 'Todos',
}

const Header = () => {
    return (
        <header className="HeaderMain">
            <div className="HeaderMain-Inner">
                <Link to="/" className="LogoContainer">
                    <img className="LogoContainer-Image" src={Logo} alt="Logo" />
                </Link>
                <nav className="HeaderMain-Nav">
                    <ul className="HeaderMain-NavList">
                        <li className="HeaderMain-NavListItem">
                            <NavLink className="HeaderMain-NavLink" activeClassName="IsActiveNavLink"
                                to="/events">{links.events}</NavLink>
                        </li>
                        <li className="HeaderMain-NavListItem">
                            <NavLink className="HeaderMain-NavLink" activeClassName="IsActiveNavLink"
                                to="/speakers">{links.speakers}</NavLink>
                        </li>
                        <li className="HeaderMain-NavListItem">
                            <NavLink className="HeaderMain-NavLink" activeClassName="IsActiveNavLink"
                                to="/todos">{links.todos}</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;




