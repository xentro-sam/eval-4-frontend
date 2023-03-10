import * as React from 'react';
import './EntrySideModal.css';
import PropTypes from 'prop-types';
import {CREATE_CONTENT_TYPE_ENTRY as createContentTypeEntry} from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

export default function EntrySideModal(props) {
  if (!props.show) {
    return null;
  }

  const handleCreate = async () => {
    const inputs = document.querySelectorAll('#side-modal-input input');
    const data = {};
    inputs.forEach((input) => {
      data[input.parentNode.querySelector('#side-modal-input-title').innerHTML] = input.value;
    });
    makeRequest(createContentTypeEntry(props.contentTypeId), {
      data,
    }).then((response) => {
      props.createEntry(response);
    });
  };

  return (
    <div id="entry-side-modal">
      <div id="side-modal-content">
        <div id="side-modal-title">
            New {props.contentType}
        </div>
        <div id="side-modal-inputs">
          {props.fields.map((field) => {
            return field !== 'id' && (
              <div id="side-modal-input" key={field}>
                <div id="side-modal-input-title">{field}</div>
                <input type="text" />
              </div>
            );
          })}
        </div>
        <div id="side-modal-buttons">
          <div id="side-modal-cancel" onClick={props.onClose}>Cancel</div>
          <button type="submit" id="side-modal-create" onClick={handleCreate}>Add</button>
        </div>
      </div>
    </div>
  );
}

EntrySideModal.propTypes = {
  show: PropTypes.bool,
  contentType: PropTypes.string.isRequired,
  contentTypeId: PropTypes.number.isRequired,
  fields: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  createEntry: PropTypes.func.isRequired,
};
