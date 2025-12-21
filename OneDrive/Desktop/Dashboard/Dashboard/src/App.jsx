import React, { useEffect, useState } from "react";
import { fetchUsers } from "./api";
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers).catch(console.error);
  }, []);

  return (
    <div className="app">
      <h1>📌 User Dashboard</h1>
      <Dashboard users={users} />
      <UserList users={users} />
    </div>
  );
}

export default App;
