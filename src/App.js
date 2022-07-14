import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AppLayout from './Components/Layout/AppLayout.jsx';
import Blank from './Pages/BlankPage.jsx';

const App = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout/>}>
              {/* <Route index element={<Blank/>}></Route> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

export default App;
