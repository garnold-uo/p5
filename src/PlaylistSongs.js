import Song from "./Song.js";

export default function PlaylistSongs({ songList }) {
  return (
    <div>
      <ul>
        {songList.map((song) => (
          <Song key={song.songId} song={song} />
        ))}
      </ul>
    </div>
  );
}
