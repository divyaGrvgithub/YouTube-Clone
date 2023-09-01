import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API, YOUTUBE_VIDEO_BYID } from "../contants/api_data";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import CommentsContainer from "./CommentsContainer";
import ShimmerWatch from "../ShimmerUI/ShimmerWatch";
import LiveChat from "./LiveChat";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  // console.log(searchParam.get("v"));
  const videoDetails = YOUTUBE_VIDEO_BYID + searchParam.get("v");
  const [videoInfo, setVideoInfo] = useState([]);

  useEffect(() => {
    const getVideoInfo = async () => {
      const data = await fetch(videoDetails);
      const json = await data.json();
      // console.log(json.items);
      setVideoInfo(json.items);
    };
    getVideoInfo();
  }, []);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [suggestionVideo, setSuggestionVideo] = useState([]);

  useEffect(() => {
    const getSubscriber = async () => {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      console.log(json);
      setSuggestionVideo(json.items);
    };
    getSubscriber();
  }, []);

  return videoInfo?.length === 0 ? (
    <ShimmerWatch />
  ) : (
    <div className="m-2 ml-5 mr-5">
      <div className="flex m-5">
        <div>
          {/* Video watch iframe Section */}
          <iframe
            className="rounded-2xl"
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {videoInfo.map((video) => {
            return (
              <>
                {/* Subscriber Section */}
                <div key={video.id}>
                  <h1 className="font-bold text-xl m-2">
                    {video?.snippet?.title}
                  </h1>
                  <div className="flex">
                    <div className="flex m-2">
                      <FaUserTie className="rounded-full mt-1 border border-gray-400 text-4xl" />
                      <ul>
                        <li className="font-bold text-gray-800 ml-2">
                          {video?.snippet?.channelTitle}
                        </li>
                        <li className=" text-sm ml-2">2.56M Subscriber</li>
                      </ul>
                      <p className="flex">
                        <button className="bg-black text-white border border-gray-200 shadow-sm px-5 py-1 rounded-full m-2 ml-5">
                          Subscriber
                        </button>
                        <button className="border flex border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ml-32">
                          <FiThumbsUp className="mx-3 mt-1" />{" "}
                          {video?.statistics?.likeCount} |{" "}
                          <FiThumbsDown className="mx-3 mt-1" />
                        </button>
                        <button className=" flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
                          <PiShareFat className="mx-2 mt-1 text-xl" /> Share
                        </button>
                        <button className="flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
                          <GoDownload className="mx-1 text-xl" /> Download
                        </button>
                        <button className="border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
                          <BsThreeDots />
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Video Details Section */}
                <div className="m-2 rounded-lg shadow-sm bg-gray-100 p-2 ">
                  <p className="font-bold">
                    {video?.statistics?.viewCount} Views 😎{" "}
                    {video?.snippet?.publishedAt} 
                  </p>
                  <p>{video?.snippet?.description}</p>
                </div>
                {/* Comment Section */}
                <div className="mt-5">
                  <h1 className="m-2  font-bold text-2xl">
                    {video?.statistics?.commentCount} Comments.
                  </h1>
                </div>
                <CommentsContainer />
              </>
            );
          })}
        </div>
        {/* Suggestion video right sidebar section  */}
        <div className="flex flex-col flex-wrap overscroll-y-auto	">
          <div>
            <LiveChat />
          </div>
          {suggestionVideo.map((info) => {
            return (
              <>
                <Link to={"?v=" + info.id} key={info.id}>
                  <div className="p-2 w-[28rem] flex hover:bg-gray-200 rounded-md">
                    <img
                      className="rounded-xl"
                      src={info?.snippet?.thumbnails?.default?.url}
                      alt="thumails"
                    />
                    <ul className="ml-2">
                      <li className="font-bold text-sm text-gray w-[28rem] text-ellipsis overflow-hidden "> 
                        {info?.snippet?.title}
                      </li>
                      <li className="text-sm">{info?.snippet?.channelTitle}</li>
                      <li className="text-sm">
                        {info?.statistics?.viewCount} Views
                      </li>
                    </ul>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Watchpage;
