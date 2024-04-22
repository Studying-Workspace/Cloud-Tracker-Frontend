import { ReactNode, createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";


interface userContextType {
  tokens: any;
  setTokens: Function;
}

const UserContext = createContext<userContextType | null>(null);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [tokens, setTokens] = useLocalStorageState(null, "tokens");

  return (
    <UserContext.Provider
      value={{
        tokens,
        setTokens,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error("out of provider");
  return context;
};

export { useUserContext };
export default UserProvider;
