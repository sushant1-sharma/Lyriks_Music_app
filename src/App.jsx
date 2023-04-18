import { Route, Routes } from "react-router-dom";
import { useEffect, useRef } from "react";

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "./pages";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "./components";

import { useGetTopChartsQuery } from "./redux/services/shazamCore";

const App = () => {
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) {
    return <Loader title="Loading songs..." />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
          <Searchbar />

          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Discover
                      activeSong={activeSong}
                      isPlaying={isPlaying}
                      data={data.tracks}
                      genreListId={genreListId}
                    />
                  }
                />
                <Route path="/top-artists/:artists" element={ <Discover
                      activeSong={activeSong}
                      isPlaying={isPlaying}
                      data={data.tracks}
                    />} />
                {/* <Route path="/top-charts" element={<TopCharts />} /> */}
                <Route
                  path="/top-charts/:charts"
                  element={
                    <Discover
                      activeSong={activeSong}
                      isPlaying={isPlaying}
                      data={data.tracks}
                    />
                  }
                />
                {/* <Route path="/around-you" element={<AroundYou />} /> */}
                <Route
                  path="/around-you/:around"
                  element={
                    <Discover
                      activeSong={activeSong}
                      isPlaying={isPlaying}
                      data={data.tracks}
                    />
                  }
                />
                <Route
                  path="/artists/:id"
                  element={<ArtistDetails data={data} />}
                />
                <Route
                  path="/songs/:songid"
                  element={<SongDetails data={data} />}
                />
                <Route path="/search/:searchTerm" element={<Search />} />
              </Routes>
            </div>
            <div className="xl:sticky relative top-0 h-fit">
              <TopPlay
                activeSong={activeSong}
                isPlaying={isPlaying}
                data={data}
              />
            </div>
          </div>
        </div>

        {activeSong?.title && (
          <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )}
      </div>
    );
  }
};

export default App;
