import BlogElement from "./BlogElement";
import { useState } from "react";
import BlogNavigator from "./BlogNavigator";
import { useBlogs } from "../../Features/Blogs/useBlogs";
import blogImg from "../../assets/logo/logo_color2.png";

interface IBlog {
  id: number;
  title: string;
  htmlContent: string;
}

const BlogsCotainer = () => {
  const [value, setValue] = useState<number>(0);

  const { data, isLoading } = useBlogs({
    queryKey: ["blogs"],
  });

  return (
    <div className="h-full divide-y-2 px-24 py-12 mobile:px-4 tablet:px-8">
      <BlogNavigator value={value} setValue={setValue} />
      <div className="h-full divide-y-2 overflow-auto">
        {isLoading ? (
          <div className="h-{500px} flex items-center justify-center">
            <div className="mt-24 h-96 w-96 animate-spin rounded-full border-b-8 border-t-8 border-orange-200" />
            <img
              src={blogImg}
              alt="loading"
              className="absolute mt-24 h-56 w-60"
            />
          </div>
        ) : (
          data?.map((blog: IBlog) => {
            console.log(blog);
            return (
              <BlogElement
                key={blog.id}
                id={blog.id}
                title={blog.title}
                content={blog.htmlContent}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default BlogsCotainer;
