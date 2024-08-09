import { TbSearch } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { BsFillSendFill } from "react-icons/bs";
import Message from "./Message";

import Image from "next/image";

export default function Chat() {
  return (
    <div className="flex-1 h-full overflow-hidden">
      <div className="flex justify-between items-center bg-zinc-900 px-5 py-3">
        <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
            <p className="text-lg font-roboto-bold">React-js</p>
            <span className="text-zinc-400 font-roboto-reg">
              last seen recently
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-8 cursor-pointer text-2xl text-zinc-400">
          <FiPhone />
          <TbSearch />
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className="relative h-[90vh]">
        <Image
          src={"/images/bg.png"}
          alt="bg"
          width={1000}
          height={1000}
          className="absolute -z-20 w-full h-full"
        />
        <div className=" flex justify-between items-center px-6 bg-[#bdbcbc] w-4/5 rounded-2xl h-14 absolute bottom-6 left-1/2 -translate-x-1/2 gap-x-4">
          <BsEmojiSmile className="text-3xl cursor-pointer" />
          <input
            type="text"
            className="flex-1 h-full bg-transparent outline-none"
          />
          <div className="flex items-center gap-x-5 text-2xl">
            <div className="">
              <label htmlFor="location">
                <GrAttachment className="cursor-pointer mt-8" />
              </label>
              <input
                id="location"
                type="file"
                className="invisible w-0 h-0 opacity-0 "
              />
            </div>

            <MdLocationOn className="text-3xl cursor-pointer" />
            <button className="flex justify-center items-center bg-purple-600 rounded-full p-2">
              <BsFillSendFill className="text-white" />
            </button>
          </div>
        </div>
        <div className="w-full message-wrapper overflow-auto h-[90vh] pt-8 pb-32 px-8 ">
          <Message own={false} />
          <Message own={true} />
          <Message own={false} />
          <Message own={false} />
          <Message own={false} />
          <Message own={true} />
        </div>
      </div>
    </div>
  );
}
