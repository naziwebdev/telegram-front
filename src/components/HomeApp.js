import { GiHamburgerMenu } from "react-icons/gi";
import { TbSearch } from "react-icons/tb";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 bg-zinc-900 h-dvh overflow-y-auto overflow-x-hidden">
        <Link href={'/chat/8768'}>
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
        <li className="ps-5 marker text-purple-600 cursor-pointer">frontend</li>
        <li className="ps-5 cursor-pointer">backend</li>
        <li className="ps-5 cursor-pointer">ui/ux</li>
      </ul>
      <ul className="p-5 [&>*]:pt-2 [&>*]:cursor-pointer">
        <li className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
          <p className="text-lg font-roboto-bold">React-js</p>
          <p className="font-roboto-reg">
            Nazi : <span className="text-zinc-400 font-vazir"> ❤️سلام ممنون</span>
          </p>
          </div>
          </div>
          <div className="">
          <p className="text-zinc-400 text-sm">
            14:24
          </p>
          <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
            76
          </p>
          </div>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
          <p className="text-lg font-roboto-bold">React-js</p>
          <p className="font-roboto-reg">
            Nazi : <span className="text-zinc-400 font-vazir"> ❤️سلام ممنون</span>
          </p>
          </div>
          </div>
          <div className="">
          <p className="text-zinc-400 text-sm">
            14:24
          </p>
          <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
            76
          </p>
          </div>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
          <p className="text-lg font-roboto-bold">React-js</p>
          <p className="font-roboto-reg">
            Nazi : <span className="text-zinc-400 font-vazir"> ❤️سلام ممنون</span>
          </p>
          </div>
          </div>
          <div className="">
          <p className="text-zinc-400 text-sm">
            14:24
          </p>
          <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
            76
          </p>
          </div>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
          <p className="text-lg font-roboto-bold">React-js</p>
          <p className="font-roboto-reg">
            Nazi : <span className="text-zinc-400 font-vazir"> ❤️سلام ممنون</span>
          </p>
          </div>
          </div>
          <div className="">
          <p className="text-zinc-400 text-sm">
            14:24
          </p>
          <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
            76
          </p>
          </div>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
          <p className="text-lg font-roboto-bold">React-js</p>
          <p className="font-roboto-reg">
            Nazi : <span className="text-zinc-400 font-vazir"> ❤️سلام ممنون</span>
          </p>
          </div>
          </div>
          <div className="">
          <p className="text-zinc-400 text-sm">
            14:24
          </p>
          <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
            76
          </p>
          </div>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
          <p className="text-lg font-roboto-bold">React-js</p>
          <p className="font-roboto-reg">
            Nazi : <span className="text-zinc-400 font-vazir"> ❤️سلام ممنون</span>
          </p>
          </div>
          </div>
          <div className="">
          <p className="text-zinc-400 text-sm">
            14:24
          </p>
          <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
            76
          </p>
          </div>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
          <p className="text-lg font-roboto-bold">React-js</p>
          <p className="font-roboto-reg">
            Nazi : <span className="text-zinc-400 font-vazir"> ❤️سلام ممنون</span>
          </p>
          </div>
          </div>
          <div className="">
          <p className="text-zinc-400 text-sm">
            14:24
          </p>
          <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
            76
          </p>
          </div>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
          <p className="text-lg font-roboto-bold">React-js</p>
          <p className="font-roboto-reg">
            Nazi : <span className="text-zinc-400 font-vazir"> ❤️سلام ممنون</span>
          </p>
          </div>
          </div>
          <div className="">
          <p className="text-zinc-400 text-sm">
            14:24
          </p>
          <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
            76
          </p>
          </div>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
          <p className="text-lg font-roboto-bold">React-js</p>
          <p className="font-roboto-reg">
            Nazi : <span className="text-zinc-400 font-vazir"> ❤️سلام ممنون</span>
          </p>
          </div>
          </div>
          <div className="">
          <p className="text-zinc-400 text-sm">
            14:24
          </p>
          <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
            76
          </p>
          </div>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
          <p className="text-lg font-roboto-bold">React-js</p>
          <p className="font-roboto-reg">
            Nazi : <span className="text-zinc-400 font-vazir"> ❤️سلام ممنون</span>
          </p>
          </div>
          </div>
          <div className="">
          <p className="text-zinc-400 text-sm">
            14:24
          </p>
          <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
            76
          </p>
          </div>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
          <p className="text-lg font-roboto-bold">React-js</p>
          <p className="font-roboto-reg">
            Nazi : <span className="text-zinc-400 font-vazir"> ❤️سلام ممنون</span>
          </p>
          </div>
          </div>
          <div className="">
          <p className="text-zinc-400 text-sm">
            14:24
          </p>
          <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
            76
          </p>
          </div>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
          <p className="text-lg font-roboto-bold">React-js</p>
          <p className="font-roboto-reg">
            Nazi : <span className="text-zinc-400 font-vazir"> ❤️سلام ممنون</span>
          </p>
          </div>
          </div>
          <div className="">
          <p className="text-zinc-400 text-sm">
            14:24
          </p>
          <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
            76
          </p>
          </div>
        </li>
        <li className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-x-4">
          <img
            src="/images/bg.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-white">
          <p className="text-lg font-roboto-bold">React-js</p>
          <p className="font-roboto-reg">
            Nazi : <span className="text-zinc-400 font-vazir"> ❤️سلام ممنون</span>
          </p>
          </div>
          </div>
          <div className="">
          <p className="text-zinc-400 text-sm">
            14:24
          </p>
          <p className="flex justify-center items-center w-7 h-6 bg-purple-600 text-white rounded-full text-sm p-1 mt-3">
            76
          </p>
          </div>
        </li>
      </ul>
      </Link>
    </div>

  );
}
