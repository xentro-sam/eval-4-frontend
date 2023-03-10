import * as React from 'react';
import './LoginForm.css';
const loginImage = require('../../assets/undraw-upload-re-pasx@3x.png');
import authRequest from '../../utils/authUtil';
import {LOGIN, VALIDATE_TOKEN} from '../../constants/apiEndPoints';
import {useNavigate} from 'react-router';
import {CONTENT_TYPE_BUILDER} from '../../constants/routes';

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = React.useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    authRequest(LOGIN, {
      data: {
        email:
          document.getElementById('login-form-inputs').children[0].value,
        password:
          document.getElementById('login-form-inputs').children[1].value,
      },
    })
        .then((response) => {
          localStorage.setItem('token', response.token);
          authRequest(VALIDATE_TOKEN, {
            headers: {
              Authorization: `Bearer ${response.token}`,
            },
          });
        })
        .then((response) => {
          setErrorMessage('');
          navigate(CONTENT_TYPE_BUILDER);
        })
        .catch((error) => {
          localStorage.removeItem('token');
          setErrorMessage(error.response.data.error);
        });
  };
  return (
    <div id="login">
      <div id="login-image">
        <div>
          Design APIs fast,
        </div>
        <div>
          Manage content easily.
        </div>
        <img src={loginImage} alt="login-image" />
      </div>
      <div id="login-form">
        <div id="login-form-title">
          Login to your CMS+ account
        </div>
        <div id="login-form-inputs">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div id="login-button" onClick={handleLogin}>Login</div>
          {errorMessage && <div id="login-error-message">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
}
