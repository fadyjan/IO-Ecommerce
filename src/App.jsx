import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/appRouter";
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
