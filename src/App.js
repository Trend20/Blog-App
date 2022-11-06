import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import { Routes, Route } from "react-router-dom";
function App() {
  const currentUser = false;
  return (
    <>
      <TopBar />
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route path="/posts"  element={<Home />} />
        <Route path="/register"  element={currentUser ? <Home /> : <Register />} /> 
        <Route path="/login"  element={currentUser ? <Home /> : <Login />} />
        <Route path="/post/:id"  element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
