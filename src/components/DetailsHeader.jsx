import { Link } from "react-router-dom";
const DetailsHeader = ({ data, songid, id }) => {
  var ImageData = data.data.tracks;
  ImageData = ImageData.slice(1, 19);

  console.log(ImageData);
  console.log(songid);
  const SongData = ImageData.filter(function (song) {
    return songid ? song.key == songid : song.artists[0].adamid == id;
  });
  console.log(songid);
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
        <div className="absolute inset-0 flex items-center">
          <img
            src={songid? SongData[0].images.coverart : SongData[0].images.background}
            alt="song_img"
            className="sm:w-48 w-28 sm:h-48 h-28 rounded-full obkect-cover border-2 shadow-xl shadow-black"
          />
          <div className="ml-5">
            <p className="font-semibold text-lg text-white truncate">
              {songid? SongData[0].title: ""}
            </p>
            <p className="font-semibold text-sm text-white truncate">
              {SongData[0].subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
