import { TbSearch } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

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
           <TbSearch/>
           <BsThreeDotsVertical/>
          </div>
      </div>
      <div className="h-[90vh]">
        <Image src={'/images/bg.png'} alt='bg' width={1000}  height={1000}
        className="w-full h-full"/>
      </div>
    </div>
  );
}
