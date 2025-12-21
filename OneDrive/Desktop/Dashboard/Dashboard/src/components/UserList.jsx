import React, { useState, useMemo } from "react";
import UserModal from "./UserModal";
import { getInitials } from "../utils";

export default function UserList({ users }) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const [selectedUser, setSelectedUser] = useState(null);

  const filtered = useMemo(() => {
    let list = users.filter(
      u =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "date") list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return list;
  }, [users, search, sort]);

  const perPage = 10;
  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  return (
    <div className="userlist">
      <h2>👥 Users</h2>
      <input
        placeholder="Search by name or email"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="date">Sort by Date</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Avatar</th><th>Name</th><th>Email</th><th>Created</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(u => (
            <tr key={u.id} onClick={() => setSelectedUser(u)}>
              <td>
                {u.avatar ? (
                  <img src={u.avatar} alt={u.name} width="40" />
                ) : (
                  <div className="avatar-fallback">{getInitials(u.name)}</div>
                )}
              </td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{new Date(u.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Prev</button>
        <span>{page}</span>
        <button
          disabled={start + perPage >= filtered.length}
          onClick={() => setPage(p => p + 1)}
        >Next</button>
      </div>

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}
