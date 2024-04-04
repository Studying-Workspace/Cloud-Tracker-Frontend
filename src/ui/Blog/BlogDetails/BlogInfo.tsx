import { IoPersonCircleOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { LuUpload } from "react-icons/lu";
import { useState, useEffect } from "react";
import Heading from "../../Heading";

const BlogInfo = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    // Fetch the HTML file
    // doesnt work.
    fetch(".//BlogDetailsPage.HTML")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch HTML file");
        }
        return response.text();
      })
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error("Error fetching HTML:", error));
  }, []);

  return (
    <div
      className="mt-24 flex-col space-y-10 px-72 font-poppins tablet:mt-20 tablet:px-20
     mobile:mt-14 mobile:space-y-5 mobile:px-10"
    >
      {/* title */}
      <div
        className="text-[55px] font-bold tablet:text-[35px] mobile:text-[22px]"
        data-testid="title"
      >
        Exploring the Future of Digital Innovation
      </div>
      <div className="flex items-center justify-between text-3xl tablet:text-2xl mobile:text-xs">
        {/* publisher */}
        <div className=" flex items-center gap-1">
          <IoPersonCircleOutline
            className="text-6xl text-gray-600 tablet:text-5xl mobile:text-4xl"
            data-testid="publisherImage"
          />
          <p className="text-gray-600" data-testid="publisherName">
            Publisher
          </p>
        </div>
        {/* date */}
        <div className="flex text-gray-400" data-testid="date">
          April 19,2024
        </div>
      </div>
      <div
        className="flex h-20 items-center justify-between border-y-2 border-gray-300
       text-3xl tablet:text-2xl mobile:h-10 mobile:text-sm"
      >
        <p className="text-gray-400" data-testid="readInfo">
          6 min read
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2 mobile:gap-1">
            <p className="text-gray-400" data-testid="likecounter">
              100
            </p>
            <BiLike
              className="text-4xl text-gray-600 tablet:text-2xl mobile:text-xl"
              data-testid="likeIcon"
            />
          </div>
          <div>
            <LuUpload
              className="text-4xl text-gray-600 tablet:text-2xl mobile:text-xl"
              data-testid="shareIcon"
            />
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      {/* end */}
      <div className="h-80 w-80"></div>
    </div>
  );
};

export default BlogInfo;
