import Header from "./Header";
function Home({ setPage }) {

  return (
    <div>
      <Header />
      <h1>Test</h1>

      <button onClick={() => setPage("html")}>HTML</button>
      <button onClick={() => setPage("css")}>CSS</button>
      <button onClick={() => setPage("js")}>JS</button>
    </div>
  );
}

export default Home;
