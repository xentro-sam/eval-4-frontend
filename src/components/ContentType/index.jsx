import * as React from 'react';
import './ContentType.css';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import {GET_CONTENT_TYPE_ENTRY as getContentTypeEntry} from '../../constants/apiEndPoints';

export default function ContentType(props) {
  const [fieldCount, setFieldCount] = React.useState(0);
  React.useEffect(() => {
    makeRequest(getContentTypeEntry(props.id), {})
        .then((response) => {
          if (response.length === 0) return;
          const count = Object.keys(response[0]).length;
          setFieldCount(count - 3);
        });
  }, []);
  return (
    <div id="content-type">
      <div id="content-type-name">{props.contentTypeName}</div>
      <div id="content-type-count">{fieldCount}</div>

    </div>
  );
}

ContentType.propTypes = {
  contentTypeName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};