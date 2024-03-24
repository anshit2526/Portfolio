import React, { useState } from 'react'
import { Link } from "react-router-dom";


export default function Home() {

    const [menuState, setMenuState] = useState('closed');

    const toggleHamburgerMenus = () => {

        const hamburgerMenuItems = document.getElementById('hamburger-menu-items');
        hamburgerMenuItems.toggleAttribute('hidden');

        if (menuState === 'closed') {
            document.getElementById('bar1').style = `transform: translateY(7px) rotate(-45deg); transition: transform 0.125s linear;`
            document.getElementById('bar2').style = ` opacity: 0;`
            document.getElementById('bar3').style = `transform: translateY(-6px) rotate(45deg); transition: transform 0.125s linear;`
            setMenuState('opened')
        }else {
            document.getElementById('bar1').style = `transform: translateY(0px) rotate(0deg); transition: transform 0.125s linear;`
            document.getElementById('bar2').style = `opacity: 1; transition: opacity 0.125s linear;`
            document.getElementById('bar3').style = `transform: translateY(0px) rotate(-0deg); transition: transform 0.125s linear;`        
            setMenuState('closed')
        }
        console.log(menuState)
    }
    return (
        <nav>

            {/* First navbar for large screen sizes like tablets, laptops and desktops */}
            <div id='default-nav' className='h-dvh w-[40vw] max-w-[40vw] p-20 xs:hidden'>
                <Link to="/" id='title' className='mt-28'>
                    <div className='flex'>
                        <img id='logo' src="../logo.png" alt="logo" className='w-10' /><h1 id='title-name' className='text-4xl'>nshit Krishan</h1>
                    </div>
                    <h2 className='block'>Full-stack Developer</h2>
                </Link>

                <div id='navigation-items' className="mt-32">
                    <h4 className='text-2xl font-light'>Introduction</h4>
                    <span className='h-[1px] w-[295px] my-3 bg-[#f5fad7] rounded-xl block'></span>
                    <ul className='font-light text-xl'>
                        <li className='my-2'><Link to="/">Home</Link></li>
                        <li className='my-2'><Link to="/Info">Info</Link></li>
                        <li className='my-2'><Link to="/Work">Work</Link></li>
                        <li className='my-2'><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>

            </div>


            {/* Second navbar for small screen sizes like phones */}
            <div id='nav-for-phones' className='xs:flex justify-between' hidden>
                <Link to="/" id='title'>
                    <div className='flex'>
                        <img id='logo' src="../logo.png" alt="logo" className='w-8' /><h1 id='title-name' className='text-3xl'>nshit Krishan</h1>
                    </div>
                    {/* <h2 className='block'>Full-stack Developer</h2> */}
                </Link>

                <div className="hamburger flex flex-col justify-center py-1 px-2 hover:cursor-pointer z-10" onClick={toggleHamburgerMenus}>
                    <span id='bar1' className=" mt-1 bg-[#f3f3ab] h-[3px] w-7 rounded-md"></span>
                    <span id='bar2' className=" my-1 bg-[#f3f3ab] h-[3px] w-7 rounded-md"></span>
                    <span id='bar3' className=" mb-1 bg-[#f3f3ab] h-[3px] w-7 rounded-md"></span>
                </div>

                <div id='hamburger-menu-items' className="h-dvh w-[70dvw] fixed right-0 bg-[#170537]" hidden>
                    {/* <span className='h-[1px] w-[100%] my-1 bg-[#f5fad7] rounded-xl block'></span> */}

                    <ul className='text-2xl mt-40'>
                        <li className='mx-5 my-5 flex justify-around items-center w-max ml-auto'>
                            <button id='download-resume-btn' className='h-max rounded-xl underline font-light text-sm'><a href='Anshit-Krishan.pdf' download='Anshit-Krishan.pdf'>Download my CV</a></button>
                            <Link to='/Contact'> <button id='get-in-touch-btn' className='h-max w-max rounded-3xl bg-my-theme text-sm px-1 py-1'>Get in touch</button></Link>
                        </li>
                        <li className='mx-5 my-5'><Link to="/">Home</Link></li>
                        <li className='mx-5 my-5'><Link to="/Info">Info</Link></li>
                        <li className='mx-5 my-5'><Link to="/Work">Work</Link></li>
                        <li className='mx-5 my-5'><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
