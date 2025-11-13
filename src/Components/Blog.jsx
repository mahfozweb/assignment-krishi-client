import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className=' className="card bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"'>
      <figure className="h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="text-xl font-semibold text-green-800 mb-2">
          {blog.title}
        </h2>
        <p className="text-sm text-gray-500 mb-2">📅 {blog.date}</p>
        <p className="text-gray-700">{blog.description}</p>

        <button className="btn btn-sm btn-outline mt-3">Read More</button>
      </div>
    </div>
  );
};

export default Blog;
