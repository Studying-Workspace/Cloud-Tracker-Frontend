import Button from "../../ui/Button";
import ProfileInputField from "../../ui/Profile/ProfileInputField";
import ProfileSelectMenu from "../../ui/Profile/ProfileSelectMenu";
import UploadPhoto from "../../ui/Profile/UploadPhoto";
import { Form, Formik } from "formik";
import { profileFormValidationSchema } from "../../utils/validationSchema";
import { useUser } from "./useUser";
import { convertImageToBase64, handleToastMessage } from "../../utils/helper";
import useEditProfile from "./useEditProfile";
import { useUserContext } from "../../context/UserProvider";
import { useLogout } from "./useLogout";
import { BeatLoader } from "react-spinners";

interface MyFormValues {
	email: string;
	name: string;
	password: string;
	image: any;
}

const ProfileForm = () => {
	const { user , isAuth } = useUser();

	const initialValues: MyFormValues = {
		email: user?.email,
		name: user?.name,
		password: "",
		image: user?.image,
	};

	const { tokens } = useUserContext();
	const { editProfile, isLoading } = useEditProfile();
	const { logout } = useLogout(
		"/signin",
		"Session Expired, Please Login Again.",
	);

	const handleSubmit = (values: MyFormValues) => {
		if (values === initialValues) {
			handleToastMessage("There Is No Changes In Profile Data", "warning");
			return;
		}
		if (typeof values.image === "string") {
			editProfile(
				{ user: values, token: tokens?.token },
				{
					onSuccess: () => {
						logout();
					},
				},
			);
		} else {
			convertImageToBase64(values.image, (base64: string) => {
				const handleUser = { ...values, image: base64 };
				editProfile(
					{ user: handleUser, token: tokens?.token },
					{
						onSuccess: () => {
							logout();
						},
					},
				);
			});
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => {
				handleSubmit(values);
			}}
			validationSchema={profileFormValidationSchema}
		>
			{({ errors, touched, setFieldValue }) => (
				<Form className="flex min-h-screen w-fit flex-col gap-8 pb-[300px]">
					<div className="relative mt-[100px] flex  items-start justify-center ">
						<div className="relative bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 p-[4px] ">
							<div className="flex h-[450px] w-[1000px] content-between items-center justify-start gap-16 bg-white px-[100px] mobile:h-[550px] mobile:w-[330px] mobile:flex-col mobile:justify-center mobile:gap-8 tablet:h-[650px] tablet:w-[400px] tablet:flex-col tablet:justify-center tablet:gap-10">
								{/* Profile Image */}
								<UploadPhoto
									name="image"
									setFile={setFieldValue}
									img={isAuth ? user.image : ""}
								/>


								{/* Input fields */}
								<div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-16 mobile:flex mobile:flex-col mobile:gap-6 tablet:flex tablet:flex-col tablet:gap-8">
									<div className="flex w-full items-center justify-between">
										<ProfileInputField
											type="text"
											placeholder="Username"
											name="name"
											error={
												touched.name ? errors.name : undefined
											}
											touched={touched.name}
										/>
									</div>
									<ProfileInputField
										type="password"
										placeholder="Password"
										name="password"
									/>
									<ProfileInputField
										type="email"
										placeholder="Email"
										name="email"
										error={touched.email ? errors.email : undefined}
										touched={touched.email}
									/>
									<ProfileSelectMenu />
								</div>
							</div>
						</div>
					</div>
					<div className="flex gap-2 self-end">
						<Button
							role="submit"
							type="primary"
							size="l"
							disabled={isLoading}
						>
							{isLoading ? (
								<BeatLoader color="#fff" size={8} />
							) : (
								"Save"
							)}
						</Button>
						<div className="w-fit rounded-full bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 p-[3px] mobile:self-center tablet:self-center">
							<Button role="button" type="secondary" size="l">
								Reset
							</Button>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default ProfileForm;
