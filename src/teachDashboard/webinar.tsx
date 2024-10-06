import { useState } from 'react';
import Link from 'next/link';

export default function WebinarsEvents() {
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);  // Explicitly set type to string array
  const [event, setEvent] = useState<string>('');  // The event input is a string

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (event) {
      setRegisteredEvents([...registeredEvents, event]);  // Add the new event to the array
      setEvent('');  // Clear the input
    }
  };

  return (
    <div>
      <h2>Webinars & Events</h2>
      <form onSubmit={handleEventSubmit}>
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}  // Update the event name
          placeholder="Enter webinar or event name"
        />
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <h3>Registered Events:</h3>
        <ul>
          {registeredEvents.map((evt, index) => (
            <li key={index}>{evt}</li>
          ))}
        </ul>
      </div>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
