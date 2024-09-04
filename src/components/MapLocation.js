"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapLocation({
  position,
  center,
  sender,
  own,
  createdAt,
}) {
  const sendTime = `${new Date(createdAt).getHours()}:${new Date(
    createdAt
  ).getMinutes()}`;
  
  const now = `${new Date().getHours()}:${new Date().getMinutes()}`;
  return (
    <>
      <div
        className={`flex items-center gap-x-2 mt-2 ${
          own === true ? "justify-end" : ""
        }`}
      >
        <p
          className={`${
            own === false ? "order-4" : ""
          } text-white font-roboto-bold`}
        >
          {sender?.username}
        </p>
        {sender?.avatar ? (
          <img
            src={`http://localhost:4002${sender?.avatar}`}
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div
            alt="avatar"
            className="flex justify-center text-xl items-center text-white w-12 h-12 rounded-full bg-orange-400"
          >
            {sender?.username.slice(0, 2)}
          </div>
        )}
      </div>

      <div
        className={`w-2/3 xs:w-2/4 h-auto p-2.5 mt-2 rounded-xl break-words  bg-purple-600 text-white font-vazir ${
          own === true ? "ms-auto bg-violet-300 text-black" : ""
        }`}
      >
        <MapContainer
          className="w-full h-[300px] rounded-lg"
          center={center}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>my location</Popup>
          </Marker>
        </MapContainer>
        <p className="text-right mt-1 text-sm text-zinc-300">
          {sendTime == "NaN:NaN" ? now : sendTime}
        </p>
      </div>
    </>
  );
}
