import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const currentUser = true;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/"  component={<Home />} />
        <Route path="/posts"  component={<Home />} />
        <Route path="/register"  component={currentUser ? <Home /> : <Register />} /> 
        <Route path="/login"  component={currentUser ? <Home /> : <Login />} />
        <Route path="/post/:id"  component={<Single />} />
        <Route path="/write" component={currentUser ? <Write /> : <Login />} />
        <Route path="/settings" component={currentUser ? <Settings /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
