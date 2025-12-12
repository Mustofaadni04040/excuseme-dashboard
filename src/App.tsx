import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
