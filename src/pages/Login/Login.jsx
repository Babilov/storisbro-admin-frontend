import React, { useState } from "react";
import LoginForm from "../../components/Login/LoginForm";
import { API_URL } from "../../utils/constants";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}auth-admin/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(res);
      if (res.ok) {
        alert("Успешный вход");
      } else {
        alert("Ошибка входа");
      }
    } catch (err) {
      console.error(err);
      alert("Ошибка сети");
    }
  };

  return (
    <LoginForm
      setUsername={setUsername}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
}
