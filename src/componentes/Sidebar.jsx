import { useState, useRef, useEffect } from "react";
import { api, apiUrl, endpoints } from "../../utils/api";

import { RiMoneyDollarCircleLine, RiFacebookLine, RiYoutubeLine, RiInstagramLine, RiTwitterLine, RiFilter3Line, RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const photo = localStorage.getItem("photo");
    return token && email && photo;
  };

  const signout = async () => {
    const token = localStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    try {
      await api.post(apiUrl + endpoints.signout, null, headers);
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("photo");
      navigate("/");
    } catch (error) {
      alert("¡Error al cerrar sesión!");
    }
  };

  return (
    <>

    </>
  );
};

export default Sidebar;
