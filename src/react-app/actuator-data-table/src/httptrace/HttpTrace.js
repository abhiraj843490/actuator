import React, { useState, useEffect } from "react";
import springboot from "../api/springboot";
import { AppProvider, Pagination } from "@shopify/polaris";
import "./httptrace.css";
import Widgets from "../widgets/Widgets";

const HttpTrace = () => {
  
  const [httpres, setHttpres] = useState([]);
  const [page, setPage] = useState(1);

  
  // const types = ["status:200", "status:404", "status:400", "status:500"];
  

  const httptrace = async () => {
    try {
      const response = await springboot.get("/actuator/httpexchanges");
      setHttpres(response.data.exchanges);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    httptrace();
  }, []);

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
  

  return (
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
                  <td>{(user.timeTaken.split("PT"))}</td> 
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
  );
};

export default HttpTrace;
