import './assets/css/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Js1 from "./modules/js1";
import Nav from "./modules/nav";
import Js from "./modules/js";
import Layout from "./modules/layout";
import Layout2 from "./modules/layout2";


function App() {
  return (
          <BrowserRouter>
              <Nav/>
              <Routes>
                  <Route path={'/'} element={<Layout/>}/>
                  <Route path={'/layout2'} element={<Layout2/>}/>
                  <Route path={'/JavaScript'} element={<Js/>}/>
                  <Route path={'/table'} element={<Js1/>}/>
              </Routes>
          </BrowserRouter>
  );
}

export default App;
