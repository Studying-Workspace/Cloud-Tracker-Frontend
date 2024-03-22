import BlogElement from "./BlogElement";
import { useState } from "react";
import BlogNavigator from "./BlogNavigator";

const BlogsCotainer = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div className="h-full divide-y-2 py-12 px-24 mobile:px-4 tablet:px-8">
      <BlogNavigator value={value} setValue={setValue} />
      <div className="h-full divide-y-2 overflow-auto">
        <BlogElement />
        <BlogElement />
        <BlogElement />
        <BlogElement />
        <BlogElement />
        <BlogElement />
        <BlogElement />
        <BlogElement />
        <BlogElement />
      </div>
    </div>
  );
};

export default BlogsCotainer;
