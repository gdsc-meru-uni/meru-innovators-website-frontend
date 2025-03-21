import React from "react";
import Blog from "../blog/Blog";
import Subtitle from "../../Subtitle/Subtitle";
import ShowMoreButton from "../../ShowMore/ShowMore";

const LatestBlogs = () => {
  return (
    <div className="pt-[8rem] pb-[3rem] bg-green-200">
      <div className="container">
        <Subtitle title={"Our Latest Blogs"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Blog />
          <Blog />
          <Blog />
        </div>
      <ShowMoreButton/>
      </div>
    </div>
  );
};

export default LatestBlogs;
