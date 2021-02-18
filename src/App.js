import React, { useState } from 'react';
import Post from './Post';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'wyjeon',
      caption: 'Hello',
      imageUrl:
        'https://www.flaticon.com/svg/vstatic/svg/4163/4163855.svg?token=exp=1613645887~hmac=11cc53e7047427f4dca97fc8074e2ca0',
    },
    {
      username: 'kim',
      caption: 'hi!',
      imageUrl:
        'https://www.flaticon.com/svg/vstatic/svg/4163/4163774.svg?token=exp=1613645929~hmac=cd713a27b2d35b6dba2fe3f7a9bc98a1',
    },
  ]);

  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
      </div>

      {/* Posts */}
      {posts.map(post => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
