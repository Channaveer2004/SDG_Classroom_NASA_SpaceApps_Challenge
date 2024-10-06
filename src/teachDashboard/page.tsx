'use client';
import { useState, useEffect, useRef } from 'react';
import './globals.css';

export default function TeacherDashboard() {
  const [showForum, setShowForum] = useState(false);
  const [showLessonSharing, setShowLessonSharing] = useState(false);
  const [showWebinarSignup, setShowWebinarSignup] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // State for confirmation modal
  const [posts, setPosts] = useState<string[]>([]);
  const [newPost, setNewPost] = useState<string>('');

  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [uploadedVideos, setUploadedVideos] = useState<string[]>([]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  // Load posts from localStorage when the component mounts
  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    const storedVideos = localStorage.getItem('videos');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
    if (storedVideos) {
      setUploadedVideos(JSON.parse(storedVideos));
    }
  }, []);

  // Handle the submission of a new post in the forum
  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      const updatedPosts = [...posts, newPost.trim()];
      setPosts(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      setNewPost('');
    }
  };

  // Toggle functions to switch views
  const handleForumClick = () => setShowForum(true);
  const handleLessonClick = () => setShowLessonSharing(true);
  const handleWebinarClick = () => setShowWebinarSignup(true);

  // Start video recording
  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current!.srcObject = stream;
      videoRef.current!.play();

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        const videoURL = URL.createObjectURL(blob);
        setVideoURL(videoURL);

        // Save video to localStorage (convert blob to base64 string for saving)
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Video = reader.result as string;
          const updatedVideos = [...uploadedVideos, base64Video];
          setUploadedVideos(updatedVideos);
          localStorage.setItem('videos', JSON.stringify(updatedVideos));
        };
        reader.readAsDataURL(blob);
      };

      mediaRecorder.start();
      setRecording(true);
    }
  };

  // Stop video recording
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      videoRef.current!.srcObject = null;
      setRecording(false);
    }
  };

  // Handle signup for webinars
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmationModal(true); // Show confirmation modal
    // Optionally reset form fields
    setName('');
    setAge('');
    setGender('');
    setEmail('');
    setPhoneNumber('');
  };

  // Function to go back to the home screen
  const goBackHome = () => {
    setShowConfirmationModal(false); // Hide confirmation modal
    setShowWebinarSignup(false); // Hide signup form
  };

  return (
    <div className="home-container">
      {!showForum && !showLessonSharing && !showWebinarSignup ? (
        <>
          <h1 className="home-title">Educator Platform</h1>
          <div className="home-cardContainer">
            <div className="home-card" onClick={handleForumClick}>
              <h2>Community Forum</h2>
              <p>Share ideas and collaborate with fellow educators.</p>
            </div>
            <div className="home-card" onClick={handleLessonClick}>
              <h2>Lesson Sharing</h2>
              <p>Upload and share your lesson plans with others.</p>
            </div>
            <div className="home-card" onClick={handleWebinarClick}>
              <h2>Webinars & Events</h2>
              <p>Sign up for upcoming webinars and events.</p>
            </div>
          </div>
        </>
      ) : showForum ? (
        <div>
          <h1>Community Forum</h1>
          <form onSubmit={handlePostSubmit}>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="      Share your ideas..."
              required
            />
            <button type="submit">Post</button>
          </form>
          <div>
            <h3>Ideas Shared</h3>
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <div key={index} className="post">
                  <p>{post}</p>
                </div>
              ))
            ) : (
              <p>No posts yet. Be the first to share your ideas!</p>
            )}
          </div>
          <button onClick={() => setShowForum(false)}>Back to Home</button>
        </div>
      ) : showLessonSharing ? (
        <div>
          <h2>Lesson Sharing</h2>
          <div>
            <video ref={videoRef} width="320" height="240" controls></video>
            {recording ? (
              <button onClick={stopRecording}>Stop Recording</button>
            ) : (
              <button onClick={startRecording}>Start Recording</button>
            )}
          </div>
          <div>
            <h3>Uploaded Videos</h3>
            {uploadedVideos.length > 0 ? (
              uploadedVideos.map((video, index) => (
                <video key={index} src={video} width="320" height="240" controls />
              ))
            ) : (
              <p>No videos uploaded yet.</p>
            )}
          </div>
          <button onClick={() => setShowLessonSharing(false)}>Back to Home</button>
        </div>
      ) : (
        <div>
          <h1>Webinar Signup</h1>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value=""><h1>Select Gender</h1></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Thank you for signing up!</h3>
            <p>Webinar time and date will be sent to your email.</p>
            <button onClick={goBackHome}>Go Back Home</button>
          </div>
        </div>
      )}
    </div>
  );
}
