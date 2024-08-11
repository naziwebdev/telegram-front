import React from "react";

export default function MediaMessage({ own, content }) {
    console.log(content , 'content')
  const sendTime = `${new Date(content?.createdAt).getHours()}:${new Date(
    content?.createdAt
  ).getMinutes()}`;
  const now = `${new Date().getHours()}:${new Date().getMinutes()}`;

  return (
    <div className="">
      <div
        className={`flex items-center gap-x-2 mt-2 ${
          own === true ? "justify-end" : ""
        }`}
      >
        <p
          className={`${
            own === false ? "order-4" : ""
          } text-white font-roboto-bold`}
        >
          {content?.sender?.username}
        </p>
        {content?.sender?.avatar ? (
          <img
            src={`http://localhost:4002${content?.sender?.avatar}`}
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div
            alt="avatar"
            className="flex justify-center text-xl items-center text-white w-12 h-12 rounded-full bg-orange-400"
          >
            {content?.sender?.username.slice(0, 2)}
          </div>
        )}
      </div>
      <div
        className={`w-2/3 xs:w-2/4 h-auto p-2.5 mt-2 rounded-xl break-words  bg-purple-600 text-white font-vazir ${
          own === true ? "ms-auto bg-violet-300 text-black" : ""
        }`}
      >
        <img src={`http://localhost:4002/${content.path}`} 
        className="w-full h-60 object-cover" />
        <p className="text-right mt-1 text-sm text-zinc-300">
          {sendTime == "NaN:NaN" ? now : sendTime}
        </p>
      </div>
    </div>
  );
}
