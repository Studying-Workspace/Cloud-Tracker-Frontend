import { Form, Formik } from "formik";
import InputField from "../../ui/Form/InputField";
import { MdLockOutline } from "react-icons/md";
import { handleToastMessage } from "../../utils/helper";
import Button from "../../ui/Button";
import { useState } from "react";
import * as Yup from "yup";
import HandleMessageForm from "../../ui/Form/HandleMessageForm";

interface MyFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const EditPasswordform = () => {
  const initialValues: MyFormValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .min(8, "Your Password Must Be At Least 8 Characters")
      .required("Please Enter Your Current Password"),

    newPassword: Yup.string()
      .min(8, "Your Password Must Be At Least 8 Characters")
      .required("Please Enter Your New Password"),

    confirmPassword: Yup.string()
      .min(8, "Your Password Must Be At Least 8 Characters")
      .required("Please Confirm Your New Password")
      .oneOf([Yup.ref("newPassword")], "Passwords Must Match"),
  });

  const [showCurrentPassword, setShowCurrentPassword] =
    useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        handleToastMessage("Password Updated !", "success");
      }}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form className="space-y-10">
          <div className="text-center text-2xl font-semibold">
            Edit Password
          </div>
          <div className="flex w-full items-center justify-between">
            <InputField
              showPassword={showCurrentPassword}
              setShowPassword={setShowCurrentPassword}
              type="password"
              placeholder="Current Password"
              name="currentPassword"
              error={
                touched.currentPassword ? errors.currentPassword : undefined
              }
            >
              <MdLockOutline className="text-3xl text-linearBlue-1" />
            </InputField>{" "}
            <HandleMessageForm
              type="warning"
              error={errors.currentPassword}
              touched={touched.currentPassword}
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <InputField
              showPassword={showNewPassword}
              setShowPassword={setShowNewPassword}
              type="password"
              placeholder="New Password"
              name="newPassword"
              error={touched.newPassword ? errors.newPassword : undefined}
            >
              <MdLockOutline className="text-3xl text-linearBlue-1" />
            </InputField>{" "}
            <HandleMessageForm
              type="warning"
              error={errors.newPassword}
              touched={touched.newPassword}
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <InputField
              showPassword={showNewPassword}
              setShowPassword={setShowNewPassword}
              type="password"
              placeholder="Confirm New Password"
              name="confirmPassword"
              error={
                touched.confirmPassword ? errors.confirmPassword : undefined
              }
            >
              <MdLockOutline className="text-3xl text-linearBlue-1" />
            </InputField>
            <HandleMessageForm
              type="warning"
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
          </div>
          <Button role="submit" size="full">
            Change Password
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditPasswordform;
