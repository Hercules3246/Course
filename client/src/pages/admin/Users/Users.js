import React, { useState, useEffect } from "react";
import { getAccesTokenApi } from "../../../api/auth";
import { getUsersActiveApi } from "../../../api/user";
import ListUsers from "../../../components/Admin/Users";
import "./Users.scss";
export default function Users() {
  const [usersActive, setUserActive] = useState([]);
  const [usersInactive, setUserInactive] = useState([]);
  const token = getAccesTokenApi();
  useEffect(() => {
    //este metodo se ejecuta, justo despues de que el componente ah sido montado
    getUsersActiveApi(token, true).then((response) => {
      setUserActive(response.users); //lo que viene de la base de datos, se lo pasamos a nuestro estado
    });
    getUsersActiveApi(token, false).then((response) => {
      setUserInactive(response.users); //lo que viene de la base de datos, se lo pasamos a nuestro estado
    });
  }, [token]);

  return (
    <div className="users">
      <ListUsers usersActive={usersActive} usersInactive={usersInactive} />
    </div>
  );
}
