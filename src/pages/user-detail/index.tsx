import { NavLink } from "react-router";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import UserCard from "../../components/user-card";

import useUserDetail from "./useUserDetail";

function UserDetail() {
  const { isReady, isLoading, user } = useUserDetail();

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
