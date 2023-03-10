import * as React from 'react';
import './EntrySideModal.css';
import PropTypes from 'prop-types';

export default function EntrySideModal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div id="entry-side-modal">
      <div id="side-modal-content">
        <div id="side-modal-title">
            New {props.contentType}
        </div>
        <div id="side-modal-inputs">
          {props.fields.map((field) => {
            return (
              <div id="side-modal-input" key={field}>
                <div id="side-modal-input-title">{field}</div>
                <input type="text" />
              </div>
            );
          })}
        </div>
        <div id="side-modal-buttons">
          <div id="side-modal-cancel" onClick={props.onClose}>Cancel</div>
          <button type="submit" id="side-modal-create">Create</button>
        </div>
      </div>
    </div>
  );
}

EntrySideModal.propTypes = {
  show: PropTypes.bool,
  contentType: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};
