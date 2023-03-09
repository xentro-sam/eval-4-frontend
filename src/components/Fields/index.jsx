import * as React from 'react';
import './Fields.css';
import PropTypes from 'prop-types';

export default function Fields(props) {
  return (
    <div id="field-body">
      <div id="field-name">{props.fieldName}</div>
      <div id="field-type">{props.fieldType}</div>
    </div>
  );
}

Fields.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldType: PropTypes.string.isRequired,
};
