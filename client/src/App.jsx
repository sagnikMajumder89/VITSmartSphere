import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Dashboard/WelcomePage.jsx"
import Layout from "./components/Layout/Layout";
import Login from "./components/Authentication/login";
import SignUp from "./components/Authentication/SignUp.jsx";

function App() {

  return <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>

}

export default App
