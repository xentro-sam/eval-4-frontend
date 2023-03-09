import * as React from 'react';
import './NewFieldModal.css';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import {UPDATE_CONTENT_TYPE as updateContentType, GET_CONTENT_TYPE_FIELDS as getContentTypeFields} from '../../constants/apiEndPoints';

export default function NewFieldModal(props) {
  if (!props.show) {
    return null;
  }
  const handleClick = async () => {
    const newFieldName = document.getElementById('modal-input').children[0].value;
    await makeRequest(updateContentType(props.contentTypeId), {
      data: {
        contentTypeFields: [newFieldName],
        operation: 'add',
      },
    });
    const updatedFields = await makeRequest(getContentTypeFields(props.contentTypeId), {});
    await props.setFields(updatedFields);
  };
  return (
    <div id="new-content-type-modal">
      <div id="modal-content">
        <div id="modal-title">
            Create a new content field
        </div>
        <div id="modal-subtitle">
            Name of the field
        </div>
        <div id="modal-input">
          <input type="text" />
        </div>
        <div id="modal-buttons">
          <div id="modal-cancel" onClick={props.onClose}>Cancel</div>
          <button type="submit" id="modal-create" onClick={handleClick}>Create</button>
        </div>
      </div>
    </div>
  );
}

NewFieldModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  contentTypeId: PropTypes.number,
  setFields: PropTypes.func.isRequired,
};
