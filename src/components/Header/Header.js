import React from 'react';

import {
    HeaderMain,
    HeaderMainInner,
    HeaderMainNav,
    HeaderMainNavList,
    HeaderMainNavListItem,
    HeaderMainNavLink,
    LogoContainerLink,
    LogoContainerImage
} from './HeaderStyle';

import ImgLogo from '../../assets/img/logo.png';

// Object key is name of route
// Object value is name shown on link in UI
const links = {
    speakers: 'Speakers',
    events: 'Events',
    register: 'Register',
    login: 'Login',
    logout: 'Logout',
}

const Header = (props) => {

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        props.onAuthChange(false);
    }

    return (
        <HeaderMain>
            <HeaderMainInner>
                <LogoContainerLink to="/">
                    <LogoContainerImage src={ImgLogo} alt="Logo" />
                </LogoContainerLink>
                <HeaderMainNav>
                    <HeaderMainNavList>
                        {/* Iterate through links object and return navigation list items with object data */}
                        {/* {Object.keys(links).map(key => (
                            <HeaderMainNavListItem key={key}>
                                <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                    to={`/${key}`}>{links[key]}</HeaderMainNavLink>
                            </HeaderMainNavListItem>
                        ))} */}
                        <HeaderMainNavListItem>
                            <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                to={`/speakers`}>{links.speakers}</HeaderMainNavLink>
                        </HeaderMainNavListItem>
                        <HeaderMainNavListItem>
                            <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                to={`/events`}>{links.events}</HeaderMainNavLink>
                        </HeaderMainNavListItem>
                        {!props.isAuthenticated ?
                            <>
                                <HeaderMainNavListItem>
                                    <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                        to={`/register`}>{links.register}</HeaderMainNavLink>
                                </HeaderMainNavListItem>
                                <HeaderMainNavListItem>
                                    <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                        to={`/login`}>{links.login}</HeaderMainNavLink>
                                </HeaderMainNavListItem>
                            </>
                            :
                            <HeaderMainNavListItem>
                                <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                    to={`/logout`} onClick={handleLogout}>{links.logout}</HeaderMainNavLink>
                            </HeaderMainNavListItem>
                        }
                    </HeaderMainNavList>
                </HeaderMainNav>
            </HeaderMainInner>
        </HeaderMain>
    );
}

export default Header;




