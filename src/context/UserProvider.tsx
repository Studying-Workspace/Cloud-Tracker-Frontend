import { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

interface tokenType {
	token: string;
	refreshToken: string;
}

interface userContextType {
	tokens: tokenType | null;
	setTokens: Function;
	selectedRole: string | File;
	setSelectedRole: Function;
	iamRolesArn: string[];
	setIAmRolesArn: Function;
	csvFile : File;
	setCSVFile: Function;
}

const UserContext = createContext<userContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
	const [selectedRole, setSelectedRole] = useLocalStorageState(null, "role");
	const [tokens, setTokens] = useLocalStorageState(null, "tokens");
	const [csvFile , setCSVFile] = useLocalStorageState(null , "csvFile") ;
	const [iamRolesArn, setIAmRolesArn] = useState<string[]>([]);
	const contextValues: userContextType = {
		tokens,
		setTokens,
		selectedRole,
		setSelectedRole,
		iamRolesArn,
		setIAmRolesArn,
		csvFile,
		setCSVFile
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
