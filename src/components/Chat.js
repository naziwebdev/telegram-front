"use client";
import { TbSearch } from "react-icons/tb";
// import { FiPhone } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { BsFillSendFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import MediaMessage from "./MediaMessage";

import Image from "next/image";

export default function Chat({
  roomInfo,
  sendMessage,
  user,
  newMessage,
  userOnlineCount,
  detectIsTyping,
  isTypingInfo,
  sendFile,
  mediaInfo,
  fullScreenChat,
  setFullScreenChat,
}) {
  const [message, setMessage] = useState("");
  const [newMessages, setNewMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [mediaInfos, setMediaInfoes] = useState([]);

  const isTypingTimeout = useRef();

  useEffect(() => {
    if (newMessage.message) {
      setNewMessages((prev) => [...prev, newMessage]);
    }
  }, [newMessage]);

  useEffect(() => {
    if (mediaInfo.path) {
      setMediaInfoes((prev) => [...prev, mediaInfo]);
    }
  }, [mediaInfo]);

  const sendMessageHandler = (e) => {
    e.preventDefault();

    if (message.trim() !== "") {
      sendMessage(message, roomInfo?.title, user._id);
      setMessage("");
    }
  };

  useEffect(() => {
    detectIsTyping(user._id, roomInfo.title, isTyping);
  }, [isTyping]);

  return (
    <div
      className={`  ${
        fullScreenChat === false
          ? "w-0 sm:w-[60%] xmd:w-2/3"
          : "w-full sm:w-[60%] xmd:w-2/3"
      } h-full overflow-hidden ${fullScreenChat === true && "w-full"}`}
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
                  {isTypingInfo?.isTyping
                    ? `${isTypingInfo?.user} is Typing ...`
                    : `${userOnlineCount} users online`}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-4 xs:gap-x-8 cursor-pointer text-xl xs:text-2xl text-zinc-400">
              <BsThreeDotsVertical />
              <TbSearch />

              <FaArrowRight onClick={() => setFullScreenChat(false)} />
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
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (!isTyping) {
                      setIsTyping(true);
                    }

                    if (isTypingTimeout) {
                      clearTimeout(isTypingTimeout.current);
                    }

                    isTypingTimeout.current = setTimeout(() => {
                      setIsTyping(false);
                    }, 2000);
                  }}
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
                      onChange={(e) =>
                        sendFile(
                          e.target.files[0]?.name,
                          user._id,
                          e.target.files[0],
                          roomInfo.title
                        )
                      }
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
              {/* messages room */}
              {roomInfo?.messages?.map((item) =>
                item.sender._id === user._id ? (
                  <Message key={item._id} own={true} content={item} />
                ) : (
                  <Message key={item._id} own={false} content={item} />
                )
              )}
              {/* medias room */}
              {roomInfo?.medias?.map((item) =>
                item.sender._id === user._id ? (
                  <MediaMessage key={item._id} own={true} content={item} />
                ) : (
                  <MediaMessage key={item._id} own={false} content={item} />
                )
              )}
              {/* realtime messages */}
              {newMessages.length &&
                newMessages?.map((item) =>
                  item.roomName === roomInfo.title ? (
                    item.sender._id === user._id ? (
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
                  ) : (
                    ""
                  )
                )}

              {/* realtime medias */}
              {mediaInfos.length &&
                mediaInfos?.map((item) =>
                  item.roomName == roomInfo.title ? (
                    item?.sender?._id === user._id ? (
                      <MediaMessage key={item._id} own={true} content={item} />
                    ) : (
                      <MediaMessage key={item._id} own={false} content={item} />
                    )
                  ) : (
                    ""
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
