import React from 'react'
import AuthContext from './AuthContext';
import { useState } from 'react';

const AuthProvider = ({ children }) => {
  
  const [auth, setAuth] = useState(null);
  const [token, setToken] = useState(localStorage.getItem( "token" ))

  const storeTokenLS = (serverToken) => {
    return localStorage.setItem( "token", serverToken )
  }

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider