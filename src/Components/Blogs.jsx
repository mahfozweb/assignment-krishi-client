import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);

  useEffect(() => {
    fetch("https://assignment-krishi-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  });
  return (
    <div>
      <div className="bg-gradient-to-r from-lime-50 via-green-50 to-emerald-100 py-10 px-5">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-700">
          🌾 Latest Agro News and Blogs
        </h1>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-600">Loading new........</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Blog blog={blog}></Blog>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
