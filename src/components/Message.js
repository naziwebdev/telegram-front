import React from "react";

export default function Message({ own, content }) {
  const sendTime = `${new Date(content?.createdAt).getHours()}:${new Date(
    content?.createdAt
  ).getMinutes()}`;
  const now = `${new Date().getHours()}:${new Date().getMinutes()}`;

  console.log(now, sendTime);
  return (
    <div
      className={`w-1/2 xs:w-1/3 h-auto p-2.5 mt-2 rounded-xl break-words  bg-purple-600 text-white font-vazir ${
        own === true ? "ms-auto bg-violet-300 text-black" : ""
      }`}
    >
      {content?.message}
      <p className="text-right mt-1 text-sm text-zinc-300">
        {sendTime == "NaN:NaN" ? now : sendTime}
      </p>
    </div>
  );
}
