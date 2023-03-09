import * as React from 'react';
import './FieldsContainer.css';
import PropTypes from 'prop-types';
import Fields from '../Fields';
import {v4 as uuidv4} from 'uuid';

export default function FieldsContainer(props) {
  return (
    <div id="fields-container-body">
      <div id="fields-container-header">
        {props.title}
      </div>
      <div id="fields-count">
        {props.fields.length} fields
      </div>
      <div id="add-field-button">
        Add Another Field
      </div>
      <div id="fields-container-content">
        {props.fields.map((field) => {
          return <Fields fieldName={field} fieldType={'Text'} key={uuidv4()} />;
        })
        }
      </div>
    </div>
  );
}

FieldsContainer.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.array,
};
