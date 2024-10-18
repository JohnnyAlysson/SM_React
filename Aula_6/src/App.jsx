import {BrowserRouter,Route,Routes} from "react-router-dom"
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact"
import {About} from "./pages/About"
import { Layout } from "../Layout/Index"
import { Page404 } from "./pages/Page404/Index"
import { Result } from "./pages/Result"




function App() {



  return (


    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/result" element={<Result />} />
        </Route>
          <Route path="*" element={<Page404 />} />

        
      </Routes>
    
      </BrowserRouter>
    </>
  )
}

export default App
