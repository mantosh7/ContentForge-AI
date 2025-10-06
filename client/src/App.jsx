import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import WriteArticle from "./pages/WriteArticle"
import BlogTitles from "./pages/BlogTitles"
import Dashboard from "./pages/Dashboard"
import GenerateImages from "./pages/GenerateImages"
import Community from "./pages/Community"
import RemoveBackground from "./pages/RemoveBackground"
import RemoveObject from "./pages/RemoveObject"
import ReviewResume from "./pages/ReviewResume"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

export default function App()
{
  return <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/ai" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="write-article" element={<WriteArticle />} />
        <Route path="blog-title" element={<BlogTitles />} />
        <Route path="community" element={<Community />} />
        <Route path="generate-images" element={<GenerateImages />} />
        <Route path="remove-background" element={<RemoveBackground />} />
        <Route path="remove-object" element={<RemoveObject />} />
        <Route path="review-resume" element={<ReviewResume />} />
      </Route>
    </Routes>
  </div>
}