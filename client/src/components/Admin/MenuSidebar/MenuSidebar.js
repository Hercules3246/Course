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
            <span className="">Usuarios</span>
          </Link>
        </MenuItem>
        <MenuItem className="customclass" key="/admin/product">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to={"/admin/product"}
          >
            <Icon type="book" />
            <span className="">Producto</span>
          </Link>
        </MenuItem>
        <MenuItem className="customclass" key="3">
          <Icon type="menu" />
          <span className="">Entradas</span>
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
