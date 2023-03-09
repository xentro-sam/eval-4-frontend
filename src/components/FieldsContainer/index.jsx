import * as React from 'react';
import './FieldsContainer.css';
import PropTypes from 'prop-types';
import Fields from '../Fields';
import {v4 as uuidv4} from 'uuid';
import NewFieldModal from '../NewFieldModal';

export default function FieldsContainer(props) {
  const [show, setShow] = React.useState(false);
  return (
    <div id="fields-container-body">
      <div id="fields-container-header">
        {props.title}
      </div>
      <div id="fields-count">
        {props.fields.length} fields
      </div>
      <div id="add-field-button" onClick={() => setShow(true)}>
        Add Another Field
      </div>
      <NewFieldModal show={show} onClose={() => setShow(false)} contentTypeId={props.contentTypeId} setFields={props.setFields} />
      <div id="fields-container-content">
        {props.fields.map((field) => {
          return <Fields fieldName={field} fieldType={'Text'} key={uuidv4()} contentTypeId={props.contentTypeId} />;
        })
        }
      </div>
    </div>
  );
}

FieldsContainer.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.array,
  contentTypeId: PropTypes.number,
  setFields: PropTypes.func.isRequired,
};
