/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { IoArrowBack, IoLockClosed } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

export function SidebarStory(props) {
  const [showLatest, setShowLatest] = useState(true);
  const [showHasBeenSeen, setShowHasBeenSeen] = useState(false);
  const [showMuted, setShowMuted] = useState(false);
  const [arrayLatest, setArrayLatest] = useState([
    { name: "Pak Malik Ta", dateTime: "2023-12-06 12:33:21" },
    { name: "Arka", dateTime: "2023-12-06 10:45:45" },
  ]);
  const [arrayHasBeenSeen, setArrayHasBeenSeen] = useState([
    { name: "Andy", dateTime: "2023-12-07 08:12:00" },
    { name: "Sumeh", dateTime: "2023-12-07 08:23:00" },
    { name: "Ganjar", dateTime: "2023-12-07 08:56:00" },
    { name: "Akbar", dateTime: "2023-12-07 09:44:00" },
    { name: "Lulu", dateTime: "2023-12-07 10:18:00" },
  ]);
  const [arrayMuted, setArrayMuted] = useState([
    { name: "Faiz", dateTime: "2023-12-07 08:12:00" },
  ]);

  const handleKeyEscape = (event) => {
    if (event.key === "Escape") {
      setShowLatest(true);
      setShowHasBeenSeen(false);
      setShowMuted(true);
      props.onClickBackButton();
    }
  };

  const handleBackButton = () => {
    setShowLatest(true);
    setShowHasBeenSeen(false);
    setShowMuted(true);
    props.onClickBackButton();
  };

  const handleShowLatest = () => {
    setShowLatest(!showLatest);
  };

  const handleShowHasBeenSeen = () => {
    setShowHasBeenSeen(!showHasBeenSeen);
  };

  const handleShowMuted = () => {
    setShowMuted(!showMuted);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyEscape);

    return () => document.removeEventListener("keydown", handleKeyEscape);
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen w-[410.59px] border-gray-700 border-r-[0.5px] border-solid bg-[#111b21] min-w-[395.59px]">
        {/* Header */}
        <div className="bg-[#202C33] max-h-[108px] h-[108px] items-end pb-4 flex justify-start">
          <div className="flex flex-row items-center justify-start px-5">
            <button
              type="button"
              className="flex h-fit w-fit items-center justify-start"
              onClick={handleBackButton}
            >
              <IoArrowBack size={24} color="#D9DEE0" />
            </button>

            <span className="text-[#D9DEE0] text-[19px] font-semibold text-left ml-5">
              Story
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col w-full overflow-y-scroll">
          {/* My status */}
          <div className="flex flex-row w-full items-center gap-x-3 mt-6 px-4">
            <div className="flex rounded-full h-[40px] w-[40px] min-h-[40px] min-w-[40px] items-center justify-center bg-gray-600"></div>

            <div className="flex flex-col w-fit gap-y-0.5">
              <span className="text-base text-[#D1D7DB] font-normal">
                My Status
              </span>

              <span className="text-sm text-[#8696a0] font-normal">
                Add to My Status
              </span>
            </div>
          </div>

          {/* Button Latest */}
          <button
            type="button"
            className="flex flex-row justify-between items-center h-fit w-full px-5 mt-8"
            onClick={handleShowLatest}
          >
            <span className="text-[#008069] text-base font-normal">Latest</span>

            <MdNavigateNext
              color="#008069"
              size={24}
              className={showLatest ? "" : "transform rotate-90"}
            />
          </button>

          {/* Wrap Status Latest */}
          {showLatest && (
            <div className="flex flex-col w-full mt-6">
              {arrayLatest.map((value, index) => (
                // Per Status
                <button
                  key={index}
                  type="button"
                  className="flex flex-row gap-x-3 items-center hover:bg-[#202c33] pb-3"
                >
                  <div className="flex mt-3 ml-4 h-[40px] w-[40px] min-h-[40px] min-w-[40px] ring ring-gray-400 bg-gray-500 rounded-full"></div>

                  <div className="flex flex-col gap-y-0.5 border-t border-[#202c33] w-full pt-3">
                    <span className="font-normal text-[17px] text-[#E9EDEF] text-left">
                      {value.name}
                    </span>

                    <span className="font-normal text-sm text-[#8696A0] text-left">
                      {moment(value.dateTime).calendar()}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Button Has Been Seen */}
          <button
            type="button"
            className="flex flex-row justify-between items-center h-fit w-full px-5 mt-8"
            onClick={handleShowHasBeenSeen}
          >
            <span className="text-[#008069] text-base font-normal">
              Has Been Seen
            </span>

            <MdNavigateNext
              color="#008069"
              size={24}
              className={showHasBeenSeen ? "" : "transform rotate-90"}
            />
          </button>

          {/* Wrap Status Has Been Seen */}
          {showHasBeenSeen && (
            <div className="flex flex-col w-full mt-6">
              {arrayHasBeenSeen.map((value, index) => (
                // Per Status
                <button
                  key={index}
                  type="button"
                  className="flex flex-row gap-x-3 items-center hover:bg-[#202c33] pb-3"
                >
                  <div className="flex mt-3 ml-4 h-[40px] w-[40px] min-h-[40px] min-w-[40px] ring ring-gray-400 bg-gray-500 rounded-full"></div>

                  <div className="flex flex-col gap-y-0.5 border-t border-[#202c33] w-full pt-3">
                    <span className="font-normal text-[17px] text-[#E9EDEF] text-left">
                      {value.name}
                    </span>

                    <span className="font-normal text-sm text-[#8696A0] text-left">
                      {moment(value.dateTime).calendar()}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Wrap Mute Sotry */}
          <div className="flex flex-row items-center justify-between pr-5 pl-16 mt-5">
            <span className="text-[#008069] text-base font-normal">MUTED</span>

            <button
              type="button"
              className="text-[#00a884] text-base font-normal"
              onClick={handleShowMuted}
            >
              {showMuted ? "HIDE" : "SHOW"}
            </button>
          </div>

          {/* Wrap Status Muted */}
          {showMuted && (
            <div className="flex flex-col w-full mt-6">
              {arrayMuted.map((value, index) => (
                // Per Status
                <button
                  key={index}
                  type="button"
                  className="flex flex-row gap-x-3 items-center hover:bg-[#202c33] pb-3"
                >
                  <div className="flex mt-3 ml-4 h-[40px] w-[40px] min-h-[40px] min-w-[40px] ring ring-gray-400 bg-gray-500 rounded-full"></div>

                  <div className="flex flex-col gap-y-0.5 border-t border-[#202c33] w-full pt-3">
                    <span className="font-normal text-[17px] text-[#9da1a3] text-left">
                      {value.name}
                    </span>

                    <span className="font-normal text-sm text-[#6f7c85] text-left">
                      {moment(value.dateTime).calendar()}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* End to end description */}
          <div className="flex flex-row gap-x-1.5 items-center justify-center w-fit self-center my-14">
            <IoLockClosed color="#8696a0" size={12} />

            <span className="text-xs font-normal text-[#8696A0]">
              Your status updates are{" "}
              <span className="text-xs font-normal text-[#3f93b6] cursor-pointer">
                end-to-end encrypted
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
