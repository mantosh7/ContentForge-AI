import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./pages/Layout"

export default function App()
{
  return <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <route path="/ai" element={<Layout />}>
        
      </route>
    </Routes>
    
  </div>
}