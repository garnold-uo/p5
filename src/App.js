import { useState } from "react";
import Playlist from "./Playlist.js";
import PlaylistSongs from "./PlaylistSongs.js";
import DataEntryForm from "./DataEntryForm.js";
import song from "./data.js";
import "./styles.css";

export default function App() {
  const [selectedMood, setSelectedMood] = useState("");
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistDescription, setPlaylistDescription] = useState(
    "Made with MixMate"
  );
  const [playlistSongs, setPlaylistSongs] = useState([]);

  function handleSelectMood(mood) {
    setSelectedMood(mood);
    const filteredSongs = song.filter((song) => song.songMood === mood);
    const randomSongs = filteredSongs
      .sort(() => Math.random() - 0.5)
      .slice(0, 20);
    setPlaylistSongs(randomSongs);
  }

  function handleResetPlaylist() {
    setSelectedMood("");
    setPlaylistSongs([]);
    setPlaylistName("My Playlist");
    setPlaylistDescription("Made with MixMate");
  }

  function handleEditPlaylistName(newName) {
    setPlaylistName(newName);
  }

  function handleEditPlaylistDescription(newDescription) {
    setPlaylistDescription(newDescription);
  }

  return (
    <div className="App">
      <h1>CIT382 - P5</h1>
      <DataEntryForm onSubmit={handleSelectMood} />
      {playlistSongs.length > 0 && (
        <Playlist
          playlistName={playlistName}
          playlistDescription={playlistDescription}
          onReset={handleResetPlaylist}
          onEditName={handleEditPlaylistName}
          onEditDescription={handleEditPlaylistDescription}
          selectedMood={selectedMood}
        />
      )}
      {playlistSongs.length > 0 && <PlaylistSongs songList={playlistSongs} />}
    </div>
  );
}
