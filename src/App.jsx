import CardSideBar from "./components/CardSideBar"
import Container from "./components/Container"
import Header from "./components/Header"
import Principal from "./components/Principal"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <Header/>
      <Container>
       <Sidebar>
      <CardSideBar/>
      <CardSideBar/>
      <CardSideBar/>
       </Sidebar>
       <Principal/>
       </Container>
    </>
  )
}

export default App
