import { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [indexKey, setIndexKey] = useState(null);

  const contextValue = {
    indexKey,
    setIndexKey,
  };

  return (
    <MyContext.Provider value={contextValue} >
      {children}
    </MyContext.Provider>
  )
}


export {MyContext, MyContextProvider};