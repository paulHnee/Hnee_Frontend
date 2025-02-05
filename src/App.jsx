import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Front, ITSZ, Zeiten, Login, Dashboard} from "./web";
import {Layout} from "./Layout"

function App(){
  const isAuthenticated = localStorage.getItem("authToken");
  return(
    <Router>
      <Routes>
        <Route path="/.env" element={<Navigate to="/" />} />
        <Route element={<Layout/>}>
          <Route path="/" element={<Front />}/>
          <Route path="/itsz" element={<ITSZ />}/>
          <Route path="/zeiten" element={<Zeiten />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />} />
          <Route path="/vpn" element={<Navigate to="/dashboard" />}/>
        </Route>
      </Routes>
    </Router>
  )
}
export default App;