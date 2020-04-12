import React, { useState } from 'react';
import { Header } from './Header';
import { Credit } from './Credit';

import auth from '../firebase';

const Login = ({ setSession }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await auth.signInWithEmailAndPassword(
        username,
        password
      );

      const { user } = response;

      setSession({
        isLoggedIn: true,
        currentUser: user
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.message
      });
    }
  };

  const handleRegister = async () => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        username,
        password
      );

      const { user } = response;

      setSession({
        isLoggedIn: true,
        currentUser: user
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.essage
      });
    }
  };

  const handleUsername = event => {
    setUsername(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <div>
      
      <Header />
      
      <h1>อีเมล</h1>
      <input type="id" placeholder="Email" onChange={handleUsername} />
      <h1>รหัสผ่าน</h1>
      <input type="pass" placeholder="Password" onChange={handlePassword} />

      <button className="btn3" onClick={handleLogin}>
        เข้าสู่ระบบ
      </button>

      <button className="btn4" onClick={handleRegister}>
        สมัครสมาชิก
      </button>
      <Credit />
    </div>
  );
};

export default Login;
