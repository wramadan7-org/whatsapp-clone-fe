/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import WhatsAppGroupImage from "/public/asset/image/whatsapp-group.webp";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export function SidebarGroup(props) {
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
              Comunity
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 gap-y-3 px-2">
          <Image
            src={WhatsAppGroupImage}
            width={360}
            height={200}
            alt="whatsapp-group"
          />

          <span className="font-semibold text-2xl text-[#E9EDEF] text-center">
            Stay connected with the community
          </span>

          <span className="text-[#D1D7DB] text-sm text-center font-medium">
            Communities bring members together in groups
            <br />
            topic based and makes it easy to receive admin announcements. Every
            existing community
            <br />
            becoming a member will appear here.
          </span>

          <Link href={"https://faq.whatsapp.com/231869526393268?lang=id"} target="_blank" className="flex flex-row items-end gap-x-3 hover:underline hover:decoration-[#00A884]">
            <span className="text-[#00A884] text-center text-sm">See community examples</span>
            <IoIosArrowForward size={24} color="#00A884" />
          </Link>

          <button type="button" className="bg-[#00A884] hover:bg-[#51bda5] rounded-full h-[38px] w-[193.02px] px-1 text-[#111B21] text-sm font-semibold">
            Start your community
          </button>
        </div>
      </div>
    </>
  );
}
