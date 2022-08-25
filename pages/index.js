import Head from "next/head";
import { useState } from "react";
import axios from "axios";
export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const addUser = async (e) => {
    e.preventDefault();
    const response = await axios.post("api/addUser", {
      username: username,
      password: password,
    });
    console.log(response.data);
  };
  return (
    <div>
      <Head>
        <title>User Add</title>
      </Head>
      <input
        placeholder="Username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={addUser}>Create User</button>
    </div>
  );
}
