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
  const [userOnlineCount, setUserOnlineCount] = useState(null);
  const [isTypingInfo, setIsTypingInfo] = useState({});
  const [mediaInfo, setMediaInfo] = useState({});
  const [fullScreenChat, setFullScreenChat] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [locationInfo,setLocationInfo] = useState({})
  const router = useRouter();

  useEffect(() => {
    fetch(
      "https://api.ipgeolocation.io/ipgeo?apiKey=bb4beb4184bd466faa56de72a9144ac0"
    )
      .then((response) => response.json())
      .then((data) => {
        setUserLocation(data);
      });
  }, []);

  useEffect(() => {
    socket.on("namespaces", (namespaces) => {
      setNamespaces(namespaces);
      getNamespacesRoom(namespaces[0].href);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to Socket.IO server!");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from Socket.IO server!");
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
    getOnlineUserCount();
    confirmIsTyping();
    confirmFile();
    confirmLocation()

    namespaceSocket.off("roomInfo");
    namespaceSocket.on("roomInfo", (data) => {
      setRoomInfo(data);
    });
  };

  const sendMessage = (message, roomName, userID) => {
    namespaceSocket.emit("newMsg", { message, roomName, userID });
  };

  const getMessage = () => {
    namespaceSocket.off("confirmMsg");
    namespaceSocket.on("confirmMsg", (data) => {
      setNewMessage(data);
    });
  };

  const getOnlineUserCount = () => {
    namespaceSocket.on("onlineUsers", (data) => {
      setUserOnlineCount(data);
    });
  };

  const detectIsTyping = (userID, roomName, isTyping) => {
    namespaceSocket?.emit("isTyping", { userID, roomName, isTyping });
  };

  const confirmIsTyping = () => {
    namespaceSocket?.on("isTyping", (data) => {
      setIsTypingInfo(data);
    });
  };

  const sendFile = (filename, sender, file, roomName) => {
    namespaceSocket?.emit("newMedia", { filename, sender, file, roomName });
  };

  const confirmFile = () => {
    namespaceSocket.off("confirmMedia");
    namespaceSocket?.on("confirmMedia", (data) => {
      setMediaInfo(data);
    });
  };

  const sendLocation = (sender, roomName) => {
    if (userLocation !== null) {
      const location = {
        x: userLocation?.longitude,
        y: userLocation?.latitude,
      };
      namespaceSocket?.emit("newLocation", { location, sender, roomName });
    }
  };

  const confirmLocation = () => {
    namespaceSocket?.on("confirmLocation" , data => {
      console.log(data)
    })
  }

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
        getNamespacesRoom={getNamespacesRoom}
        rooms={rooms}
        getRoomInfo={getRoomInfo}
        setFullScreenChat={setFullScreenChat}
      />
      <Chat
        roomInfo={roomInfo}
        sendMessage={sendMessage}
        user={user}
        newMessage={newMessage}
        userOnlineCount={userOnlineCount}
        detectIsTyping={detectIsTyping}
        isTypingInfo={isTypingInfo}
        sendFile={sendFile}
        sendLocation={sendLocation}
        mediaInfo={mediaInfo}
        fullScreenChat={fullScreenChat}
        setFullScreenChat={setFullScreenChat}
      />
    </div>
  );
}
