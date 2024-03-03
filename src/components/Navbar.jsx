import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <nav className='h-dvh w-[40vw] max-w-[40vw] p-20'>

            <Link to="/" className='mt-28'>
                <div className='flex'>
                    <img src="../logo.png" alt="logo" className='w-10' /><h1 className='text-4xl'>nshit Krishan</h1>
                </div>
                <h2 className='block'>Full-stack Developer</h2>
            </Link>

            <div className="mt-32">
                <h4 className='text-2xl font-light'>Introduction</h4>
                <span className='h-[1px] w-[295px] my-3 bg-[#f5fad7] rounded-xl block'></span>
                <ul className='font-light text-xl'>
                    <li className='my-2'><Link to="/">Home</Link></li>
                    <li className='my-2'><Link to="/Info">Info</Link></li>
                    <li className='my-2'><Link to="/Work">Work</Link></li>
                    <li className='my-2'><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>

        </nav>
    )
}
