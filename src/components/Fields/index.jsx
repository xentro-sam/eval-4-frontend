import * as React from 'react';
import './Fields.css';
import PropTypes from 'prop-types';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@3x.png';
import editIcon from '../../assets/user-pencil-write-ui-education@3x.png';
import makeRequest from '../../utils/makeRequest';
import {UPDATE_CONTENT_TYPE as updateContentType, UPDATE_CONTENT_FIELD_NAME as updateContentFieldName} from '../../constants/apiEndPoints';

export default function Fields(props) {
  const [showEdit, setShowEdit] = React.useState(false);
  const handleDelete = async () => {
    await makeRequest(updateContentType(props.contentTypeId), {
      data: {
        contentTypeFields: [props.fieldName],
        operation: 'remove',
      },
    });
    props.removeField(props.fieldName);
  };
  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };
  const handleEditName = () => {
    const newTitle = document.getElementById('field-name-edit-input').value;
    if (newTitle) {
      const data = {
        oldName: props.fieldName,
        newName: newTitle,
      };
      makeRequest(updateContentFieldName(props.contentTypeId), {
        data,
      }).then((res) => {
        props.renameFields(props.fieldName, newTitle);
        setShowEdit(false);
      });
    }
  };

  return (
    <div id="field-body">
      <div id="field-name">
        {props.fieldName}
        {showEdit && (
          <div>
            <input type="text" id="field-name-edit-input" placeholder="Enter new name" />
            <button id="field-name-edit-button" onClick={handleEditName}>Save</button>
          </div>
        )}
      </div>
      <div id="field-type">{props.fieldType}</div>
      <div id="field-actions">
        <div id="field-delete">
          <img src={deleteIcon} alt="delete-icon" onClick={handleDelete} />
        </div>
        <div id="field-edit">
          <img src={editIcon} alt="edit-icon" onClick={toggleEdit} />
        </div>
      </div>
    </div>
  );
}

Fields.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldType: PropTypes.string.isRequired,
  contentTypeId: PropTypes.number.isRequired,
  removeField: PropTypes.func.isRequired,
  renameFields: PropTypes.func.isRequired,
};
