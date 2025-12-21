import React, { useMemo, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import { getInitials } from "../utils";

export default function Dashboard({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);

  const totalUsers = users.length;

  // Users per day
  const perDay = useMemo(() => {
    const map = {};
    users.forEach(u => {
      const date = new Date(u.createdAt).toISOString().slice(0, 10);
      map[date] = (map[date] || 0) + 1;
    });
    return Object.entries(map).map(([date, count]) => ({ date, count }));
  }, [users]);

  // Avatar distribution
  const avatarData = [
    { name: "With Avatar", value: users.filter(u => u.avatar).length },
    { name: "Without Avatar", value: users.filter(u => !u.avatar).length }
  ];
  const COLORS = ["#8884d8", "#82ca9d"];

  return (
    <div className="dashboard">
      <h2>📊 Dashboard</h2>

      {/* Info Tile */}
      <div className="tiles">
        <div className="card">Total Users: {totalUsers}</div>
      </div>

      {/* Charts */}
      <div className="charts">
        <div className="chart">
          <h3>Users Created Per Day</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={perDay}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h3>Avatar Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={avatarData}
                dataKey="value"
                nameKey="name"
                cx="50%" cy="50%"
                outerRadius={80}
                label
              >
                {avatarData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* User List */}
      <div className="userlist">
        <h3>User List</h3>
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} onClick={() => setSelectedUser(u)}>
                <td>
                  {u.avatar ? (
                    <img src={u.avatar} alt={u.name} width={40} height={40} style={{ borderRadius: "50%" }} />
                  ) : (
                    <div className="avatar-fallback">{getInitials(u.name)}</div>
                  )}
                </td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal with Cross Close Button */}
      {selectedUser && (
        <div className="modal" onClick={() => setSelectedUser(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Cross Close Button */}
            <button className="close-btn" onClick={() => setSelectedUser(null)}>
              &times;
            </button>

            {selectedUser.avatar ? (
              <img
                src={selectedUser.avatar}
                alt={selectedUser.name}
                width={100}
                height={100}
                style={{ borderRadius: "50%" }}
              />
            ) : (
              <div className="avatar-fallback big">
                {getInitials(selectedUser.name)}
              </div>
            )}
            <h2>{selectedUser.name}</h2>
            <p><b>Email:</b> {selectedUser.email}</p>
            <p><b>Role:</b> {selectedUser.role}</p>
          </div>
        </div>
      )}
    </div>
  );
}
