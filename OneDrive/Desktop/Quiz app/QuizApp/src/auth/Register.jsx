


function Register({ setPage }) {
  function Store() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      alert("All fields required");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Successfully Registered");
    setPage("login");
  }

  return (
    <div>
      <h1>Register</h1>
      <input id="name" placeholder="Name" />
      <br />
      <input id="email" placeholder="Email" />
      <br />
      <input id="password" placeholder="Password" />
      <br />
      <button onClick={Store}>Register</button>
    </div>
  );
}

export default Register;
