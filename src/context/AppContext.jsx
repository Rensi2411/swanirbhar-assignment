import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AppContext.Provider value={{ courses, setCourses, user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
