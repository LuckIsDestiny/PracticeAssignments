let playlist = [
  { title: "Song 1", artist: "Artist A" },
  { title: "Song 2", artist: "Artist B" },
  { title: "Song 3", artist: "Artist C" }
];

playlist.forEach((song, index) => console.log(`${index+1}. ${song.title} by ${song.artist}`));

