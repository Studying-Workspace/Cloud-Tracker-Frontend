import { getBlog } from "../../../Features/Blogs/useBlogs";
import { useParams } from "react-router-dom";
import NotFound from "../../../pages/NotFound";
import BlogContent from "./BlogContent";
import blogImg from "../../../assets/logo/logo_color2.png";

const BlogInfo = () => {

  const { id } = useParams<{ id: string }>();
  const blogId = parseInt(id || "0");

  const { data, isLoading } = getBlog({
    queryKey: ["blogs", `${id}`],
    id: blogId,
  });

  if (isLoading)
    return (
      <div className="h-{500px} flex items-center justify-center">
        <div className="mt-24 h-96 w-96 animate-spin rounded-full border-b-8 border-t-8 border-orange-200" />
        <img src={blogImg} alt="loading" className="h-46 absolute mt-24 w-56" />
      </div>
    );
  if (!data) return <NotFound />;
  // if(data instanceof Error) return <div>Blog not found</div>;

  return <BlogContent data={data} />;
};

export default BlogInfo;
