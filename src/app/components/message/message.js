import Image from "next/image";
import { BsCheckAll, BsCheckLg, BsFillPersonFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { TbClock2 } from "react-icons/tb";

export default function Message(props) {
  return (
    <button
      type="button"
      className="flex flex-row items-start w-full min-h-[71px] h-[71px] pl-1 hover:bg-[#222e35] border-gray-700 border-b-[0.5px] focus:outline-none"
      onClick={() => props.handleShowListMessage(props)}
    >
      {/* Profile */}
      <div className="relative flex w-[49px] h-[49px] min-w-[49px] min-h-[49px] overflow-hidden rounded-full bg-[#8e8c8c] items-center justify-center self-center">
        {props.image ? (
          <Image src={props.image} alt="profile" />
        ) : (
          <BsFillPersonFill
            size={55}
            color="#d4d2d2"
            className="absolute top-1"
          />
        )}
      </div>

      {/* Name user with message */}
      <div className="flex flex-col ml-3 mt-1 self-center w-full hover:border-none">
        <div className="flex flex-row justify-between items-baseline">
          {/* Name */}
          <span className="font-normal text-[#e9edef] text-[17px] text-left -mb-0.5 overflow-hidden whitespace-nowrap text-ellipsis max-w-[210px]">
            {props.name}
          </span>

          {/* Date */}
          <span className="font-medium text-[#8696a0] text-sm pr-3">
            {props.date}
          </span>
        </div>

        {/* Icon and message */}
        <div className="flex flex-row items-center gap-x-1">
          {/* Icon check send message and pending */}
          {props.isSend && props.status === "pending" && <BsCheckLg size={24} color="#6c7b7e" />}

          {/* Icon check send message and success */}
          {props.isSend && props.status === "success" && <BsCheckAll size={24} color={props.isRead ? "#53bdeb": "#6c7b7e"} />}

          {/* Icon check send message and error */}
          {props.isSend && props.status === "error" && <TbClock2 size={20} color="#f73737fa" />}

          <div className="flex flex-row justify-between items-center w-full pr-3">
            {/* Message */}
            <span className="font-medium text-[#8696a0] text-sm text-left overflow-hidden whitespace-nowrap text-ellipsis max-w-[210px]">
              {props.message}
            </span>

            <IoIosArrowDown size={20} color="#8696a0" />
          </div>
        </div>
      </div>
    </button>
  );
}
