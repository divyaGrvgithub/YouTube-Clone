import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../contants/api_data";
import VideoCard,{AddVideoCard} from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerCard from "../ShimmerUI/ShimmerCard";

const VideoContainer = () => {
  const [videosList, setVideosList] = useState([]); 

  useEffect(() => {  
    const getYoutubeVideo = async () => {  
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      console.log("MainData--", json.items);
      setVideosList(json.items);
    };
    getYoutubeVideo();
  }, []);

  return videosList?.length===0 ? <ShimmerCard /> : (
    <div className="flex flex-wrap m-3">
      {videosList.map((video) => (
        <Link to={"watch?v=" + video.id} key={video.id} >
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
      {videosList[0] && <AddVideoCard info={videosList[0]} />}
      {videosList[0] && <AddVideoCard info={videosList[1]} />}
    </div>
  );
};

export default VideoContainer;
