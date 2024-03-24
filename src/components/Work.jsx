import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className="m-10 xs:mx-4 mt-10">

      <div className='text-xl flex items-center text-my-theme mb-12 xs:text-lg'>Work <span className='h-[1px] w-[35dvw] bg-my-theme mx-10 rounded-xl xs:w-[75dvw] xs:mx-2' > </span></div>

      <div className='container overflow-y-auto h-[60dvh] my-scrollbar xs:max-h-[70dvh]'>
        <Link to="/"><h3 className='text-my-theme text-3xl underline hover:no-underline xs:text-2xl'>Portfolio Website</h3></Link>
        <p className='font-light mx-5 xs:mx-2'>One of the projects I have worked on is this Portfolio. I created this portfolio with so much attention to detail and to show my skills and knowledge in coding. Technologies used in this portfolio are HTML, CSS, JavaScript, Tailwind CSS and Rect.js. This portfolio contains my journey as a web developer, Projects I have worked on and my contact information.</p>
        <h5 className='italic mx-5 my-1 xs:mx-2'>Features:</h5>
        <ul className='mx-16 font-light list-disc xs:mx-7'>
          <li><strong className="inline font-semibold">Responsive:</strong> Responsiveness is a key feature, and this portfolio website ensures it.</li>
          <li><strong className="inline font-semibold">Single-page Website:</strong> single-page website, thanks to React.js.</li>
          <li><strong className="inline font-semibold">Loading Time:</strong> Less loading time than other multi-page websites.</li>
          <li><strong className="inline font-semibold">Source Code:</strong> Each tab is a separate component that results easy-to-understand and maintainable code.</li>
          <li><strong className="inline font-semibold">UI/UX:</strong> Visually appealing UI. Easy to navigate across the pages</li>
          <li><strong className="inline font-semibold">Technologies used:</strong> HTML, CSS, Tailwind CSS, React.JS, JavaScript</li>
        </ul>

        <Link to='https://github.com/anshit2526/newsapp-react' target='_blank'> <h3 className='text-my-theme text-3xl underline hover:no-underline mt-10 xs:text-2xl'>NewsMania</h3></Link>
        <p className='font-light mx-5 xs:mx-2'>Stay updated with NewsMania a news web app that gives you the latest news across the world of different categories.</p>
        <h5 className='italic mx-5 my-1 xs:mx-2'>Features:</h5>
        <ul className='mx-16 font-light list-disc xs:mx-7'>
          <li><strong className="inline font-semibold">Responsive:</strong> Watch news on any device. NewsMania runs on all screen size</li>
          <li><strong className="inline font-semibold">Fast & Smooth:</strong> News loads immensely fast plus gives smooth performance.</li>
          <li><strong className="inline font-semibold">Loading Time:</strong> Less loading time than other multi-page websites.</li>
          <li><strong className="inline font-semibold">Source Code:</strong> Source code is well structured and highly maintainable.</li>
          <li><strong className="inline font-semibold">UI/UX:</strong> Simple and user friendly interface .Smooth performance for good user experience</li>
          <li><strong className="inline font-semibold">News Categories:</strong> Different news categories.</li>
          <li><strong className="inline font-semibold">NewsAPI:</strong> News are fetched from NewsAPI.</li>
          <li><strong className="inline font-semibold">Technologies used:</strong> HTML, CSS, Bootstrap CSS, React.JS, JavaScript, NewsAPI</li>
        </ul>

        <Link to='https://github.com/anshit2526/textutils-react' target='_blank'> <h3 className='text-my-theme text-3xl underline hover:no-underline mt-10 xs:text-2xl'>TextUtils</h3></Link>
        <p className='font-light mx-5 xs:mx-2'>Get you text ready according to your need. Convert to uppercase, or lowercase, count your words and characters and even see preview of your text.</p>
        <h5 className='italic mx-5 my-1 xs:mx-2'>Features:</h5>
        <ul className='mx-16 font-light list-disc xs:mx-7'>
          <li><strong className="inline font-semibold">Responsive:</strong> Able to fit on any screen size </li>
          <li><strong className="inline font-semibold">Easy to use:</strong> This app is easy to use</li>
          <li><strong className="inline font-semibold">Functionalities:</strong> You can copy paste your text.</li>
          <li><strong className="inline font-semibold">Source Code:</strong> Source code is well structured and highly maintainable.</li>
          <li><strong className="inline font-semibold">UI/UX:</strong> The UI is so simple and user friendly.</li>
          <li><strong className="inline font-semibold">Technologies used:</strong> HTML, CSS, Tailwind CSS, React.JS, JavaScript</li>
        </ul>

      </div>
    </div>
  )
}
