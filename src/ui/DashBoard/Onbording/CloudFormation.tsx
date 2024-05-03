import Wave from "../../../assets/introWave.png";
import semiCircle from "../../../assets/circleLeft.png";
import holloCircle from "../../../assets/hollowCircle.png";
import Modal from "../../Modal";
import Button from "../../Button";
import { BsArrowLeftCircle } from "react-icons/bs";
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

			<div className="z-10 flex flex-col items-center space-y-20 pt-64 mobile:pt-44">
				<div className=" w-[850px] space-y-24 pr-[20px] text-xl mobile:w-[300px] mobile:text-lg tablet:w-[550px]">
					<button onClick={() => history.back()} className="z-2 text-4xl text-linearBlue-1"><BsArrowLeftCircle /></button>
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
							<div className="mb-4 border-b-4 p-2 shadow-3xl border-gradient-tr-mixcolor">
								yaml
							</div>
							<div className="m-2 font-semibold">
								{/* <pre>{`AWSTemplateFormatVersion: '2010-09-09'`}</pre> */}
								{/* <pre>{`Description: Create IAM Role with Billing Access`}</pre> */}
								<pre>{``}</pre>
								<pre>{`Resources:`}</pre>
								<pre>{``}</pre>
								<pre>{`  BillingAccessPolicy:`}</pre>
								<pre>{`    Type: AWS::IAM::ManagedPolicy`}</pre>
								<pre>{`    Properties:`}</pre>
								{/* <pre>{`      Description: "Policy that grants access to AWS Billing"`}</pre> */}
								<pre>{`      PolicyDocument:`}</pre>
								<pre>{`        Version: "2012-10-17"`}</pre>
								<pre>{`        Statement:`}</pre>
								<pre>{`          - Effect: "Allow"`}</pre>
								<pre>{`            Action:`}</pre>
								{/* <pre>{`              - "aws-portal:ViewBilling"`}</pre>
								<pre>{`              - "aws-portal:ViewUsage"`}</pre>
								<pre>{`              - "aws-portal:ViewAccount"`}</pre> */}
								<pre>{`            Resource: "*"`}</pre>
								<pre>{``}</pre>
								<pre>{`  BillingAccessRole:`}</pre>
								<pre>{`    Type: AWS::IAM::Role`}</pre>
								<pre>{`    Properties:`}</pre>
								<pre>{`      AssumeRolePolicyDocument:`}</pre>
								<pre>{`        Version: "2012-10-17"`}</pre>
								<pre>{`        Statement:`}</pre>
								<pre>{`          - Effect: "Allow"`}</pre>
								<pre>{`            Principal:`}</pre>
								{/* <pre>{`              AWS: !Sub "arn:aws:iam::010
175364045:root"`}</pre> */}
								<pre>{`            Action:`}</pre>
								<pre>{`              - "sts:AssumeRole"`}</pre>
								<pre>{`      ManagedPolicyArns:`}</pre>
								<pre>{`        - !Ref BillingAccessPolicy`}</pre>
								<pre>{`      RoleName: "BillingAccessRole"`}</pre>
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
							<div className="mb-4 border-b-4 p-2 shadow-3xl border-gradient-tr-mixcolor">
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
							<div className="mb-4 border-b-4 p-2 shadow-3xl border-gradient-tr-mixcolor">
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
						<div className="flex flex-col items-center space-y-4">
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
						</div>
					</Modal.Window>
				</Modal>
			</div>
			<div className="relative h-52">
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

export default CloudFormation;
