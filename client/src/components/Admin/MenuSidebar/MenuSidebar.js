import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import { HomeOutlined } from "@ant-design/icons";

import "./MenuSidebar.scss";
import MenuItem from "antd/lib/menu/MenuItem";

function MenuSidebar(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;
  return (
    <Sider className="admin-siderbar" collapsed={menuCollapsed}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[location.pathname]} //Location.pathname me da la ruta actual
      >
        <MenuItem className="customclass" key="/admin">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to={"/admin"}
          >
            <HomeOutlined />
            <span className="customWord">Home</span>
          </Link>
        </MenuItem>
        <MenuItem className="customclass" key="/admin/users">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to={"/admin/users"}
          >
            <Icon type="user" />
            <span className="nac-text">Usuarios</span>
          </Link>
        </MenuItem>
        <MenuItem className="customclass" key="/admin/menu">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to={"/admin/menu"}
          >
            <Icon type="menu" />
            <span className="nac-text">Menu</span>
          </Link>
        </MenuItem>
        <MenuItem className="customclass" key="/admin/courses">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to={"/admin/courses"}
          >
            <Icon type="book" />
            <span className="nac-text">Cursos</span>
          </Link>
        </MenuItem>
        <MenuItem className="customclass" key="4">
          <Icon type="menu" />
          <span className="">Salidas</span>
        </MenuItem>
      </Menu>
    </Sider>
  );
}
export default withRouter(MenuSidebar);
