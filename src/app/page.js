import Chat from "@/components/Chat";
import HomeApp from "@/components/HomeApp";

export default function Home() {
  return (
    <div className="flex justify-between h-dvh">
      <HomeApp />
      <Chat />
    </div>
  );
}
