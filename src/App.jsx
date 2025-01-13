import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h2>Created by Naira</h2>
      </footer>
    </>
  );
}

export default App;
