import Chat from "@/components/Chat"
import HomeApp from '@/components/HomeApp'
import { authUser } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const user = await authUser();

  if (!user) {
    redirect('/login')
  }
  return (
    <div className=" h-dvh ">
    <Chat  full={true} />
    </div>
  
  )
}
