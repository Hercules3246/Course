import React from "react";
import { Button, Icon, Layout } from "antd";
import { Link } from "react-router-dom";
import latraLogo from "../../../assets/img/png/Lastraico.bmp";
import "./MenuTop.scss";

import { logout } from "../../../api/auth";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  const redirect = Link;

  const logoutUser = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to={"/admin"}
        >
          <img
            className="menu-top__left-logo"
            src={latraLogo}
            alt="Representaciones Lastra"
          />
        </Link>
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={logoutUser}>
          <Icon type="poweroff"></Icon>
        </Button>
      </div>
    </div>
  );
}
