import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import PestControlIcon from "@mui/icons-material/PestControl";
import "./Widget.css";

const Widgets = ({ type, server, time }) => {
  let data;
  let widgetColor;
  

  switch (type) {
    case "status:200":
      if (time && time.length > 0 && time[0].response.status == 200) {
        const date = new Date(time[0].timestamp).toLocaleString(undefined, {
          timeZone: "Asia/Kolkata",
        });

        data = {
          title: "200 Response",
          icon: <CheckCircleIcon />,
          update: "Updated",
          time: date,
          value: server,
        };
        widgetColor = "green";
      } else {
        let date;
        for (var i = 0; i < time.length; i++) {
          if (time[i].response.status === 200) {
            date = new Date(time[0].timestamp).toLocaleString(undefined, {
              timeZone: "Asia/Kolkata",
            });
            
          }
        }
        data = {
          title: "200 Response",
          icon: <CheckCircleIcon />,
          update: "Updated",
          time: date,
          value: server,
        };
        widgetColor = "green";
      }
      break;
    case "status:404":
      if (time && time.length > 0 && time[0].response.status == 404) {
        const date = new Date(time[0].timestamp).toLocaleString(undefined, {
          timeZone: "Asia/Kolkata",
        });

        data = {
          title: "404 Response",
          icon: <ErrorIcon />,
          update: "Updated",
          time: date,
          value: server,
        };
        widgetColor = "blue";
      } else {
        let date;
        for (var i = 0; i < time.length; i++) {
          if (time[i].response.status === 404) {
            date = new Date(time[0].timestamp).toLocaleString(undefined, {
              timeZone: "Asia/Kolkata",
            });
            
          }
        }
        data = {
          title: "404 Response",
          icon: <ErrorIcon />,
          update: "Updated",
          time: date,
          value: server,
        };
        widgetColor = "blue";
      }
      break;

    case "status:400":
      if (time && time.length > 0 && time[0].response.status == 400) {
        const date = new Date(time[0].timestamp).toLocaleString(undefined, {
          timeZone: "Asia/Kolkata",
        });

        data = {
          title: "400 Response",
          icon: <WarningIcon />,
          update: "Updated",
          time: date,
          value: server,
        };
        widgetColor = "orange";
      } else {
        let date;
        for (var i = 0; i < time.length; i++) {
          if (time[i].response.status === 400) {
            date = new Date(time[0].timestamp).toLocaleString(undefined, {
              timeZone: "Asia/Kolkata",
            });
            
          }
        }
        data = {
          title: "400 Response",
          icon: <WarningIcon />,
          update: "Updated",
          time: date,
          value: server,
        };
        widgetColor = "orange";
      }
      break;

    case "status:500":
      if (time && time.length > 0 && time[0].response.status == 500) {
        const date = new Date(time[0].timestamp).toLocaleString(undefined, {
          timeZone: "Asia/Kolkata",
        });

        data = {
          title: "500 Response",
          icon: <PestControlIcon />,
          update: "Updated",
          time: date,
          value: server,
        };
        widgetColor = "red";
      } else {
        let date;
        for (var i = 0; i < time.length; i++) {
          if (time[i].response.status === 500) {
            date = new Date(time[0].timestamp).toLocaleString(undefined, {
              timeZone: "Asia/Kolkata",
            });
            
          }
        }
        data = {
          title: "500 Response",
          icon: <PestControlIcon />,
          update: "Updated",
          time: date,
          value: server,
        };
        widgetColor = "red";
      }
      break;
    default:
      break;
  }

  return (
    <div className={`widget ${widgetColor}`}>
      <div className="left">
        <span className="title">
          {data.icon}
          {data.title}
        </span>
        <span className="update">
          {data.update}: {data.time}
        </span>
      </div>

      <div className="right">
        <span className="title" style={{ fontSize: "24px" }}>
          {data.value}
        </span>
      </div>
    </div>
  );
};

export default Widgets;
