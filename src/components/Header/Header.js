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
}

const Header = () => {
    return (
        <HeaderMain>
            <HeaderMainInner>
                <LogoContainerLink to="/">
                    <LogoContainerImage src={ImgLogo} alt="Logo" />
                </LogoContainerLink>
                <HeaderMainNav>
                    <HeaderMainNavList>
                        {/* Iterate through links object and return navigation list items with object data */}
                        {Object.keys(links).map(key => (
                            <HeaderMainNavListItem>
                                <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                    to={`/${key}`}>{links[key]}</HeaderMainNavLink>
                            </HeaderMainNavListItem>
                        ))}
                    </HeaderMainNavList>
                </HeaderMainNav>
            </HeaderMainInner>
        </HeaderMain>
    );
}

export default Header;




