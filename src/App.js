import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Create from "./pages/Create";
import Show from "./pages/Show";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Index</Link> &nbsp; | &nbsp;
        <Link to="/create">Add New</Link>
      </nav>
      <br/>
      <h2>React Record Store</h2>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Show />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}