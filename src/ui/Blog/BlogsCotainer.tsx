import BlogElement from "./BlogElement";
import { useState } from "react";
import BlogNavigator from "./BlogNavigator";

const BlogsCotainer = () => {
  const [value, setValue] = useState<number>(0);

  

  return (
    <div className="h-full divide-y-2 divide-linearOrange-100 py-12">
      <BlogNavigator value={value} setValue={setValue}/>
      <div className="h-full divide-y-2 overflow-auto px-24">
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
