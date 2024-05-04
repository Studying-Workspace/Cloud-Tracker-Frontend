import Wave from "../../../assets/introWave.png";
import semiCircle from "../../../assets/circleLeft.png";
import holloCircle from "../../../assets/hollowCircle.png";
import Modal from "../../Modal";
import Button from "../../Button";
import { BsArrowLeftCircle } from "react-icons/bs";
import AddARN from "../../../Features/DashBoard/AddARN";
const CloudFormation = () => {
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

			<div className="z-10 flex flex-col items-center space-y-20 pt-[150px] mobile:pt-44">
				<div className=" w-[850px] space-y-24 pr-[20px] text-xl mobile:w-[300px] mobile:text-lg tablet:w-[550px]">
					<button
						data-testid="arrowLeftTest"
						onClick={() => history.back()}
						className="z-2 text-4xl text-linearBlue-1"
					>
						<BsArrowLeftCircle />
					</button>
					<p className="text-3xl font-bold mobile:text-xl">
						Step 1: Create a CloudFormation Template
					</p>
					<div className="space-y-6">
						<p>
							First, you will need to create a YAML formatted
							CloudFormation template. This template will define the
							resources needed to create an IAM role with the
							appropriate policies for billing access.
						</p>
						<div className="rounded-lg border-4 border-gradient-br-mixcolor mobile:text-xs">
							<div className="shadow-3xl mb-4 border-b-4 p-2 border-gradient-tr-mixcolor">
								yaml
							</div>
							<div className="m-2 flex flex-col font-semibold">
								<div className="flex flex-row">
									<span className=" text-red-700">
										AWSTemplateFormatVersion
									</span>
									<pre>: </pre>
									<span className=" text-green-600">
										'2010-09-09'
									</span>
								</div>
								<div className="flex flex-row">
									<span className=" text-red-700">Description</span>
									<pre>: </pre>
									<span className=" word text-green-600">
										Create IAM Role with Billing Access
									</span>
								</div>
								<div className="flex flex-row">
									<span className=" text-red-700">Resources</span>:
								</div>
								<div className="flex flex-row">
									<pre> </pre>
									<span className=" text-red-700">
										BillingAccessPolicy
									</span>
									:
								</div>
								<div className="flex flex-row">
									<pre> </pre>
									<span className=" text-red-700">Type</span>
									<pre>: </pre>
									<span className=" text-green-600">
										AWS::IAM::ManagedPolicy
									</span>
									:
								</div>
								<div className="flex flex-row">
									<pre>{"  "}</pre>
									<span className=" text-red-700">Properties</span>:
								</div>
								<div className="flex flex-row">
									<pre>{"   "}</pre>
									<span className=" text-red-700">Description</span>
									<pre>: </pre>
									<span className=" text-green-600">
										"Policy that grants access to AWS Billing"
									</span>
								</div>
								<div className="flex flex-row">
									<pre>{"   "}</pre>
									<span className=" text-red-700">
										PolicyDocument
									</span>
									:
								</div>
								<div className="flex flex-row">
									<pre>{"    "}</pre>
									<span className=" text-red-700">Version</span>
									<pre>: </pre>
									<span className=" text-green-600">
										"2012-10-17"
									</span>
								</div>
								<div className="flex flex-row">
									<pre>{"    "}</pre>
									<span className=" text-red-700">Statement</span>
									:
								</div>
								<div className="flex flex-row">
									<pre>{"     "}</pre>
									<span className=" text-red-700">- Effect</span>
									<pre>: </pre>
									<span className=" text-green-600">
										"Allow"
									</span>
								</div>
								<div className="flex flex-row">
									<pre>{"      "}</pre>
									<span className=" text-red-700">Action</span>
									<pre>:</pre>
								</div>
								<div className="flex flex-row">
									<pre>{"       "}</pre>
									<span className=" text-green-600">
										- "aws-portal:ViewBilling"
									</span>
								</div>
								<div className="flex flex-row">
									<pre>{"       "}</pre>
									<span className=" text-green-600">
										- "aws-portal:ViewUsage"
									</span>
								</div>
								<div className="flex flex-row">
									<pre>{"       "}</pre>
									<span className=" text-green-600">
										- "aws-portal:ViewAccount"
									</span>
								</div>
								<div className="flex flex-row">
									<pre>{"     "}</pre>
									<span className=" text-red-700">Resource</span>
									<pre>: </pre>
									<span className=" text-green-600">"*"</span>
								</div>
								<div className="flex flex-row">
									<pre>{" "}</pre>
									<span className=" text-red-700">
										BillingAccessRole
									</span>
									<pre>:</pre>
								</div>
								<div className="flex flex-row">
									<pre>{"   "}</pre>
									<span className=" text-red-700">Type</span>
									<pre>: </pre>
									<span className=" text-green-600">
										AWS::IAM::Role
									</span>
								</div>
								<div className="flex flex-row">
									<pre>{"   "}</pre>
									<span className=" text-red-700">Properties</span>
									<pre>:</pre>
								</div>
								<div className="flex flex-row">
									<pre>{"    "}</pre>
									<span className=" text-red-700">AssumeRolePolicyDocument</span>
									<pre>:</pre>
								</div>
								<div className="flex flex-row">
									<pre>{"     "}</pre>
									<span className=" text-red-700">Version</span>
									<pre>: </pre>
									<span className=" text-green-600">
										"2012-10-17"
									</span>
								</div>
								<div className="flex flex-row">
									<pre>{"     "}</pre>
									<span className=" text-red-700">Statement</span>
									<pre>:</pre>
								</div>
								<div className="flex flex-row">
									<pre>{"      "}</pre>
									<span className=" text-red-700">- Effect</span>
									<pre>: </pre>
									<span className=" text-green-600">
										"Allow"
									</span>
								</div>
								<div className="flex flex-row">
									<pre>{"       "}</pre>
									<span className=" text-red-700">Principal</span>
									<pre>:</pre>
								</div>
								<div className="flex flex-row">
									<pre>{"        "}</pre>
									<span className=" text-green-600">
										AWS : !Sub
										"arn:aws:iam::010175364045:root"
									</span>
								</div>
								<div className="flex flex-row">
									<pre>{"       "}</pre>
									<span className=" text-red-700">Action</span>
									<pre>:</pre>
								</div>
								<div className="flex flex-row">
									<pre>{"        "}</pre>
									<span className=" text-green-600">
										- "sts:AssumeRole"
									</span>
								</div>
								<div className="flex flex-row">
									<pre>{"     "}</pre>
									<span className=" text-red-700">
										ManagedPolicyArns
									</span>
									<pre>:</pre>
								</div>
								<div className="flex flex-row">
									<pre>{"      "}</pre>
									<span className=" text-green-600">
										- !Ref BillingAccessPolicy
									</span>
								</div>
								<div className="flex flex-row">
									<pre>{"     "}</pre>
									<span className=" text-red-700">RoleName</span>
									<pre>: </pre>
									<span className=" text-green-600">
										"BillingAccessRole"
									</span>
								</div>
							</div>
						</div>
					</div>
					<p className="text-3xl font-bold mobile:text-xl">
						Step 2: Save the Template
					</p>
					<div>
						Save the template to a file, e.g., billing-access-role.yaml.
					</div>
					<p className="text-3xl font-bold mobile:text-xl">
						Step 3: Deploy the Template Using AWS CloudFormation
					</p>
					<div className="space-y-6">
						<p>
							You can deploy this template directly through the AWS
							Management Console, or by using the AWS CLI:
						</p>
						<p>
							Using the AWS CLI Run the following command to create a
							CloudFormation stack based on your template:
						</p>
						<div className="rounded-lg border-4 border-gradient-br-mixcolor mobile:text-xs">
							<div className="shadow-3xl mb-4 border-b-4 p-2 border-gradient-tr-mixcolor">
								bash
							</div>
							<div className="m-2 font-semibold">
								<p>
									<span className="text-red-700">
										aws cloudformation create-stack{" "}
									</span>
									<span className="text-green-600">
										--stack-name BillingAccessRoleStack
										--template-body file:
									</span>
									{"//path/to/billing-access-role.yaml"}
									<span className="text-green-600">
										{" "}
										--capabilities CAPABILITY_IAM
									</span>
								</p>
							</div>
						</div>
					</div>
					<p className="text-3xl font-bold mobile:text-xl">
						{" "}
						Step 4: Verify the Creation of the Stack
					</p>
					<div className="space-y-6">
						<p>
							To check the status of your stack and ensure it was
							created successfully, use:
						</p>
						<div className="rounded-lg border-4 border-gradient-br-mixcolor mobile:text-xs">
							<div className="shadow-3xl mb-4 border-b-4 p-2 border-gradient-tr-mixcolor">
								bash
							</div>
							<div className="m-2 font-semibold">
								<p>
									<span className="text-red-700">
										aws cloudformation describe-stacks
									</span>
									<span className="text-green-600">
										--stack-name BillingAccessRoleStack
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				<Modal>
					<Modal.Open openName="ARN">
						<Button size="2xl"> Enter Your ARN </Button>
					</Modal.Open>
					<Modal.Window currentWindowname="ARN">
						<AddARN />
					</Modal.Window>
				</Modal>
			</div>
			<div className="relative h-52">
				<img
					src={semiCircle}
					draggable="false"
					className="absolute bottom-[-300px] right-44 w-[18%] -rotate-90 mobile:bottom-[-100px] mobile:right-6
					 mobile:w-[22%] tablet:right-20 tablet:w-[28%]"
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

export default CloudFormation;

