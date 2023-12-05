/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineEmojiEmotions, MdKeyboardVoice } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { useCallback, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const myId = 1;
const receiverId = 2;

const listDetailMessage = [
  {
    id: 1,
    createdBy: 1,
    createdFor: 2,
    message: "Hallo",
    createdAt: "2023-04-01 17:20:00",
    updatedAt: "2023-04-01 17:20:00",
  },
  {
    id: 2,
    createdBy: 2,
    createdFor: 1,
    message: "Hallo juga",
    createdAt: "2023-04-01 17:21:00",
    updatedAt: "2023-04-01 17:21:00",
  },
  {
    id: 3,
    createdBy: 1,
    createdFor: 2,
    message: "Bagaimana kabarnya?",
    createdAt: "2023-04-01 17:22:00",
    updatedAt: "2023-04-01 17:22:00",
  },
  {
    id: 4,
    createdBy: 2,
    createdFor: 1,
    message: "Alhamdulillah baik",
    createdAt: "2023-04-01 17:22:55",
    updatedAt: "2023-04-01 17:22:55",
  },
  {
    id: 5,
    createdBy: 1,
    createdFor: 2,
    message: "Hallo",
    createdAt: "2023-04-01 17:20:00",
    updatedAt: "2023-04-01 17:20:00",
  },
  {
    id: 6,
    createdBy: 2,
    createdFor: 1,
    message: "Hallo juga",
    createdAt: "2023-04-01 17:21:00",
    updatedAt: "2023-04-01 17:21:00",
  },
  {
    id: 7,
    createdBy: 1,
    createdFor: 2,
    message: "Bagaimana kabarnya?",
    createdAt: "2023-04-01 17:22:00",
    updatedAt: "2023-04-01 17:22:00",
  },
  {
    id: 8,
    createdBy: 2,
    createdFor: 1,
    message:
      "Alhamdulillah baik, wadawdadas dwadawdawd dwadawda awdawda dawda da daw dad awda daw",
    createdAt: "2023-04-01 17:22:55",
    updatedAt: "2023-04-01 17:22:55",
  },
];

export default function DetailMessage({ dataInfo }) {
  const scrollContainerRef = useRef();

  const [listDetailMessageState, setListDetailMessageState] = useState({});
  const [message, setMessage] = useState("");

  const socket = io("http://localhost:8080/", {
    withCredentials: true,
    transports: ["websocket"], // If we not define transports, we get error block Access-Control-Allow-Origin by CORS
  });

  const handleSendMessage = useCallback(
    async function (event) {
      event.preventDefault();
      try {
        const data = {
          personalId: 1,
          interlocutorsId: 2,
          message,
        };
        await socket.emit("newMessage", data);
        setMessage("");
      } catch (error) {
        throw new Error(error);
      }
    },
    [message, socket]
  );

  const handleKeyEnter = (event) => {
    if (event.key === "Enter") {
      handleSendMessage(event);
    }
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connect", socket.id);
    });
    // Trigger the 'getDetailListMessage' event on the server
    socket.emit("getDetailListMessage", {
      personalId: 1, // Replace with actual personalId
      interlocutorsId: 2, // Replace with actual interlocutorsId
    });

    // Listen for the 'detailMessage' event from the server
    socket.on("detailMessage", (data) => {
      console.log("Received detail message:", data);
      setListDetailMessageState(data);
    });

    // Scroll to the bottom of the container when component mounts or when the list changes
    scrollContainerRef.current.scrollTop =
      scrollContainerRef.current.scrollHeight;

    return () => {
      socket.disconnect(); // Disconnect when component unmounts
    };
  }, [dataInfo]);

  return (
    // className="flex flex-1 flex-col w-[560px] h-screen bg-[#222e35] items-center justify-center"
    <main
      className=" h-screen bg-cover bg-center flex flex-col flex-1"
      style={{
        backgroundImage: 'url("/asset/image/background-chat.webp")',
      }}
    >
      {/* Header detail message */}
      <div className="flex flex-row gap-x-2 w-full md:gap-x-1 items-center justify-between bg-[#222e35] h-[59px] pl-2 pr-5 sticky">
        {/* Profile and Name with Online info */}
        <button
          type="button"
          className="flex flex-row gap-x-4 w-full items-center"
        >
          {/* Profile */}
          <div className="relative flex w-[40px] h-[40px] overflow-hidden rounded-full bg-[#8e8c8c] items-center justify-center">
            {dataInfo?.profile?.length && (
              <Image
                src={dataInfo?.profile}
                width={40}
                height={40}
                alt="profile"
              />
            )}

            {!dataInfo?.profile?.length && (
              <BsFillPersonFill
                size={40}
                color="#d4d2d2"
                className="absolute top-1"
              />
            )}
          </div>

          {/* Name and info online */}
          <div className="flex flex-col gap-y-1">
            <span className="text-base text-[#E9EDEF] font-medium text-left">
              {dataInfo?.name}
            </span>
            {dataInfo?.isOnline && (
              <span className="text-xs text-[#8696A0] font-medium text-left">
                Online
              </span>
            )}
          </div>
        </button>

        {/* Menu */}
        <div className="flex flex-row gap-x-5 items-center">
          {/* Call */}
          <button
            type="button"
            className="flex flex-row gap-x-3 items-center justify-center"
          >
            <FaVideo color="#4c5d66" size={20} />

            <IoIosArrowDown size={20} color="#4c5d66" />
          </button>

          {/* Search */}
          <button type="button" className="flex items-center justify-center">
            <BiSearchAlt2 size={23} color="#a6b2b9" />
          </button>

          {/* Sub-menu */}
          <button type="button" className="flex items-center justify-center">
            <HiDotsVertical size={20} color="#a6b2b9" />
          </button>
        </div>
      </div>

      {/* Content list message */}
      <div
        ref={scrollContainerRef}
        className="flex flex-1 flex-col gap-y-1 h-full w-full px-16 pt-5 pb-2 overflow-y-scroll"
      >
        {listDetailMessageState?.data?.length &&
          listDetailMessageState?.data?.map((value, index) => (
            <div key={value?.id} className="flex">
              <span
                className={
                  value?.personalId === myId
                    ? "rounded-l-md rounded-br-md bg-[#005c4b] w-fit px-2 py-1 text-sm text-[#E9EDEF] ml-auto max-w-xl"
                    : "rounded-r-md rounded-bl-md bg-[#202c33] w-fit px-2 py-1 text-sm text-[#E9EDEF] mr-auto max-w-xl"
                }
              >
                {value?.message}
              </span>
            </div>
          ))}
      </div>

      {/* Content for type message and another action */}
      <form
        onSubmit={handleSendMessage}
        className="bg-[#202c33] h-[62.05px] w-full flex flex-row gap-x-4 items-center justify-start px-5"
      >
        {/* Emoticon */}
        <button
          type="button"
          className="flex items-center justify-center w-fit h-fit"
        >
          <MdOutlineEmojiEmotions size={30} color="#8696a0" />
        </button>

        {/* Attachment */}
        <button
          type="button"
          className="flex items-center justify-center w-fit h-fit"
        >
          <FaPlus size={22} color="#8696a0" />
        </button>

        {/* Type message */}
        <input
          type="text"
          className="px-2 min-h-[42.05px] h-fit w-full rounded-md bg-[#2a3942] focus:outline-none text-sm font-normal text-[#e9edef]"
          placeholder="Type message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleKeyEnter}
        />

        {/* Voice */}
        <button
          type="button"
          className="flex items-center justify-center w-fit h-fit"
        >
          <MdKeyboardVoice size={29} color="#8696a0" />
        </button>
      </form>
    </main>
  );
}
