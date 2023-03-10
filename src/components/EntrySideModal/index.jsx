import * as React from 'react';
import './EntrySideModal.css';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';

export default function EntrySideModal(props) {
  if (!props.show) {
    return null;
  }

  const handleCreate = async () => {
    const inputs = document.querySelectorAll('#side-modal-input input');
    const data = {};
    inputs.forEach((input) => {
      if (input.value === '') {
        return;
      }
      data[input.parentNode.querySelector('#side-modal-input-title').innerHTML] = input.value;
    });
    if (props.task === 'New') {
      makeRequest(props.api(props.contentTypeId), {
        data,
      }).then((response) => {
        props.createEntry(response);
      });
    } else {
      makeRequest(props.api(props.contentTypeId, props.postId), {
        data,
      }).then((response) => {
        props.updateEntry(response);
      });
    }
  };

  return (
    <div id="entry-side-modal">
      <div id="side-modal-content">
        <div id="side-modal-title">
          {props.task} {props.contentType}
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
  createEntry: PropTypes.func,
  updateEntry: PropTypes.func,
  api: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired,
  postId: PropTypes.number,
};
