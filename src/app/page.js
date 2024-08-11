"use client";
import Chat from "@/components/Chat";
import HomeApp from "@/components/HomeApp";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import IO from "socket.io-client";

const socket = IO("http://localhost:4002");

export default function Home() {
  const [user, setUser] = useState([]);
  const [namespaces, setNamespaces] = useState(null);
  const [namespaceSocket, setNamespaceSocket] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [roomInfo, setRoomInfo] = useState({});
  const [newMessage, setNewMessage] = useState({});

  const router = useRouter();

  useEffect(() => {
    socket.on("namespaces", (namespaces) => {
      setNamespaces(namespaces);
      getNamespacesRoom(namespaces[0].href);
    });
  }, []);

  const getNamespacesRoom = (namespaceHref) => {
    if (namespaceSocket) namespaceSocket.close();
    setNamespaceSocket(IO.connect(`http://localhost:4002${namespaceHref}`));
  };

  useEffect(() => {
    namespaceSocket?.on("rooms", (rooms) => {
      setRooms(rooms);
    });
  }, [namespaceSocket]);

  const getRoomInfo = (room) => {
    namespaceSocket?.emit("joining", room.title);
    getMessage();

    namespaceSocket.off("roomInfo");
    namespaceSocket.on("roomInfo", (data) => {
      setRoomInfo(data);
    });
  };

  const sendMessage = (message, roomName, userID) => {
    namespaceSocket.emit("newMsg", { message, roomName, userID });
  };

  const getMessage = () => {
    namespaceSocket.on("confirmMsg", (data) => {
      setNewMessage(data);
    });
  };

  const userInfo = async () => {
    const res = await fetch("http://localhost:4002/auth/me", {
      credentials: "include",
    });
    const data = await res.json();

    if (res.status === 200) {
      setUser(data);
    } else {
      router.replace("/login");
    }
  };

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <div className="flex justify-between h-dvh overflow-hidden">
      <HomeApp
        namespaces={namespaces}
        getNamespacesRoom = {getNamespacesRoom}
        rooms={rooms}
        getRoomInfo={getRoomInfo}
      />
      <Chat
        full={false}
        roomInfo={roomInfo}
        sendMessage={sendMessage}
        user={user}
        newMessage={newMessage}
      />
    </div>
  );
}
