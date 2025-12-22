
function Login({ setPage }) {
  function Next() {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const name = document.getElementById("name").value;
    const password = document.getElementById("Password").value;

    if (!storedUser) {
      alert("No user found, please register");
      setPage("register");
      return;
    }

    if (
      name === storedUser.name &&
      password === storedUser.password
    ) {
      alert("Login successful");
      setPage("home"); 
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder="name" id="name" />
      <br />
      <input type="password" placeholder="Password" id="Password" />
      <br />
      <button onClick={Next}>Login</button>
    </div>
  );
}

export default Login;
