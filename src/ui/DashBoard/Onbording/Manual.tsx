import Wave from "../../../assets/introWave.png";
import semiCircle from "../../../assets/circleLeft.png";
import holloCircle from "../../../assets/hollowCircle.png";
import Modal from "../../Modal";
import Button from "../../Button";
import { BsArrowLeftCircle } from "react-icons/bs";
import AddARN from "../../../Features/authentication/AddARN";
const Manual = () => {
	return (
		<div className="relative">
			<img
				src={Wave}
				alt="wave"
				draggable="false"
				className="absolute right-0 top--2 w-1/3"
			/>
			<img
				src={semiCircle}
				draggable="false"
				className="absolute left-0 top-36  w-1/6"
			/>

			<img
				src={holloCircle}
				draggable="false"
				className="absolute right-0 top-[900px]  w-1/6"
			/>

			<div className="flex flex-col items-center space-y-24 pt-64 text-xl mobile:pt-44 tablet:pt-48">
				<div className=" w-[850px] space-y-14 pr-[20px] mobile:w-[300px] mobile:text-lg tablet:w-[550px]">
					<button data-testid="arrowLeftTest" onClick={() => history.back()} className="z-2 text-4xl text-linearBlue-1"><BsArrowLeftCircle /></button>
					<p className="text-3xl font-bold mobile:text-xl">
						Step 1: Sign In to AWS Management Console:
					</p>
					<p className="">
						First, ensure that you have administrative access to the AWS
						Management Console. Sign in using your AWS account
						credentials.
					</p>
				</div>
				<div className=" w-[850px] space-y-16 pr-[20px] mobile:w-[300px] mobile:text-lg tablet:w-[550px]">
					<p className="text-3xl font-bold mobile:text-xl">
						Step 2: Navigate to IAM Service:
					</p>
					<p>
						1- After logging into the AWS Management Console, navigate
						to the IAM (Identity and Access Management) service.
						<br />
						2-Click on Roles on the left-hand sidebar.
					</p>
				</div>
				<div className=" w-[850px] space-y-16 pr-[20px] mobile:w-[300px] mobile:text-lg tablet:w-[550px]">
					<p className="text-3xl font-bold mobile:text-xl">
						Step 3: Create a New IAM Role:
					</p>
					<p>
						1- Click on Create role.
						<br />
						2- Choose Another AWS account as the type of trusted entity
						if you are providing access to another account. For service
						roles (providing access within the same account to AWS
						services), select AWS service.
						<br />
						3- Enter the Account ID of the account that needs access to
						your billing data if different from your own.
					</p>
				</div>
				<div className=" w-[850px] space-y-16 pr-[20px] mobile:w-[300px] mobile:text-lg tablet:w-[550px]">
					<p className="text-3xl font-bold mobile:text-xl">
						Step 4: Set Permissions:{" "}
					</p>
					<p>
						1- Search for and attach policies that grant access to the
						billing data. Typically, the policy Billing will suffice as
						it allows access to billing console and the budget actions.
						<br />
						2- Click on Next: Tags (optional) – add metadata to the role
						by tagging with key-value pairs.
						<br />
						3- Click on Next: Review.
					</p>
				</div>
				<div className=" w-[850px] space-y-16 pr-[20px] mobile:w-[300px] mobile:text-lg tablet:w-[550px]">
					<p className="text-3xl font-bold mobile:text-xl">
						Step 5: Review and Create Role:
					</p>
					<p>
						1- Give the role a recognizable name and a description.
						<br />
						2- Review all settings and attached policies to ensure they
						are correct.
						<br />
						3- Click on Create role.
					</p>
				</div>
				<div className=" w-[850px] space-y-16 pr-[20px] mobile:w-[300px] mobile:text-lg tablet:w-[550px]">
					<p className="text-3xl font-bold mobile:text-xl">
						Step 6: Provide the Role ARN:
					</p>
					<p>
						1- After creating the role, navigate back to the IAM
						dashboard, and select the role you just created.
						<br />
						2- Open the role and copy the Role ARN (Amazon Resource
						Name).
						<br />
						3- Provide this ARN to the person or service that requires
						access to your billing data.
					</p>
				</div>
				<Modal>
					<Modal.Open openName="ARN">
						<Button size="2xl"> Enter Your ARN </Button>
					</Modal.Open>
					<Modal.Window currentWindowname="ARN">
						<AddARN />
						{/* <div className="flex flex-col items-center space-y-4">
							<p className="text-3xl font-semibold mobile:text-xl">
								Enter Your ARN
							</p>
							<input
								type="text"
								placeholder="arn:aws:iam::123456789012:role/MyRole"
								className="h-[60px] w-[450px] rounded-full border border-gray-300 p-4 shadow-md transition-all
								 duration-300 hover:shadow-lg focus:border-transparent focus:outline-none focus:ring-2
								 focus:ring-linearOrange-200 mobile:w-[200px] mobile:text-sm"
							/>
							<Button size="2xl"> Submit </Button>
						</div> */}
					</Modal.Window>
				</Modal>
			</div>
			<div className="relative h-48">
				<img
					src={semiCircle}
					draggable="false"
					className="absolute bottom-[-300px] right-44 w-[18%] -rotate-90 mobile:bottom-[-100px] mobile:right-6
					 mobile:w-[28%] tablet:right-20 tablet:w-[28%]"
				/>
				<img
					src={Wave}
					draggable="false"
					className=" absolute bottom-0 left-0 w-1/3 rotate-180"
				/>
			</div>
		</div>
	);
};

export default Manual;
