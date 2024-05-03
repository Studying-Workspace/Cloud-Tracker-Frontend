import Wave from "../../../assets/introWave.png";
import semiCircle from "../../../assets/circleLeft.png";
import holloCircle from "../../../assets/hollowCircle.png";
import Modal from "../../Modal";
import Button from "../../Button";
import { BsArrowLeftCircle } from "react-icons/bs";
const AWSCLI = () => {
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
				<div className=" w-[850px] space-y-24 pr-[20px] mobile:w-[300px] mobile:text-lg tablet:w-[550px] text-xl">
					<button data-testid="arrowLeftTest" onClick={() => history.back()} className="z-2 text-4xl text-linearBlue-1"><BsArrowLeftCircle /></button>
					<p className="text-3xl mobile:text-xl">
						This assumes you have already configured your AWS CLI with
						appropriate configurations, for more details refer to {` `}
						<a
							href="https://docs.aws.amazon.com/cli/v1/userguide/cli-authentication-user.html"
							className=" font-medium text-blue-800 underline"
						>
							AWS Documentation
						</a>
					</p>
					<p className="text-3xl font-bold mobile:text-xl">
						Step 1: Create a Policy for Billing Access:
					</p>
					<div className="space-y-6">
						<p>
							First , you'll need to create a JSON file for the billing
							access policy. Here's an example policy that allows
							viewing billing information. Save this as
							BillingAccessPolicy.json..
						</p>
						<div className="rounded-lg border-4 border-gradient-br-mixcolor mobile:text-xs">
							<div className="mb-4 border-b-4 p-2 shadow-3xl border-gradient-tr-mixcolor">
								json
							</div>
							<div className="m-2 font-semibold">
								<pre>{`{`} </pre>
								<pre>{`  {`} </pre>
								<pre>
									{"    "}
									<span className="text-red-700">"Version"</span>
									<span className="text-green-600">
										: "2012-10-17",
									</span>{" "}
								</pre>
								<pre>
									{"    "}
									<span className="text-red-700">"Statement"</span>
									{":[ "}
								</pre>
								<pre>{"      { "}</pre>
								<pre>
									{"        "}
									<span className="text-red-700">"Effect"</span>
									{`: `}
									<span className="text-green-600">"Allow"</span>
									{", "}
								</pre>
								<pre>
									{"        "}
									<span className="text-red-700">"Action"</span>
									{":[	"}
								</pre>

								<pre>
									{"          "}
									<span className="text-green-600">
										"aws-portal:ViewBilling"
									</span>
									{", "}
								</pre>
								<pre>
									{"          "}
									<span className="text-green-600">
										"aws-portal:ViewUsage"
									</span>
									{", "}
								</pre>
								<pre>
									{"          "}
									<span className="text-green-600">
										"aws-portal:ViewAccount"
									</span>{" "}
								</pre>
								<pre>{"        ],"}</pre>
								<pre>
									{"        "}
									<span className="text-red-700">
										"Resource"
									</span>:{" "}
									<span className="text-green-600">"*"</span>{" "}
								</pre>
								<pre>{"      } "}</pre>
								<pre>{"    ] "}</pre>
								<pre>{`  }`} </pre>
								<pre>{`}`}</pre>
							</div>
						</div>
					</div>
					<p className="text-3xl font-bold mobile:text-xl">
						Step 2: Create the Policy via CLI
					</p>
					<div className=" space-y-6">
						<p>Run this command to create the policy:</p>
						<div className="rounded-lg border-4 border-gradient-br-mixcolor mobile:text-xs">
							<div className="mb-4 border-b-4 p-2 shadow-3xl border-gradient-tr-mixcolor">
								bash
							</div>
							<div className="m-2 p-2 font-semibold">
								<span className="text-red-700">
									aws iam create-policy{" "}
								</span>
								<span className="text-green-600">
									--policy-name BillingAccessPolicy --policy-document
									file:
								</span>
								//BillingAccessPolicy.json
							</div>
						</div>
						<p>
							Note the Policy ARN that is returned after executing this
							command, as you will need it for attaching the policy to
							the role.
						</p>
					</div>
					<p className="text-3xl font-bold mobile:text-xl">
						Step 3: Create the Trust Relationship Policy:
					</p>
					<div className=" space-y-6">
						<p>
							Next, create a trust relationship policy file named
							TrustPolicy.json. This allows your account to assume the
							role. Here’s an example: :
						</p>
						<div className="rounded-lg border-4 border-gradient-br-mixcolor mobile:text-xs">
							<div className="mb-4 border-b-4 p-2 shadow-3xl border-gradient-tr-mixcolor">
								json
							</div>
							<div className="m-2 font-semibold">
								<pre>{`{`} </pre>
								<pre>{`  {`} </pre>
								<pre>
									{"    "}
									<span className="text-red-700">"Version"</span>
									<span className="text-green-600">
										: "2012-10-17",
									</span>{" "}
								</pre>
								<pre>
									{"    "}
									<span className="text-red-700">"Statement"</span>
									{":[ "}
								</pre>
								<pre>{"      { "}</pre>
								<pre>
									{"        "}
									<span className="text-red-700">"Effect"</span>
									{`: `}
									<span className="text-green-600">"Allow"</span>
									{", "}
								</pre>
								<pre>
									{"        "}
									<span className="text-red-700">"Principal"</span>
									{`: { `}
								</pre>
								<p className="pl-24 text-green-600 mobile:pl-[50px]">
									"AWS": "arn:aws:iam::010175364045:root",
								</p>

								<pre>{"        },"}</pre>
								<pre>
									{"        "}
									<span className="text-red-700">"Action"</span>
									{": "}
									<span className="text-green-600">
										"sts:AssumeRole"
									</span>
								</pre>
								<pre>
									{"        "}
									<span className="text-red-700">
										"Resource"
									</span>:{" "}
									<span className="text-green-600">"*"</span>{" "}
								</pre>
								<pre>{"      } "}</pre>
								<pre>{"    ] "}</pre>
								<pre>{`  }`} </pre>
								<pre>{`}`}</pre>
							</div>
						</div>
					</div>
					<p className="text-3xl font-bold mobile:text-xl">
						Step 4: Create the IAM Role:
					</p>
					<div className=" space-y-6">
						<p>Create the IAM role using the trust policy:</p>
						<div className="rounded-lg border-4 border-gradient-br-mixcolor mobile:text-xs">
							<div className="mb-4 border-b-4 p-2 shadow-3xl border-gradient-tr-mixcolor">
								bash
							</div>
							<div className="m-2 p-2 font-semibold">
								<span className="text-red-700">
									aws iam create-role{" "}
								</span>
								<span className="text-green-600">
									--role-name BillingAccessRole
									--assume-role-policy-document file:
								</span>
								//TrustPolicy.json
							</div>
						</div>
					</div>
					<p className="text-3xl font-bold mobile:text-xl">
						Step 5: Attach the Policy to the Role:
					</p>
					<div className=" space-y-6">
						<p>
							Use the ARN from Step 2 to attach the BillingAccessPolicy
							to the role:
						</p>
						<div className="rounded-lg border-4 border-gradient-br-mixcolor mobile:text-xs">
							<div className="mb-4 border-b-4 p-2 shadow-3xl border-gradient-tr-mixcolor">
								bash
							</div>
							<div className="m-2 p-2 font-semibold">
								<span className="text-red-700">
									aws iam attach-role-policy{" "}
								</span>
								<span className="break-words text-green-600">
									--role-name BillingAccessRole --policy-arn
									"arn:aws:iam::010175364045:policy/BillingAccessPolicy"
								</span>
							</div>
						</div>
					</div>
					<p className="text-3xl font-bold mobile:text-xl">
						Step 6: Verify the Role and Policy Attachment:
					</p>
					<div className=" space-y-6">
						<p>
							To ensure everything is set up correctly, you can list
							the policies attached to the role:
						</p>
						<div className="rounded-lg border-4 border-gradient-br-mixcolor mobile:text-xs">
							<div className="mb-4 border-b-4 p-2 shadow-3xl border-gradient-tr-mixcolor">
								bash
							</div>
							<div className="m-2 p-2 font-semibold">
								<span className="text-red-700">
									aws iam list-attached-role-policies{" "}
								</span>
								<span className="text-green-600">
									--role-name BillingAccessRole
								</span>
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

export default AWSCLI;
