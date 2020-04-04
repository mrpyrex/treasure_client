import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Post = ({ post }) => {
  return (
    <div className="card">
      <Link to={`/blog/${post.id}`}>
        <img src={post.thumb} className="card-img-top" alt={post.title} />
      </Link>
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-text">
          {post.content.length > 121
            ? post.content.substring(0, 120) + "..."
            : post.content}
        </p>
      </div>
      <div className="card-footer">
        <p>
          By &mdash; {post.author.firstName} {post.author.lastName}{" "}
          <Moment format="DD-MM-YYYY">{post.createdAt}</Moment> -{" "}
          {post.category.catTitle}
        </p>
      </div>
    </div>
  );
};

export default Post;
