import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

export default function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const basename = baseUrl === "/" ? undefined : baseUrl.replace(/\/$/, "");

  return (
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  );
}
