import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <h1>This is the homepage</h1>,
        path: "/",
      },
      {
        element: (
          <>
            <h1>This is the login page</h1>
            <form>
              <label>Username</label>
              <input type="text" />
              <button>Submit</button>
            </form>
          </>
        ),
        path: "/login",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
