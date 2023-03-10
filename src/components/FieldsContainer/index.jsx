import * as React from 'react';
import './FieldsContainer.css';
import PropTypes from 'prop-types';
import Fields from '../Fields';
import {v4 as uuidv4} from 'uuid';
import NewFieldModal from '../NewFieldModal';
const editIcon = require('../../assets/user-pencil-write-ui-education@3x.png');
import makeRequest from '../../utils/makeRequest';
import {UPDATE_CONTENT_TYPE as updateContentType} from '../../constants/apiEndPoints';

export default function FieldsContainer(props) {
  const [show, setShow] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const removeField = (field) => {
    const newFields = props.fields.filter((f) => f !== field);
    props.setFields(newFields);
  };
  const toggleEditBox = () => {
    setShowEdit(!showEdit);
  };
  const handleEditName = () => {
    const newTitle = document.getElementById('container-title-edit-input').value;
    if (newTitle) {
      const data = {
        contentTypeName: newTitle,
      };
      makeRequest(updateContentType(props.contentTypeId), {
        data,
      }).then((res) => {
        props.setContainerTitle(newTitle);
        setShowEdit(false);
      });
    }
  };

  const renameFields = (oldName, newName) => {
    const newFields = props.fields.map((field) => {
      if (field === oldName) {
        return newName;
      }
      return field;
    });
    console.log(newFields);
    props.setFields(newFields);
  };

  return (
    <div id="fields-container-body">
      <div id="fields-container-header">
        <div id="fields-container-title">
          {props.title}
        </div>
        <div id="container-title-edit">
          <img src={editIcon} alt="container-title-edit" onClick={toggleEditBox} />
        </div>
        {showEdit && (
          <div>
            <input type="text" id="container-title-edit-input" placeholder="Enter new title" />
            <button id="container-title-edit-button" onClick={handleEditName}>Save</button>
          </div>
        )}
      </div>
      <div id="fields-count">
        {props.fields.length} fields
      </div>
      <div id="add-field-button" onClick={() => setShow(true)}>
        Add Another Field
      </div>
      <NewFieldModal show={show} onClose={() => setShow(false)} contentTypeId={props.contentTypeId} setFields={props.setFields} />
      <div id="fields-container-content">
        {props.fields.map((field) => {
          return <Fields fieldName={field} fieldType={'Text'} key={uuidv4()} contentTypeId={props.contentTypeId} removeField={removeField} renameFields={renameFields} />;
        })
        }
      </div>
    </div>
  );
}

FieldsContainer.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.array,
  contentTypeId: PropTypes.number,
  setFields: PropTypes.func.isRequired,
  setContainerTitle: PropTypes.func.isRequired,
};
