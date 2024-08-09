"use client";
import Chat from "@/components/Chat";
import HomeApp from "@/components/HomeApp";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();


   const userInfo = async () => {
    const res = await fetch("http://localhost:4002/auth/me", {
      credentials: "include",
    });
    const data = await res.json();
  
    if (res.status === 200) {
      setUser(data)
    }else{
      router.replace('/login')
    }
  };
  



  useEffect(() => {
  userInfo()
    
  }, []);

  return (
    <div className="flex justify-between h-dvh overflow-hidden">
      <HomeApp />
      <Chat full={false} />
    </div>
  );
}
