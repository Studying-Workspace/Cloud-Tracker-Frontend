import { getBlog } from "./useBlogs";
import { useNavigate, useParams } from "react-router-dom";
import BlogContent from "../../ui/Blog/BlogDetails/BlogContent";
import Spinner from "../../ui/Spinner";

const BlogInfo = () => {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const blogId = parseInt(id || "0");

	const { data, isLoading } = getBlog({
		queryKey: ["blogs", `${id}`],
		id: blogId,
	});

	if (isLoading)
		return (
			<div className="h-{500px} flex items-center justify-center">
				<Spinner />
			</div>
		);
	if (!data) navigate("/not-found");

	return <BlogContent data={data} />;
};

export default BlogInfo;
