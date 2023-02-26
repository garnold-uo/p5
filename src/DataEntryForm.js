import { useState } from "react";

export default function DataEntryForm({ onSubmit }) {
  const [selectedMood, setSelectedMood] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(selectedMood);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Mood:
        <select
          value={selectedMood}
          onChange={(e) => setSelectedMood(e.target.value)}
        >
          <option value="">Select a mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Fast">Fast</option>
          <option value="Slow">Slow</option>
        </select>
      </label>
      <button>Generate Playlist</button>
    </form>
  );
}
