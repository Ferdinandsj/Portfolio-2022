import React, { useState } from 'react';
import { useContext } from 'react';

interface IGlobalContextProps {
  aboutMe: boolean;
  setAboutMe: (aboutMe: boolean) => void;

  contactMe: boolean;
  setContactMe: (contactMe: boolean) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  aboutMe: false,
  setAboutMe: () => {},
  contactMe: false,
  setContactMe: () => {},
});

export const GlobalContextProvider = (props: any) => {
  const [aboutMe, setAboutMe] = useState(true);
  const [contactMe, setContactMe] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        aboutMe: aboutMe,
        setAboutMe: setAboutMe,
        contactMe: contactMe,
        setContactMe: setContactMe,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
