/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";

export function SidebarStory(props) {
  const handleKeyEscape = (event) => {
    if (event.key === "Escape") {
      props.onClickBackButton();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyEscape);

    return () => document.removeEventListener("keydown", handleKeyEscape);
  }, []);
  return (
    <>
      <div className="flex flex-col h-screen w-[410.59px] border-gray-700 border-r-[0.5px] border-solid bg-[#111b21] min-w-[395.59px]">
        <div className="bg-[#202C33] max-h-[108px] h-[108px] items-end pb-4 flex justify-start">
          <div className="flex flex-row items-center justify-start px-5">
            <button
              type="button"
              className="flex h-fit w-fit items-center justify-start"
              onClick={() => props.onClickBackButton()}
            >
              <IoArrowBack size={24} color="#D9DEE0" />
            </button>

            <span className="text-[#D9DEE0] text-[19px] font-semibold text-left ml-5">
              Story
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
