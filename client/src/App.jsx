import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Dashboard/WelcomePage.jsx"
import Layout from "./components/Layout/Layout";
import Login from "./components/Authentication/login";
import SignUpPage from "./components/Authentication/SignUpPage.jsx";
import HomePage from "./components/Home/HomePage.jsx";

function App() {

  return <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/home' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>

}

export default App
