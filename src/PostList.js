import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div className="row">
      {posts.map(post => (
        <div key={post.id} className="col-md-4 mb-4">
          <div className="card text-dark bg-light">
            <div className="card-header">User ID: {post.userId}</div>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;

