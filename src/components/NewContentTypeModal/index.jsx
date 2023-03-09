import * as React from 'react';
import './NewContentTypeModal.css';
import PropTypes from 'prop-types';

export default function NewContentTypeModal(props) {
  if (!props.show) {
    return null;
  }
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
          <button type="submit" id="modal-create">Create</button>
        </div>
      </div>
    </div>
  );
}

NewContentTypeModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};
