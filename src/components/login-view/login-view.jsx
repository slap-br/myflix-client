import React from "react";
import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      user: username,
      secret: password
    };

    fetch(
      `https://smclub.herokuapp.com/login?Username=${username}&Password=${password}`,
      {
        method: "POST"
      }
    )
      .then((response) => response.json(data))
      .then((data) => {
        console.log("login response: ", data);
        if (data.user) {
          console.log("user", data.user);
          console.log("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something is ERRADO!");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit"> Submit </button>
    </form>
  );
};
