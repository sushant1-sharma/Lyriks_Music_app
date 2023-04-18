import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { selectGenreListId } from "../redux/features/playerSlice";
import { useParams } from "react-router-dom";

const Discover = ({ activeSong, isPlaying, data, genreListId }) => {
  // console.log(activeSong);
  console.log(data);
  console.log(activeSong);
  console.log(isPlaying);

  const genreTitle = "Pop";

  const SongsData = data;
  const { around } = useParams();
  console.log(around);
  const { artists } = useParams();
  const { charts } = useParams();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        {charts ? (
          <h2 className="font-bold text-3xl text-white text-left">
            Top Charts
          </h2>
        ) : around ? (
          <h2 className="font-bold text-3xl text-white text-left">
            Around You
          </h2>
        ) : artists ? (
          <h2 className="font-bold text-3xl text-white text-left">
            Top Artists
          </h2>
        ) : (
          <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
        )}

        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={ genreListId || 'pop'}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {SongsData.map((song, i) => {
          if (song.title != "Hotline Bling") {
            return (
              <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
                artists={artists}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Discover;
