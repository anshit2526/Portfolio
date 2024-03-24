import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Info from './components/Info'
import Work from './components/Work'
import Contact from './components/Contact'
// import Decoration from './components/Decoration'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './responsiveness'


function App() {

  return (
    <>
      <Router>

        <Navbar />
        <main className='w-dvw'>
          <div id='action-taking-container' className='flex h-24 justify-end items-end relative top-0 xs:h-max'>
            <button id='download-resume-btn' className='mx-16 h-max rounded-xl underline font-light hover:no-underline xs:hidden'><a href='Anshit-Krishan.pdf' download='Anshit-Krishan.pdf'>Download my CV</a></button>
            <Link to='/Contact'> <button id='get-in-touch-btn' className='mx-16 h-max rounded-3xl bg-my-theme px-10 py-2 xs:hidden'>Get in touch</button></Link>
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Info" element={<Info />} />
            <Route exact path="/Work" element={<Work />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        {/* <Decoration /> */}

      </Router >
    </>

  );
}

export default App;
