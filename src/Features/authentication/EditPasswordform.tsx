import { Form, Formik } from "formik";
import InputField from "../../ui/Form/InputField";
import { MdLockOutline } from "react-icons/md";
import { handleToastMessage } from "../../utils/helper";
import Button from "../../ui/Button";
import { useState } from "react";

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

  const [showCurrentPassword, setShowCurrentPassword] =
    useState<boolean>(false);

  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        handleToastMessage("Password Updated !", "success");
      }}
    >
      <Form className="flex flex-col items-center justify-center gap-10">
        <div className="text-xl font-semibold">Edit Password</div>
        <InputField
          showPassword={showCurrentPassword}
          setShowPassword={setShowCurrentPassword}
          type="password"
          placeholder="Current Password"
          name="currentPassword"
        >
          <MdLockOutline className="text-3xl text-linearBlue-1" />
        </InputField>{" "}
        <InputField
          showPassword={showNewPassword}
          setShowPassword={setShowNewPassword}
          type="password"
          placeholder="New Password"
          name="newPassword"
        >
          <MdLockOutline className="text-3xl text-linearBlue-1" />
        </InputField>{" "}
        <InputField
          showPassword={showNewPassword}
          setShowPassword={setShowNewPassword}
          type="password"
          placeholder="Confirm New Password"
          name="confirmNewPassword"
        >
          <MdLockOutline className="text-3xl text-linearBlue-1" />
        </InputField>
        <Button role="submit" size="full">
          Change Password
        </Button>
      </Form>
    </Formik>
  );
};

export default EditPasswordform;
