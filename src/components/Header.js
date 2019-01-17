import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <nav className=" header ">
        <div href="/">{props.title}</div>
    </nav>
);

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;