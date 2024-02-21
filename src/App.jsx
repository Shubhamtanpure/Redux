import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { Outlet, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Components/Home"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import AboutUS from "./Components/AboutUS"
import Contact from "./Components/Contact"
import Cart from "./Header/Cart/Cart"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<AboutUS />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}> </Route>
      </Route >

    )
  )
  return (
    <>
      <RouterProvider router={router} />


    </>
  )
}

export default App
