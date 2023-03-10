import * as React from 'react';
import './Entries.css';
import PropTypes from 'prop-types';
const editIcon = require('../../assets/user-pencil-write-ui-education@3x.png');
const deleteIcon = require('../../assets/trash-delete-recycle-bin-bucket-waste@3x.png');
import makeRequest from '../../utils/makeRequest';
import {DELETE_CONTENT_TYPE_ENTRY as deleteContentTypeEntry} from '../../constants/apiEndPoints';
import {v4 as uuidv4} from 'uuid';
import EntrySideModal from '../EntrySideModal';

export default function Entries(props) {
  const [showModal, setShowModal] = React.useState(false);
  const handleDelete = async () => {
    await makeRequest(deleteContentTypeEntry(props.contentTypeId, props.id), {});
    props.removeEntry(props.id);
  };
  return (
    <div id="entries">
      {props.reqAttributes.map((attribute) => {
        return (
          <div id="entry" key={uuidv4()}>
            {props[attribute]}
          </div>
        );
      })}
      <div id="entry-actions">
        <div id="edit-entry">
          <img src={editIcon} alt="edit" onClick={() => setShowModal(true)} />
        </div>
        <div id="delete-entry">
          <img src={deleteIcon} alt="delete" onClick={handleDelete} />
        </div>
      </div>
      <EntrySideModal show={showModal} onClose={() => setShowModal(false)} contentType={props.contentTypeName} fields={props.fields} updateEntry={props.updateEntry} api={props.api} task="Update" contentTypeId={props.contentTypeId} postId={props.id} />
    </div>
  );
}

Entries.propTypes = {
  id: PropTypes.number.isRequired,
  reqAttributes: PropTypes.array.isRequired,
  contentTypeId: PropTypes.number.isRequired,
  removeEntry: PropTypes.func.isRequired,
  contentTypeName: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  updateEntry: PropTypes.func.isRequired,
  api: PropTypes.func.isRequired,
};
