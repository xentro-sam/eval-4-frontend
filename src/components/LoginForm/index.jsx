import * as React from 'react';
import './LoginForm.css';

export default function LoginForm() {
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form>
        <label>
            Username
          <input type="text" />
        </label>
        <label>
            Password
          <input type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
