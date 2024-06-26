import React, { useCallback } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import PlayButton from "@/components/PlayButton";
import useBillboard from "@/hooks/useBillboard";
import useInfoModal from "@/hooks/useInfoModal";

const Billboard: React.FC = () => {
  const { openModal } = useInfoModal();
  const { data } = useBillboard(); // lấy videoUrl, thumbnailUrl, title, description

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]); // mở modal thông tin khi được gọi

  return (
    <div className="relative h-[56.25vw]">
      <video
        poster={data?.thumbnailUrl}
        className="
      w-full 
      h-[56.25vw] 
      object-cover 
      brightness-[60%] 
      transition 
      duration-500"
        autoPlay
        muted
        loop
        src={data?.videoUrl}
      ></video>
      <div
        className="
      absolute top-[20%] md:top-[30%] ml-4 md:ml-16"
      >
        <p
          className="
        animate-pulse
      text-yellow-400 
        text-lg
        md:text-3xl 
        lg:text-4xl 
        w-full
        overflow-hidden
        text-ellipsis
        font-bold 
        drop-shadow-xl"
        >
          {data?.title}
        </p>
        <p
          className="
      text-white
        text-[8px] 
        md:text-lg 
        mt-3 
        md:mt-8 
        w-[90%]
        overflow-hidden
        text-ellipsis
        drop-shadow-xl"
        >
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={data?.id} />
          <button
            onClick={handleOpenModal}
            className="
            bg-blue-500
            text-black
              bg-opacity-60 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-60
              hover:text-white
              transition
            "
          >
            <InformationCircleIcon className="w-4 md:w-7 mr-1" />
            Thông tin video
          </button>
        </div>
      </div>
    </div>
  );
};
export default Billboard;
