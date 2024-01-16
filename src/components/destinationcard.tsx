import React from "react";

interface DestinationCardProps {
  destinationCard?: Record<string, string>;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  destinationCard,
}) => {
  return (
    <>
      <div className="flex align-middle rounded-xl overflow-hidden justify-center items-center flex-col min-h-[250px] min-w-[250px] p-4 relative">
        <img
          src={destinationCard?.destinationImage}
          alt="Destination Card"
          className="w-full h-full cursor-pointer absolute top-0 left-0"
        />
        <h3 className="text-white font-bold cursor-pointer text-3xl relative z-10">
          {destinationCard?.destinationTitle}
        </h3>
      </div>
    </>
  );
};

export default DestinationCard;
