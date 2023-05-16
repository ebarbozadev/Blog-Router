import Menu from "componentes/Menu";
import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import Inicio from "paginas/Inicio";
import SobreMim from "paginas/SobreMim";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// console.log(window.location);
// const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
 
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;