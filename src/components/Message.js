import React from 'react'

export default function Message({own}) {
  return (
    <div className={`w-1/2 xs:w-1/3 h-auto p-2.5 mt-2 rounded-xl break-words  bg-purple-600 text-white font-vazir ${own === true ? 'ms-auto bg-violet-300 text-black' : ''}`}>
    messageBoxhjvgfc,jhkgjlk.m,nbvcxfjdfkhgjhmn bvcjhgcfkhjmnjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
    jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
    <p className="text-right mt-1 text-sm text-zinc-300">12:34</p>
  </div>
  )
}
