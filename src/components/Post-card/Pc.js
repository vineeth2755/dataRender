import React from 'react';
import './Pc.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.selftext_html }} />
      <p><a href={post.url} target="_blank" rel="noopener noreferrer">Read more</a></p>
      <p>Score: {post.score}</p>
    </div>
  );
};

export default PostCard;