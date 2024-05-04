import { useNavigate } from "react-router-dom";
import ColumnChart from "../../Features/DashBoard/ColumnChart";
import LineChart from "../../Features/DashBoard/LineChart";
import PieChart from "../../Features/DashBoard/PieChart";
import useIamRoles from "../../Features/DashBoard/useIamRoles";
import SelectFilter from "./SelectFilter";
import Spinner from "../Spinner";
import { useUserContext } from "../../context/UserProvider";
import useGetBillingData from "../../Features/DashBoard/useGetBillingData";
import { useEffect } from "react";


const AllCharts = () => {
	const navigate = useNavigate();
	const {isLoading:billingDataLoading} = useGetBillingData();
	const {selectedRole , setSelectedRole , iamRolesArn , setIAmRolesArn} = useUserContext() ;
	const { IamRoles, isLoading: IamRolesLoading } = useIamRoles();

	useEffect(() => {
		if (IamRolesLoading) return;
		let handleIamRoles: string[] = [];
		IamRoles?.map((role: any) => handleIamRoles.push(role?.arn));
		setIAmRolesArn(handleIamRoles);
		setSelectedRole(handleIamRoles[0]);
	}, [IamRoles, IamRolesLoading]);

	if (IamRolesLoading || billingDataLoading) return <Spinner />;

	return (
		<div>
			<SelectFilter
				value={selectedRole}
				setValue={setSelectedRole}
				options={iamRolesArn}
				defaultValue={selectedRole === "" || undefined ? "I Am Role Arn"  : selectedRole}
			/>
			<div className="grid grid-cols-2 grid-rows-2 gap-x-4 mobile:flex  mobile:flex-col mobile:gap-4 mobile:overflow-y-auto mobile:overflow-x-hidden tablet:flex tablet:flex-col tablet:gap-4 tablet:overflow-y-auto tablet:overflow-x-hidden">
				<div
					className="col-span-2 w-full self-center tablet:col-span-1"
					onClick={() => navigate("lineChart")}
				>
					<LineChart type="mini" />
				</div>
				<div onClick={() => navigate("columnChart")}>
					<ColumnChart type="mini" />
				</div>
				<div onClick={() => navigate("pieChart ")}>
					<PieChart type="mini" />
				</div>
			</div>
		</div>
	);
};
export default AllCharts;
