import * as React from 'react';
import './LoginForm.css';
const loginImage = require('../../assets/undraw-upload-re-pasx@3x.png');

export default function LoginForm() {
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
          <div id="login-button">Login</div>
        </div>
      </div>
    </div>
  );
}
