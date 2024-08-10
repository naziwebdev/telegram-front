"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbSearch } from "react-icons/tb";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home({ namespaces, rooms , getRoomInfo }) {
  const [mainNamespace, setMainNamespace] = useState(null);
 console.log(rooms)

  useEffect(() => {
    namespaces !== null && setMainNamespace(namespaces[0]?.title);
  }, [namespaces]);

  return (
    <div className="flex-1 bg-zinc-900 h-dvh overflow-y-auto overflow-x-hidden">
        <div className="flex justify-between items-center gap-x-5 xl:gap-x-10 p-5">
          <GiHamburgerMenu className="text-white text-4xl items-center" />
          <div className="flex justify-between items-center gap-x-5 p-2 w-[80%] bg-white rounded-full">
            <TbSearch className="text-2xl" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none w-full"
            />
          </div>
        </div>
        <ul className="flex overflow-x-auto overflow-y-hidden items-center gap-x-5 text-lg text-white mt-10 font-roboto-reg pb-3 border-b-4 border-b-black">
          {namespaces?.map((item) => (
            <li
              key={item._id}
              className={`ps-5 ${
                item.title === mainNamespace ? "marker text-purple-600" : ""
              } cursor-pointer`}
              onClick={() => setMainNamespace(item.title)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <ul className="p-5 [&>*]:pt-2 [&>*]:cursor-pointer">
          {rooms?.map((item) => (
            <li key={item._id} className="flex justify-between items-center "
            onClick={() => getRoomInfo(item)}>
              <div className="flex justify-between items-center gap-x-4">
                {item?.image ?
                <img
                  src={`http://localhost:4002${item?.image}`}
                  alt="avatar"
                  className="w-16 h-16 rounded-full object-cover"
                />

                :
                <div
                alt="avatar"
                className="flex justify-center text-xl items-center text-white w-16 h-16 rounded-full bg-purple-400"
              >{item.title.slice(0,2)}</div>


}
                <div className="text-white">
                  <p className="text-lg font-roboto-bold">{item.title}</p>
                  <p className="font-roboto-reg">
                  {item?.messages[item?.messages.length - 1]?.sender?.username} : {' '}
                    <span className="text-zinc-400 font-vazir">
                     {item?.messages[item?.messages.length - 1]?.message}
                    </span>
                  </p>
                </div>
              </div>
              <div className="">
                <p className="text-zinc-400 text-sm">14:24</p>
                <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
                  76
                </p>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
}
