import "./navbar.css";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import StorageSharpIcon from "@mui/icons-material/StorageSharp";
import TableViewIcon from "@mui/icons-material/TableView";
import React, { useEffect, useState } from "react";
import springboot from "../api/springboot";

const NavBar = () => {
  const [server, setServer] = useState([]);

  const checkServerHealth = async () => {
    try {
      const health = await springboot.get("/actuator/health");

      setServer(health.data);
    } catch (error) {
      setServer("DOWN");
    }
  };
  useEffect(() => {
    checkServerHealth();
    // const interval = setInterval(() => checkServerHealth(), 800);
    // return () => {
    // clearInterval(interval);
    // };
  }, []);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            Server:
            <div className="server">
              {" "}
              {server.status ? server.status : server}
            </div>
          </div>

          <div className="item">
            <StorageSharpIcon className="icon" />
            DiskSpace free:
            <div className="server">
              {server.components && server.components.diskSpace
                ? (
                    server.components.diskSpace.details.free /
                    (1024 * 1024 * 1024)
                  ).toFixed(2)
                : 0}
            </div>
          </div>
          <div className="item">
            <TableViewIcon className="icon" />
            DB:
            {/* <div className="server">{ server.components.db.details.database} - {server.components.db.status} </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
