import { useState } from "react"
import CardSidebar from "./components/CardSidebar"
import Container from "./components/Container"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { useEffect } from "react"
import Principal from "./components/Principal"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Container>
        <Sidebar/>
        <Outlet/>
       <Principal/>
      </Container>
    </>
  )
}

export default App
