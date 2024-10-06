import { useState } from 'react';
import Link from 'next/link';

export default function LessonSharing() {
  const [lessons, setLessons] = useState<string[]>([]);  // Explicitly set type to string array
  const [lessonFile, setLessonFile] = useState<File | null>(null);  // File can be either a File or null

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLessonFile(e.target.files[0]);  // Set the uploaded file
    }
  };

  const handleUpload = () => {
    if (lessonFile) {
      setLessons([...lessons, lessonFile.name]);  // Add the file name to the lessons array
      setLessonFile(null);
    }
  };

  return (
    <div>
      <h2>Lesson Sharing</h2>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleUpload}>Upload Lesson</button>
      <div>
        <h3>Shared Lessons:</h3>
        <ul>
          {lessons.map((lesson, index) => (
            <li key={index}>{lesson}</li>
          ))}
        </ul>
      </div>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
