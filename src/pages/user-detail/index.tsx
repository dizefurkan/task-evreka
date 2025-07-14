import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import {
  fakeUsers,
  LS_USERS,
  type User,
  type Users,
} from "../user-list/useUserList";
import UserCard from "../../components/user-card";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function UserDetail() {
  const [isReady, setReady] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    link.crossOrigin = "";

    const handleLoad = () => {
      setReady(true);
    };

    const handleError = () => {
      alert("An error occured when loading Leaflet.css");
    };

    link.addEventListener("load", handleLoad);
    link.addEventListener("error", handleError);

    document.head.appendChild(link);

    return () => {
      link.removeEventListener("load", handleLoad);
      link.removeEventListener("error", handleError);
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const getSavedUsersData = () => {
      const lsData = localStorage.getItem(LS_USERS) || "[]";
      const parsedData: Users = JSON.parse(lsData);

      return parsedData;
    };

    const users = fakeUsers.concat(getSavedUsersData());

    const _user = users.find((user) => user.id === id);

    if (!_user) {
      navigate("/");
      return;
    }
    setUser(_user);
    setLoading(false);
  }, [isReady]);

  if (!isReady) return null;
  if (isLoading) return <div>Loading...</div>;
  if (!user) return null;

  const position = {
    lat: user.coordinates.latitude,
    lng: user.coordinates.longitude,
  };
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <NavLink to="/">Go Back To List Page</NavLink>
      </div>
      <UserCard
        style={{
          width: "100%",
          margin: "auto",
          maxWidth: "500px",
        }}
        user={user}
      />
      <MapContainer
        style={{ width: "100%", height: "300px", marginTop: "24px" }}
        center={position}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default UserDetail;
