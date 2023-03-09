import * as React from 'react';
import './NewContentTypeModal.css';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import {CREATE_CONTENT_TYPE, GET_CONTENT_TYPES} from '../../constants/apiEndPoints';

export default function NewContentTypeModal(props) {
  if (!props.show) {
    return null;
  }
  const handleClick = async () => {
    const newFieldName = document.getElementById('modal-input').children[0].value;
    await makeRequest(CREATE_CONTENT_TYPE, {
      data: {
        contentTypeName: newFieldName,
        contentTypeFields: [],
      },
    });
    const updatedContentTypes = await makeRequest(GET_CONTENT_TYPES, {});
    await props.setContentTypes(updatedContentTypes);
    await props.setCollectionTypes(updatedContentTypes);
  };
  return (
    <div id="new-content-type-modal">
      <div id="modal-content">
        <div id="modal-title">
            Create a new content type
        </div>
        <div id="modal-subtitle">
            Name of the content type
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

NewContentTypeModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  setContentTypes: PropTypes.func.isRequired,
  setCollectionTypes: PropTypes.func.isRequired,
};
