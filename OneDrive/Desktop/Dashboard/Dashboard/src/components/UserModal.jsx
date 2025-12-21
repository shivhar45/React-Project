import React from "react";
import { getInitials } from "../utils";

export default function UserModal({ user, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <h3>{user.name}</h3>
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} width="100" />
        ) : (
          <div className="avatar-fallback big">{getInitials(user.name)}</div>
        )}
        <p>Email: {user.email}</p>
        <p>Created: {new Date(user.createdAt).toLocaleString()}</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
}
