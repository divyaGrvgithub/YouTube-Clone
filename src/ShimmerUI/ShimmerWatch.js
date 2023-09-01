import React from "react";

const ShimmerWatch = () => {
  return (
    <div className="flex flex-wrap m-5 ">
      <iframe
        className="bg-gray-200"
        width="1000"
        height="500"
        src=""
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ShimmerWatch;
