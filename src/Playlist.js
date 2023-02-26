export default function Playlist({
  playlistName,
  playlistDescription,
  onEditName,
  onEditDescription,
  onReset
}) {
  return (
    <div className="Playlist">
      <h2>{playlistName}</h2>
      <h4>{playlistDescription}</h4>
      <button onClick={() => onEditName(prompt("Enter new playlist name:"))}>
        Edit Name
      </button>
      <button
        onClick={() => onEditDescription(prompt("Enter playlist description:"))}
      >
        Edit Description
      </button>
      <button onClick={onReset}>Clear</button>
    </div>
  );
}
