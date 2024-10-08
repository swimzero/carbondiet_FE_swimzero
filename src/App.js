import "./App.css";
import SignUp from "./pages/SignUp";
import Dietary from "./pages/Dietary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/chat", element: <Chat /> },
]);

function App() {
  return (
    <div id="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
