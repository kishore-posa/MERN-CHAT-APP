import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const { chats, setChats } = useState([]);

  const fetchEmployees = async () => {
    const { data } = await axios.get(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    setChats(data);
  };
  useEffect(() => {
    fetchEmployees();
  }, []);
  return <div></div>;
};

export default Chatpage;
