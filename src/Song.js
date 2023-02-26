export default function Song({ song }) {
  return (
    <div key={song.songId} className="Song">
      <img src={song.songImage} alt={song.songName} />
      <div className="SongInfo">
        <p className="SongName">{song.songName}</p>
        <p className="SongArtist">{song.songArtist}</p>
      </div>
    </div>
  );
}
