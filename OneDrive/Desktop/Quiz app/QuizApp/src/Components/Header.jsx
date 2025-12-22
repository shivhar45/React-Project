
import React from 'react'
import Home from './Home'

function Header({ setPage }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px'
      }}
    >
      <h1 style={{ fontSize: 30 }}>QUIZ APP</h1>

      <nav onClick={() => setPage('home')}>Home</nav>
      <nav onClick={() => setPage('test')}>Test</nav>
      <nav onClick={() => setPage('result')}>Result</nav>
      <nav onClick={() => setPage('logout')}>Logout</nav>
    </div>
  )
}

export default Header
