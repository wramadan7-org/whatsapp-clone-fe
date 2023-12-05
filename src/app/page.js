"use client";
import Image from "next/image";
import { BsFillPersonFill, BsCheckAll } from "react-icons/bs";
import { MdGroups2 } from "react-icons/md";
import { CgCircleci } from "react-icons/cg";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { BsBroadcast } from "react-icons/bs";
import {
  BiSolidMessageAdd,
  BiSearchAlt2,
  BiSolidLockAlt,
} from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { IoFilter } from "react-icons/io5";
import { PiChecksBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import WhatsappDekstopHome from "../../public/asset/image/wa-desktop-home.png";
import Message from "./components/message/message";
import { messages } from "@/app/constants/dummy";
import { useEffect, useState } from "react";
import DetailMessage from "./components/message/detailMessage";
import { SidebarGroup } from "./components/sidebar/sidebarGroup";

export default function Home() {
  const [isShowListMessage, setIsShowListMessage] = useState(false);
  const [detailInfoMessage, setDetailInfoMessage] = useState({
    id: 0,
    profile: "",
    name: "",
    isOnline: false,
  });
  const [menu, setMenu] = useState("home");

  const handleShowListMessage = (data) => {
    const refactorData = {
      id: data?.id || 0,
      profile: data?.profile || "",
      name: data?.name || "",
      isOnline: data?.isOnline || true,
    };

    setIsShowListMessage(true);
    setDetailInfoMessage(refactorData);
  };

  const handleClickMenu = (menuParam) => {
    setMenu(menuParam);
  };

  const handleBackButton = () => {
    setMenu("home");
  };

  useEffect(() => {
    const handleKeyEscape = (event) => {
      if (event.key === "Escape") {
        setIsShowListMessage(false);
        setDetailInfoMessage({
          id: 0,
          profile: "",
          name: "",
          isOnline: false,
        });
      }
    };

    document.addEventListener("keydown", handleKeyEscape);

    return () => {
      document.removeEventListener("keydown", handleKeyEscape);
      setMenu("home");
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-row items-center justify-between">
      {menu === "group" && (
        <SidebarGroup onClickBackButton={handleBackButton} />
      )}

      {menu === "home" && (
        <>
          {/* Sidebar */}
          <div className="flex flex-col h-screen w-[410.59px] border-gray-700 border-r-[0.5px] border-solid bg-[#111b21] min-w-[395.59px]">
            {/* Header sidebar */}
            <div className="flex flex-row gap-x-2 w-full md:gap-x-1 items-center justify-between bg-[#222e35] h-[73px] px-2 sticky">
              {/* Profile */}
              <button
                type="button"
                className="relative flex w-[40px] h-[40px] overflow-hidden rounded-full bg-[#8e8c8c] items-center justify-center"
                onClick={() => handleClickMenu("profile")}
              >
                <BsFillPersonFill
                  size={40}
                  color="#d4d2d2"
                  className="absolute top-1"
                />
              </button>

              <div className="flex flex-1 flex-row items-center justify-end gap-x-0.5">
                {/* Group */}
                <button
                  type="button"
                  className="flex w-[40px] h-[40px] items-center justify-center"
                  onClick={() => handleClickMenu("group")}
                >
                  <MdGroups2 size={24} color="#d4d2d2" />
                </button>

                {/* Story */}
                <button
                  type="button"
                  className="flex w-[40px] h-[40px] items-center justify-center"
                  onClick={() => handleClickMenu("story")}
                >
                  <CgCircleci size={20} color="#d4d2d2" />
                </button>

                {/* Channel */}
                <button
                  type="button"
                  className="relative flex w-[40px] h-[40px] items-center justify-center"
                >
                  <BsBroadcast
                    size={15}
                    color="#262e26"
                    className="absolute m-auto"
                  />

                  <TbMessageCircle2Filled size={27} color="#d4d2d2" />
                </button>

                {/* New chat */}
                <button
                  type="button"
                  className="flex w-[40px] h-[40px] items-center justify-center"
                >
                  <BiSolidMessageAdd size={23} color="#d4d2d2" />
                </button>

                {/* Sub menu */}
                <button
                  type="button"
                  className="flex w-[40px] h-[40px] items-center justify-center"
                >
                  <HiDotsVertical size={23} color="#d4d2d2" />
                </button>
              </div>
            </div>

            {/* Search and filter */}
            <div className="flex flex-row items-center justify-between px-2 gap-x-2">
              {/* Search */}
              <div className="flex flex-1 flex-row bg-[#1f2c34] h-[35px] my-2 rounded-xl px-2 items-center">
                <button type="button" className="w-[49px] pl-1">
                  <BiSearchAlt2 size={18} color="#778791" />
                </button>

                <input
                  className="bg-transparent outline-none text-[#778791] font-normal text-sm px-2 w-full h-[35px]"
                  placeholder="Search or start new chat"
                />
              </div>

              <button
                type="button"
                className="w-[26px] h-[26px] items-center flex justify-center"
              >
                <IoFilter size={20} color="#778791" />
              </button>
            </div>

            {/* List chat */}
            <div className="flex flex-col mt-3 overflow-y-scroll h-screen">
              {/* Profile and name user with the value of message */}
              {messages &&
                messages.length &&
                messages.map((item, index) => (
                  <Message
                    key={item.id}
                    id={item.id}
                    profile={item.profile}
                    name={item.name}
                    date={item.date}
                    message={item.message}
                    isRead={item.isRead}
                    isSend={item.isSend}
                    isReceive={item.isReceive}
                    status={item.status}
                    handleShowListMessage={handleShowListMessage}
                  />
                ))}
            </div>
          </div>
        </>
      )}

      {/* Content */}
      {!isShowListMessage && (
        <div className="flex flex-1 flex-col w-full h-screen bg-[#222e35] items-center justify-center">
          <Image
            src={WhatsappDekstopHome}
            className="w-[320px] h-[188px] items-center mb-5"
            alt="wa-desktop-home"
          />

          <span className="text-3xl font-light text-center text-[#e9edefe0]">
            Download WhatsApp for Windows
          </span>

          <span className="font-medium text-[#8696a0] text-sm w-[560px] text-center mt-3">
            Create call, share you&apos;re screen and get more faster experience
            when you download application Windows.
          </span>

          <button className="w-[162.08px] h-[38px] text-center text-[#111b21] text-base font-medium bg-[#00a884] hover:bg-[#51bda5] px-3 py-6 items-center flex justify-center rounded-full mt-10">
            Get application
          </button>

          <div className="flex flex-row items-center gap-x-1 mt-5">
            <BiSolidLockAlt size={10} color="#667781" />

            <span className="text-[#667781] text-sm text-center">
              Your private messages are end-to-end encrypted
            </span>
          </div>
        </div>
      )}

      {isShowListMessage && <DetailMessage dataInfo={detailInfoMessage} />}
    </main>
  );
}
