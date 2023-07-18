import Header from "./header/header"
import Main from "./main/main"
import Footer from "./footer/footer"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return(
    <>
      <Header/>
      <Main> <Outlet/> </Main>
      <Footer/>
    </>
  )
}