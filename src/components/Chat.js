"use client";
import { TbSearch } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { BsFillSendFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Message from "./Message";

import Image from "next/image";

export default function Chat({
  full,
  roomInfo,
  sendMessage,
  user,
  newMessage,
}) {
  const [message, setMessage] = useState("");
  const [newMessages, setNewMessages] = useState([]);

  console.log(newMessages);

  useEffect(() => {
    if (newMessage.message) {
      setNewMessages((prev) => [...prev, newMessage]);
    }
  }, [newMessage]);

  const sendMessageHandler = (e) => {
    e.preventDefault();

    sendMessage(message, roomInfo?.title, user._id);
    setMessage("");
  };

  return (
    <div
      className={`  ${
        full === false && "w-0 sm:w-[60%] xmd:w-2/3"
      } h-full overflow-hidden  ${full === true && "w-full"}`}
    >
      {roomInfo?.title ? (
        <>
          <div className="flex justify-between items-center w-full  bg-zinc-900 px-5 py-3">
            <div className="flex justify-between items-center gap-x-4">
              <img
                src="/images/bg.png"
                alt="avatar"
                className="xs:w-16 xs:h-16 w-12 h-12 rounded-full object-cover"
              />
              <div className="text-white">
                <p className="xs:text-lg font-roboto-bold">{roomInfo?.title}</p>
                <span className="text-zinc-400 font-roboto-reg text-sm xs:text-base">
                  last seen recently
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-4 xs:gap-x-8 cursor-pointer text-xl xs:text-2xl text-zinc-400">
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
              className="absolute -z-20 w-full h-full object-cover"
            />
            <div className=" flex justify-between items-center px-3 md:px-6 bg-[#bdbcbc] w-[90%] xmd:w-4/5 rounded-2xl h-14 absolute bottom-16 2xs:bottom-6 left-1/2 -translate-x-1/2 gap-x-4">
              <BsEmojiSmile className="text-3xl cursor-pointer" />
              <form className="w-full flex h-full ">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-1/2 overflow-auto xs:flex-1 h-full bg-transparent outline-none"
                />
                <div className="flex items-center gap-x-2 md:gap-x-5 text-xl md:text-2xl">
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
                  <button
                    type="submit"
                    onClick={sendMessageHandler}
                    className="flex justify-center items-center bg-purple-600 rounded-full p-2"
                  >
                    <BsFillSendFill className="text-white" />
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full message-wrapper overflow-auto h-[90vh] pt-8 pb-32 px-8 ">
              {roomInfo?.messages?.map((item) =>
                item.sender === user._id ? (
                  <Message key={item._id} own={true} content={item} />
                ) : (
                  <Message key={item._id} own={false} content={item} />
                )
              )}
              {newMessages?.map((item) =>
                item.userID === user._id ? (
                  <Message
                    key={crypto.randomUUID()}
                    own={true}
                    content={item}
                  />
                ) : (
                  <Message
                    key={crypto.randomUUID()}
                    own={false}
                    content={item}
                  />
                )
              )}
            </div>
          </div>
        </>
      ) : (
        <Image
          src={"/images/bg.png"}
          alt="bg"
          width={1000}
          height={1000}
          className="absolute -z-20 w-full h-full object-cover"
        />
      )}
    </div>
  );
}
