import React from 'react';

export const UserContext = React.createContext();

export const useStorage = ({ children }) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <UserContext.Provider value={{ loading }}> {children}</UserContext.Provider>
  );
};
