// UserProfileContext.js
import React, { createContext, useContext, useState } from 'react';

const UserProfileContext = createContext();

export function UserProfileProvider({ children }) {
  const [userProfile, setUserProfile] = useState({
    profileImage: null,
    username: null,
  });

  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
}

export function useUserProfile() {
  return useContext(UserProfileContext);
}
