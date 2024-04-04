import ProfileInputField from "../../ui/Profile/ProfileInputField"
import UploadPhoto from "../../ui/Profile/UploadPhoto"
import { IoIosArrowDown } from "react-icons/io";


const ProfileForm = () => {
  return (
    <div className="mt-[100px] flex min-h-screen items-start justify-center">
      <div className="relative bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 p-[4px] ">
        <div
          className="flex h-[450px] w-[1000px] content-between items-center justify-start gap-16 
        bg-white px-[100px] mobile:h-[550px] mobile:w-[330px] mobile:flex-col 
        mobile:justify-center mobile:gap-8 tablet:h-[650px] tablet:w-[400px] tablet:flex-col tablet:justify-center tablet:gap-10"
        >
          {/* Profile Image */}
          <UploadPhoto />

          {/*input fields*/}
          <div className=" grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-16 mobile:flex mobile:flex-col mobile:gap-6 tablet:flex tablet:flex-col tablet:gap-8">
            <ProfileInputField type="text" placeholder="Username" />

            <ProfileInputField type="password" placeholder="Password" />

            <ProfileInputField type="email" placeholder="Email" />

            <div className=" w-fit bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1px]">
              <div className="flex h-[35px] w-[250px] justify-between bg-white ">
                <input
                  type="text"
                  className="w-full px-2 text-lg text-gray-600 focus:outline-none disabled:bg-transparent"
                  placeholder="Country"
                  disabled={true}
                />
                <span className="text-3xl text-gray-500">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileForm