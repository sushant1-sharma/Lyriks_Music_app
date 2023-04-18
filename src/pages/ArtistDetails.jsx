import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

// import { useGetSongDetailsQuery, useGetTopChartsQuery } from "../redux/services/shazamCore";
const ArtistDetails = (data) => {
  const dispatch = useDispatch();
//   const { setActiveSong, isPlaying } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { id } = useParams();

  // const { data, isFetching, error } = useGetSongDetailsQuery(songid);

  // console.log(error)

  // console.log(songid);
  // console.log(data);

  // const handlePauseClick = () => {
  //   dispatch(playPause(false));
  // };

  // const handlePlayClick = (song, i) => {
  //   dispatch(setActiveSong({ song, data, i }));
  //   dispatch(playPause(true));
  // };


  return (
    <div className="flex flex-col">
      <DetailsHeader data={data} id={id} />

      <div className="mb-10 mt-10">
        <h2 className="text-white text-3xl font-bold">No Lyrics Found</h2>
      </div>
      {/* <RelatedSongs
      data={data.tracks}
      isPlaying={isPlaying}
      activeSong={activeSong}
      handlePauseClick={handlePauseClick}
      handlePlayClick={handlePlayClick}
      /> */}
    </div>
  );
};

export default ArtistDetails;
