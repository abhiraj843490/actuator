import React, { useState, useEffect } from "react";
import axios from "axios";
import {DescriptionList} from '@shopify/polaris';

function Health() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/health"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="metrics">
    <DescriptionList
      items={[
        {
          term: 'Status',
          description: data.status,
        },
        {
            term: 'Disk Space',
            description: data.diskSpace,
          },
      ]}
    />
    </div>
  );
} export default Health;
