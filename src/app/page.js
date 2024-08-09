import Chat from "@/components/Chat";
import HomeApp from "@/components/HomeApp";
import { authUser } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await authUser();

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="flex justify-between h-dvh overflow-hidden">
      <HomeApp />
      <Chat full={false} />
    </div>
  );
}
