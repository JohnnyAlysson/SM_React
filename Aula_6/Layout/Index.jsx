import { Link, Outlet } from "react-router-dom"

export const Layout = ()=>{
  return(
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </header>

    <main >
      <Outlet />
    </main>

    <footer>
      <p>Direitos reservados ao Johnny Alysson</p>
    </footer>
    </>
  )
}

