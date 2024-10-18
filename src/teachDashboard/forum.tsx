import { useState } from 'react';
import Link from 'next/link';

export default function CommunityForum() {
  const [posts, setPosts] = useState<string[]>([]);  // Explicitly set type to string array
  const [newPost, setNewPost] = useState<string>('');  // The newPost is a string

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost) {
      setPosts([...posts, newPost]);  // Add the new post to the array
      setNewPost('');  // Clear the input after submission
    }
  };

  return (
    <div>
      <h2>Community Forum</h2>
      
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}  // Update the new post text
          placeholder="Share your ideas or lessons here..."
        />
        <button type="submit">Post</button>
      </form>
      <div>
        {posts.map((post, index) => (
          <div key={index} className="post">
            <p>{post}</p>
          </div>
        ))}
      </div>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
