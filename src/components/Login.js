import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect or update UI on success
    } catch (error) {
      console.error('Error signing in', error);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect or update UI on success
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={handleSignIn}>
        Sign In
      </button>
      <button className="w-full bg-green-500 text-white py-2 rounded mt-4 hover:bg-green-600" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
};

export default Login;