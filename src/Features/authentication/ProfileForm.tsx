import ProfileInputField from "../../ui/Profile/ProfileInputField";
import ProfileSelectMenu from "../../ui/Profile/ProfileSelectMenu";
import UploadPhoto from "../../ui/Profile/UploadPhoto";

const ProfileForm = () => {
  return (
    <div className="mt-[100px] flex min-h-screen items-start justify-center">
      <div className="relative bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 p-[2.5px] ">
        <div
          className="flex h-[450px] w-[1000px] content-between items-center justify-start gap-16 
        bg-white px-[100px] mobile:h-[550px] mobile:w-[330px] mobile:flex-col 
        mobile:justify-center mobile:gap-8 tablet:h-[650px] tablet:w-[400px] tablet:flex-col tablet:justify-center tablet:gap-10"
        >
          {/* Profile Image */}
          <UploadPhoto />

          {/*input fields*/}
          <div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-16 mobile:flex mobile:flex-col mobile:gap-6 tablet:flex tablet:flex-col tablet:gap-8">
            <ProfileInputField type="text" placeholder="Username" />

            <ProfileInputField type="password" placeholder="Password" />

            <ProfileInputField type="email" placeholder="Email" />

            <ProfileSelectMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
