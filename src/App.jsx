import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Front, ITSZ, Zeiten } from "./web";
import {Layout} from "./Layout"

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/.env" element={<Navigate to="/" />} />
        <Route element={<Layout/>}>
          <Route path="/" element={<Front />}/>
          <Route path="/itsz" element={<ITSZ />}/>
          <Route path="/zeiten" element={<Zeiten />}/>
        </Route>
      </Routes>
    </Router>
  )
}
export default App;