/* eslint-disable no-unused-vars */
import React from "react";

const Gallery = () => {
  return (
    <>
      {" "}
      <h2 className="text-center mb-8 text-4xl font-bold tracking-tight sm:text-5xl">
        Look at our gallery!
      </h2>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://www.djjs.org/uploads/news/55f1071b7d0961425207513.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://knot9prod.s3.amazonaws.com/thumbnails/911191/hover_911191028.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.britannica.com/23/196823-131-B631F32E/People-lamps-India-festival-Hindu-Diwali.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://static.toiimg.com/photo/msid-87038679/87038679.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://assets.thehansindia.com/h-upload/2019/10/07/224159-dsc7159.webp"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/25F5/production/_122471790_gettyimages-1237366862-594x594.jpg"
              />
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Gallery;
