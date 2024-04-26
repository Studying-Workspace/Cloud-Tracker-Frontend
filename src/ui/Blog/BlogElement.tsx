import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import blogImg from "../../assets/blogImg.png";
import { BiLike } from "react-icons/bi";
import { LuUpload } from "react-icons/lu";

interface Props {
  id: number;
  title: string;
  content: string;
}

const BlogElement = ({ id, title, content }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/${id}`);
  };


	const handleMakeLike = (e: any) => {
		// stop onClick event from perant div
		if (e && e.stopPropagation) e.stopPropagation();
		console.log("like");
	};

	return (
		<div
			className="flex cursor-pointer flex-col gap-6 px-4 py-6 transition-all duration-500 hover:bg-gray-100"
			onClick={() => handleClick()}
		>
			{/* head */}
			<div className="flex items-center justify-between">
				{/* publisher */}
				<div className="flex items-center gap-1">
					<IoPersonCircleOutline className="text-4xl text-gray-600 mobile:text-3xl" />
					<p className="text-sm text-gray-600 mobile:text-xs">
						Publisher
					</p>
				</div>
				{/* date */}
				<div className="text-sm text-gray-500 mobile:text-xs">
					April 19,2024
				</div>
			</div>

      {/* body */}
      <div className="flex items-center justify-between">
        {/* container */}
        <div className="flex w-[60%] flex-col gap-6 mobile:w-[65%]">
          <p className="text-2xl font-bold mobile:text-xs tablet:text-lg">
            {title}
          </p>

          <div
            className="h-20 text-lg leading-7 mobile:hidden tablet:hidden overflow-hidden"
            dangerouslySetInnerHTML={{ __html: content || "notfound" }}
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 mobile:gap-3">
              <div
                className="w-fit rounded-full border-2 border-linearOrange-200 px-6 py-1 
              text-center font-semibold mobile:px-2 mobile:text-xs"
              >
                Cloud
              </div>
              <div className="text-sm text-gray-500 mobile:text-xs">
                6 min read
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-2 mobile:gap-1">
                <p className="text-sm text-gray-500 mobile:text-xs">100</p>
                <BiLike
                  className="text-2xl text-gray-600 hover:text-blue-600 mobile:text-xl"
                  onClick={(e) => handleMakeLike(e)}
                />
              </div>
              <div>
                <LuUpload
                  className="z-50 text-xl text-gray-600 hover:text-blue-600 mobile:text-lg"
                  onClick={() => {
                    console.log("upload");
                    navigate("/");
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* image */}
        <img
          src={blogImg}
          alt="img"
          draggable="false"
          className=" h-32 w-32 self-start mobile:h-16 mobile:w-16 
          mobile:self-start tablet:h-24 tablet:w-24"
        />
      </div>
    </div>
  );
};

export default BlogElement;
