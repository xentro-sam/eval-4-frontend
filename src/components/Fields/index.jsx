import * as React from 'react';
import './Fields.css';
import PropTypes from 'prop-types';
import deleteIcon from '../../assets/trash-delete-recycle-bin-bucket-waste@3x.png';
import makeRequest from '../../utils/makeRequest';
import {UPDATE_CONTENT_TYPE as updateContentType} from '../../constants/apiEndPoints';

export default function Fields(props) {
  console.log(props);
  const handleDelete = async () => {
    await makeRequest(updateContentType(props.contentTypeId), {
      data: {
        contentTypeFields: [props.fieldName],
        operation: 'remove',
      },
    });
    props.removeField(props.fieldName);
  };
  return (
    <div id="field-body">
      <div id="field-name">{props.fieldName}</div>
      <div id="field-type">{props.fieldType}</div>
      <div id="field-delete">
        <img src={deleteIcon} alt="delete-icon" onClick={handleDelete} />
      </div>
    </div>
  );
}

Fields.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldType: PropTypes.string.isRequired,
  contentTypeId: PropTypes.number.isRequired,
  removeField: PropTypes.func.isRequired,
};
