import { ReactNode, createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
interface userContextType {
  user: object;
  setUser: Function;
}

const UserContext = createContext<userContextType | null>(null);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorageState({}, "user");
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
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
