import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route // ✅ Add this
  } from "react-router-dom";
  import Portfolio from "./components/portfolio/PortFolio";

function App (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={< Portfolio/>} >

                </Route>
            </Routes>
        </Router>
    )
}
export default App;