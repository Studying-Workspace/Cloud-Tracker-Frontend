import { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

interface tokenType {
	token: string;
	refreshToken: string;
}

interface userContextType {
	tokens: tokenType | null;
	setTokens: Function;
	selectedRole : string ;
	setSelectedRole : Function ;
}

const UserContext = createContext<userContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
	const [selectedRole, setSelectedRole] = useState<string>("");
	const [tokens, setTokens] = useLocalStorageState(null, "tokens");
	const contextValues: userContextType = {
		tokens,
		setTokens,
		selectedRole,
		setSelectedRole
	};
	return (
		<UserContext.Provider value={contextValues}>
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
