import { useRouteError } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./ErrorPage.css";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <NavBar></NavBar>
      <div id="error-page">
        <label>404</label>
        <p id="NotFoundP">Page {error.statusText || error.message}</p>
      </div>
    </>
  );
}
