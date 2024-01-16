import React from "react";
import Destination from "../json/destinationlist.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import DestinationCard from "./destinationcard";

const Destinationslider: React.FC = () => {
  const DestinationList = Destination.DestinationList;
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 pt-10 pb-6">
        <h1 className="text-gray-900 text-4xl font-bold pb-3 ">
          Top Destination
        </h1>
        <p className="border-b border-gray-200 pb-3 text-base font-semibold text-gray-500 ">
          Tick one more destination off of your bucket list with one of our most
          popular vacations in 2022
        </p>
      </div>
      {/* slider */}
      {DestinationList && DestinationList?.length > 0 ? (
        <Swiper slidesPerView={4} spaceBetween={40} centeredSlides={true}>
          {DestinationList?.map((item) => {
            return (
              <SwiperSlide key={item?.destinationId}>
                <DestinationCard
                  key={item?.destinationId}
                  destinationCard={item}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : null}
      {/* slider */}
    </>
  );
};

export default Destinationslider;
