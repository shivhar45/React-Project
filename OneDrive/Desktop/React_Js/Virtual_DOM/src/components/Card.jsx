import React from 'react';

function Card(props) {
  console.log("Card props:", props); // ✅ This will now log the props

  const { channel, someObj } = props;

  return (
    <div className="p-4 border rounded shadow bg-green">
      <h2 className="text-lg font-semibold">Channel: {channel || "No channel"}</h2>
      <p>User: {someObj?.username || "No user"}</p>
      <p>Age: {someObj?.age || "N/A"}</p>
    </div>
  );
}

export default Card;