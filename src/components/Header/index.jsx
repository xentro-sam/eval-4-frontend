import * as React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <div id="header-title">
      {props.title}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
