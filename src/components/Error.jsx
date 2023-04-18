import React from "react";
import { loader } from "../assets";
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "../components";
const Error = () => (
  <div className="relative flex">
    <Sidebar />
    <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
      <Searchbar />

      <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
        <div className="flex-1 h-fit pb-40">
          <div className="w-full flex justify-center items-center flex-col">
            <img
              src={loader}
              alt="loader"
              className="w-32 h-32 object-contain"
            />
            <div className="w-full flex justify-center items-center">
              <h1 className="font-bold text-2xl text-white mt-2">
                   Something Went Wrong.
              Please check your Internet Connection     
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Error;
