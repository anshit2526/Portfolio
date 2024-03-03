import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='p-10 '>
            <div className='text-xl flex items-center text-my-theme mb-12'>Home <span className='h-[1px] w-[35dvw] bg-my-theme mx-10 rounded-xl' > </span></div>
            <p className='text-4xl font-light my-2'>Hello! I'm Anshit Krishan,</p>
            <p className='text-4xl font-light my-2'>a Full-stack Web Developer who</p>
            <p className='text-4xl font-light my-2'><span className='font-mono'>Builds</span>, <span className='font-mono'>Creates</span> and <span className='font-mono'>Deploys</span> Websites and Web Apps</p>
            
            <p className="font-light mt-10 w-[25dvw]">The Full-stack web development combines front-end (user interface) and back-end (server-side) skills to design, build, and maintain web applications.</p>
             
            <Link to='/Info'>
                <button className='mt-10 h-max rounded-3xl bg-my-theme px-10 py-2'>More About me</button>
            </Link>
        </div>
    )
}
