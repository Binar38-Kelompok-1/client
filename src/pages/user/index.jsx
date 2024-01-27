import React, { useState, useEffect } from "react";
import axios from "axios";

const UserIndex = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUserName = async () => {
      try {
        const tokenCookie = document.cookie
          .split("; ")
          .find((row) => row.startsWith("authorization="));

        if (tokenCookie) {
          const token = tokenCookie.split("=")[1];

          const response = await axios.get("http://54.225.11.99/user", {
            withCredentials: true,
            headers: {
              Authorization: token,
            },
          });

          const { nama } = response.data.data;
          setUserName(nama);
        } else {
          console.error("Authorization token not found");
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching user data:",
          error.message
        );
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

      <h1>Selamat Datang, {userName}!</h1>
    </>
  );
};

export default UserIndex;
