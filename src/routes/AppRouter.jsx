import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeClient from "../pages/Client/Home/Home";

import HomeAdmin from "../pages/Admin/Home/Page";

import Login from "../auth/Login";
import Cookies from "js-cookie";

import Convocatoria from "../pages/Admin/Convocatoria/Page";
import Page_Eleccion from "../pages/Admin/Eleccion/Page";
import Create_Eleccion from "../pages/Admin/Eleccion/Sub/Create_Eleccion";
import Page_elecc from "../pages/Admin/Elecc/Page";
import Page_Frente from "../pages/Admin/Frente/Page";
import Page_Mesas_Jurados from "../pages/Admin/Mesas_Jurados/Page";
import Create_Mesas_Jurados from "../pages/Admin/Mesas_Jurados/Sub/Create_Eleccion";
export const AppRouter = () => {
  const authToken = Cookies.get("token");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeClient />} />
        <Route
          path="/login"
          element={authToken ? <Navigate to="/admin" /> : <Login />}
        />
        <Route path="/admin/eleccion" element={<Page_Eleccion />} />

        <Route path="/admin/eleccion/create" element={<Create_Eleccion />} />
        <Route
          path="/admin/mesas-jurados/create"
          element={<Create_Mesas_Jurados />}
        />
        <Route path="/admin/convocatoria" element={<Convocatoria />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/elecc" element={<Page_elecc />} />
        <Route path="/admin/mesas-jurados" element={<Page_Mesas_Jurados />} />
        <Route path="/admin/frente" element={<Page_Frente />} />
      </Routes>
    </Router>
  );
};
