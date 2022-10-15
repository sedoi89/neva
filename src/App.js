import './assets/css/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Js1 from "./modules/js1";
import Nav from "./modules/nav";
import Js from "./modules/js";
import Layout from "./modules/layout";


function App() {
  return (


          <BrowserRouter>
              <Nav/>
              <Routes>
                  <Route path={'/'} element={<Js1/>}/>
                  <Route path={'/JavaScript'} element={<Js/>}/>
                  <Route path={'/layout'} element={<Layout/>}/>

              </Routes>
          </BrowserRouter>


  );
}

export default App;
