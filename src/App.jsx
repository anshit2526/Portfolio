import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Info from './components/Info'
import Work from './components/Work'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {

  return (
    <>
      <Router>

        <Navbar />
        <main className='w-dvw'>
          <div className='flex h-24 justify-end items-end relative top-0'>
            <button className='mx-16 h-max rounded-xl underline font-light hover:no-underline'><a href='Anshit-Krishan.pdf' download='Anshit-Krishan.pdf'>Download my CV</a></button>
            <Link to='/Contact'> <button className='mx-16 h-max rounded-3xl bg-my-theme px-10 py-2'>Get in touch</button></Link>
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Info" element={<Info />} />
            <Route exact path="/Work" element={<Work />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>
        </main>

      </Router >
    </>

  );
}

export default App;
