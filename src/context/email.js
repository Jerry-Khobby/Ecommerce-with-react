// Create a context file (EmailContext.js)
import React, { createContext, useContext, useState } from 'react';

const EmailContext = createContext();

export function EmailProvider({ children }) {
  const [email, setEmail] = useState('');


  
  const setEmailValue = (newEmail) => {
    setEmail(newEmail);
  };


  return (
    <EmailContext.Provider value={{ email, setEmail:setEmailValue }}>
      {children}
    </EmailContext.Provider>
  );
}

export function useEmail() {
  return useContext(EmailContext);
}
