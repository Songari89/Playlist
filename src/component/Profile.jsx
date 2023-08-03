import React, { useContext } from "react";
import { DarkModeContext } from "../hooks/DarkModeProvider";
import Avatar from "./Avatar";
import Avater from "./Avatar";

export default function Profile() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  return (
    <div className="profilecontainer">
      <Avatar
        image="https://as1.ftcdn.net/v2/jpg/02/78/77/54/1000_F_278775420_wW6XVuJzY3P1ti00amrj2bn71e84ogOa.jpg"
        name="Americano" isNew={false}
      />
      <Avatar
        image="https://as1.ftcdn.net/v2/jpg/00/92/07/36/1000_F_92073648_dCxoDTHhiEIoJLL8eJUIpdvowIoeiEQB.jpg"
        name="Latte" isNew={false}
      />
      <Avatar image="https://as1.ftcdn.net/v2/jpg/00/76/28/02/1000_F_76280226_kZcwOGwCrRPDB8IHS5HTZ8zqFjqJLWvw.jpg" name="tea" isNew={true} />
    </div>
  );
}
