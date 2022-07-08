import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import HomePage from "./HomePage";

//getting the code from the URI
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? (
    <div>
      <HomePage code={code} />
    </div>
  ) : (
    <Login />
  );
}

export default App;
