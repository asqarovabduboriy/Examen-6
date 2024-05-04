import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Page/Home/Home'
import Footer from './Components/Footer/Footer'
import Single from './Components/Page/SingleRoute/Single'
import Admin from './Components/Page/Admin/Admin'
import Login from './Components/Page/Login/Login'
import Auth from './Components/Page/Aouth/Auth'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Auth />}>
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='/product/:id' element={<Single />} />
      </Routes>
      <Footer />
      <ToastContainer/>

    </>
  )
}

export default App
