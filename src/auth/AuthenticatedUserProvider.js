import { useState } from "react";
import { createContext } from "react";

const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ childern }) => {
    const [user, setUser] = useState(null);
    return(
      <AuthenticatedUserContext.Provider value={[user, setUser]}>
        {childern}
      </AuthenticatedUserContext.Provider>
    )
  };

  
export default AuthenticatedUserProvider;