import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="p-2 w-72 mb-2">
      <img
        className="rounded-xl hover:opacity-60 transition-opacity duration-300"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="thumails"
      />
      <ul>
        <li className="font-bold py-2 text-gray text-ellipsis overflow-hidden">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} Views</li>
      </ul>
    </div>
  );
};

export const AddVideoCard = ({ info }) => {
  return (
    <div className="border border-red-900 m-1 p-1">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
