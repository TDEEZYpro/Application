<<<<<<< HEAD
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

  
=======
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

  
>>>>>>> 97de0230d9fd02fc4461f9549053bdcc38308256
export default AuthenticatedUserProvider;