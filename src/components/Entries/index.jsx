import * as React from 'react';
import './Entries.css';
import PropTypes from 'prop-types';
const editIcon = require('../../assets/user-pencil-write-ui-education@3x.png');
const deleteIcon = require('../../assets/trash-delete-recycle-bin-bucket-waste@3x.png');
import makeRequest from '../../utils/makeRequest';
import {DELETE_CONTENT_TYPE_ENTRY as deleteContentTypeEntry} from '../../constants/apiEndPoints';

export default function Entries(props) {
  const handleDelete = async () => {
    await makeRequest(deleteContentTypeEntry(props.contentTypeId, props.id), {});
  };
  return (
    <div id="entries">
      {props.reqAttributes.map((attribute) => {
        return (
          <div id="entry" key={attribute}>
            {props[attribute]}
          </div>
        );
      })}
      <div id="entry-actions">
        <div id="edit-entry">
          <img src={editIcon} alt="edit" />
        </div>
        <div id="delete-entry">
          <img src={deleteIcon} alt="delete" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}

Entries.propTypes = {
  id: PropTypes.number.isRequired,
  reqAttributes: PropTypes.array.isRequired,
  contentTypeId: PropTypes.number.isRequired,
};
