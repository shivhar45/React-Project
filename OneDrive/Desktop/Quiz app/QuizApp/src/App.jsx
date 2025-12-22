import { useState } from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./Components/Home";
import Header from "./Components/Header";
import HTML from "./Home/HTML";
import CSS from "./Home/CSS";
import JS from "./Home/JS";
import "./App.css";

function App() {
  const [page, setPage] = useState("register");

  return (
    <>
      {page === "register" && <Register setPage={setPage} />}
      {page === "login" && <Login setPage={setPage} />}
      {page === "home" && <Home setPage={setPage} />}

      {page === "html" && (
        <div>
          <Header setPage={setPage} />
          <HTML />
        </div>
      )}

      {page === "css" && (
        <div>
          <Header setPage={setPage} />
          <CSS />
        </div>
      )}

      {page === "js" && (
        <div>
          <Header setPage={setPage} />
          <JS />
        </div>
      )}
    </>
  );
}

export default App;

