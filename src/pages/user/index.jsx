import React, { useState, useEffect } from "react";
import axios from "axios";

const UserIndex = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUserName = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authorization="))
          .split("=")[1];

        console.log(token);
        console.log("masuk <=====");
        const data = await axios.get("http://54.225.11.99/user", {
          withCredentials: true,
          headers: {
            Authorization: `${token}`,
          },
        });
        setUserName(data.data.data.nama);
        // console.log(data.data.data.nama);
      } catch (error) {
        console.log(error);
      }
    };
    getUserName();
  }, []);

  return (
    <>
      <style>
        {`
                    h1 {
                        text-align: center;
                        margin-top: 250px;
                        font-size: 50px;
                        font-weight: 700;
                    }
                `}
      </style>

      <h1>Selamat Datang, {userName} !</h1>
    </>
  );
};

export default UserIndex;
