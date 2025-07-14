import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  fakeUsers,
  LS_USERS,
  type User,
  type Users,
} from "../user-list/useUserList";

function useUserDetail() {
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

  return { isReady, isLoading, user };
}

export default useUserDetail;
