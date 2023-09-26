import React, { useState, useEffect } from "react";
import springboot from "../api/springboot";
import { AppProvider, Pagination } from "@shopify/polaris";
import "./home.css";
import Widgets from "../widgets/Widgets";
import Charts from "../charts/Charts";
import Feature from "../featured/Feature";
import NavBar from "../navBar/NavBar";


const Home = () => {
  const types = ["status:200", "status:404", "status:400", "status:500"];
const [servers, setServers] = useState([]);

  const [httpres, setHttpres] = useState([]);
  const [page, setPage] = useState(1);

  const httptrace = async () => {
    try {
      const response = await springboot.get("/actuator/httpexchanges");
      setHttpres(response.data.exchanges);
      
    } catch (error) {
      console.error(error);
    }
  };


  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < httpres.length) {
      setPage(page + 1);
    }
  };

  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const checkServerRes = async () => {
    try {
      const serverData = [];
      for (const type of types) {
        let totalCount = 0;
        try {
          const response = await springboot.get(
            "/actuator/metrics/http.server.requests?tag=" + type
          );
          totalCount = response.data.measurements[0].value;
        } catch (error) {
          
          if (error.response.status === 404) {
            totalCount = 0;
          } else {
            console.log(error);
          }
        }
        serverData.push(totalCount);
      }
      setServers(serverData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkServerRes();
    httptrace();
  }, []);

  

  return (
    <div className="home">
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          {types.map((type, index) => (
            <Widgets key={type} type={type} server={servers[index]} time={httpres} />
          ))}
        </div>

        <div className="charts">
          <Charts types={types} server={servers} />
          <Feature types={types} server={servers} />
        </div>



        <div className="trace">
          <AppProvider>
            <h2 className="text-center" style={{ fontWeight: "bold" }}>
              HTTP TRACE
            </h2>
            <br />
            <div className="text-center">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Time Stamp</th>
                    <th>Method</th>
                    <th>Time taken(sec)</th>
                    <th>Status</th>
                    <th>URI</th>
                  </tr>
                </thead>
                <tbody>
                  {httpres.length > 0 &&
                    httpres.slice(startIndex, endIndex).map((user, index) => (
                      <tr key={index}>
                        <td>{startIndex + index + 1}</td>
                        <td>
                          {new Date(user.response.headers.Date).toLocaleString(
                            undefined,
                            { timeZone: "Asia/Kolkata" }
                          )}
                        </td>
                        <td>{user.request.method}</td>
                        <td>{user.timeTaken.split("PT") }</td>
                        <td>{user.response.status}</td>
                        <td>{user.request.uri}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <Pagination
                hasPrevious={page > 1}
                onPrevious={handlePrevious}
                hasNext={endIndex < httpres.length}
                onNext={handleNext}
              />
            </div>
          </AppProvider>
        </div>
      </div>
    </div>
  );
};

export default Home;
