import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Paginas/Home";
import Contato from "./Paginas/Contato";
import Carrinho from './Paginas/Carrinho';
import Sobre from './Paginas/Sobre';
import Produto from './Paginas/Produto';
import Inicio from './Paginas/Inicio';

function Rotas() {
  return (
    // Lista de rotas
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/inicio" element={ <Inicio /> } />
            <Route path="/produto" element={ <Produto /> } />
            <Route path="/contato" element={ <Contato /> } />
            <Route path="/carrinho" element={ <Carrinho /> } />
            <Route path="/sobre" element={ <Sobre /> } />
        </Routes>
    </BrowserRouter>
  )
}
export default Rotas;
