import Button from "../../Button";
import { useRef } from "react";
import { IoCloudOutline } from "react-icons/io5";
import { FaTerminal } from "react-icons/fa6";
import { TbTool } from "react-icons/tb";
import { GoCode } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { handleToastMessage } from "../../../utils/helper";
import useUploadCSVFile from "../../../Features/DashBoard/useUploadCSVFile";
import { useUserContext } from "../../../context/UserProvider";

const AllMethodes = () => {
	const {uploadCSVFile} = useUploadCSVFile() ;
	const {setCSVFile , setSelectedRole} = useUserContext() ;
	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleFileChange = (e:any) => {
		const selectedFile = e.target.files[0] ;
		let formData = new FormData() ;
		setCSVFile(selectedFile) ;
		setSelectedRole(selectedFile) ;
		formData.append('file' ,  selectedFile) ;
		if (selectedFile?.type !== "text/csv")
			handleToastMessage("Please Select CSV File", "warning");
		else {
			uploadCSVFile(formData) ;
		}
	};

	const handleButtonClick = () => {
		fileInputRef.current?.click();
	};

	const nav = useNavigate();
	const toPage = (method: string) => () => {
		nav(`/dashboard/${method}`);
	};

	return (
		<div className="mx-12 my-12 h-[80vh] space-y-8 border-4  border-gradient-br-mixcolor mobile:mx-4 mobile:my-9 mobile:h-auto  mobile:pb-11 tablet:h-[85vh]">
			<div className="mx-auto mt-[70px] w-max text-3xl font-medium text-blue-800 mobile:mx-4 mobile:mt-8 mobile:w-auto mobile:text-lg">
				Upload Your Billing Data As a CSV File
			</div>
			<div className="mx-auto flex w-max justify-center space-x-8 mobile:flex-col mobile:space-y-4">
				<input
					type="file"
					ref={fileInputRef}
					className="hidden"
					onChange={handleFileChange}
					data-testid="fileInput"
				/>
				<Button size="xl" onClick={handleButtonClick}>
					Upload File
				</Button>
				<div className="w-fit rounded-3xl bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 p-1">
					<button
						className="flex w-[192px] justify-center rounded-3xl bg-white py-1 mobile:w-[154px] mobile:text-sm"
						onClick={toPage("instruction")}
						data-testid="show-instructions"
					>
						Show Instructions
					</button>
				</div>
			</div>
			<div className="mx-auto flex w-max justify-center pt-[40px] text-3xl font-medium text-blue-800 mobile:mx-4 mobile:mt-8 mobile:w-auto mobile:text-lg tablet:pt-3">
				or link your AWS account via
			</div>
			<div className="mx-14 flex flex-wrap justify-center gap-16 pt-8">
				<div
					className="shadow-3xl hover:shadow-4xl flex h-48 w-52 flex-col place-items-center space-y-5 rounded-3xl border-4 pt-8 hover:h-[200px] hover:w-[215px]"
					onClick={toPage("manual")}
					data-testid="manual-onboarding"
				>
					<TbTool className="h-16 w-16 text-blue-800" />
					<div className=" text-lg font-medium text-blue-800">
						Manual Onboarding
					</div>
				</div>
				<div
					className="shadow-3xl hover:shadow-4xl flex h-48 w-52 flex-col place-items-center space-y-5 rounded-3xl border-4 pt-8 hover:h-[200px] hover:w-[215px]"
					onClick={toPage("terminal")}
					data-testid="terminal"
				>
					<FaTerminal className="h-16 w-16 text-blue-800" />
					<div className=" text-lg font-medium text-blue-800">
						AWS CLI
					</div>
				</div>
				<div
					className="shadow-3xl hover:shadow-4xl flex h-48 w-52 flex-col place-items-center space-y-5 rounded-3xl border-4 pt-8 hover:h-[200px] hover:w-[215px]"
					onClick={toPage("cloudFormation")}
					data-testid="cloudFormation"
				>
					<IoCloudOutline className="h-16 w-16 text-blue-800" />
					<div className=" text-lg font-medium text-blue-800">
						Cloud Formation
					</div>
				</div>
				<div
					className="shadow-3xl hover:shadow-4xl flex h-48 w-52 flex-col place-items-center space-y-5 rounded-3xl border-4 pt-8 hover:h-[200px] hover:w-[215px]"
					onClick={toPage("cdk")}
					data-testid="cdk"
				>
					<GoCode className="h-16 w-16 text-blue-800" />
					<div className=" text-lg font-medium text-blue-800">CDK</div>
				</div>
			</div>
		</div>
	);
};

export default AllMethodes;
