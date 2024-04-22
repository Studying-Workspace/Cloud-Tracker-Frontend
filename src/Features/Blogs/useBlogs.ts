import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../../services/Blogs";
import { getBlogByID } from "../../services/Blogs";

interface IBlogsQuery {
  queryKey: string[];
}

interface IBlogQuery {
  queryKey: string[];
  id: number;
}

export const useBlogs = ({ queryKey }: IBlogsQuery) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await getAllBlogs();
      return response;
    },
  });
};

export const getBlog = ({ queryKey, id }: IBlogQuery) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await getBlogByID(id);
      return response;
    },
  });
};
