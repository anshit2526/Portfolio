import React from 'react'

export default function About() {
  return (
    <div className='m-10 xs:mx-4 mt-10'>
      <div className='text-xl flex items-center text-my-theme mb-12 xs:text-lg'>Information <span className='h-[1px] w-[35dvw] bg-my-theme mx-10 rounded-xl xs:mx-2 xs:w-[60dvw]' > </span></div>

      <div className="container overflow-y-scroll max-h-[60dvh] my-scrollbar xs:max-h-[70dvh]">
        <div id="about">
          <h3 className='text-4xl mb-3 text-my-theme w-max xs:text-2xl'><a href="#about">About me</a></h3>
          <p className='font-light mx-5 xs:mx-2'> Throughout my professional journey I made myself a highly skilled and driven Full-Stack Developer passionate about crafting beautiful, user-friendly, and profitable websites. I am committed to delivering high-quality, maintainable code within deadlines and at competitive rates, ensuring a smooth and successful project journey for my clients. </p>
          <p className='font-light mx-5 mt-2 xs:mx-2'> I honed my skills in both front-end and back-end development, employing best practices to create high-performing and user-centric UI/UX experiences. Recognizing the critical role of soft skills, I actively focused on developing strong communication skills, including fluency in English, and maintaining a positive and professional demeanor. My dedication to self-improvement extends to stress management, problem-solving, and critical thinking, fostered by my interest in psychology. Additionally, I enjoy playing chess and video games, which hone my strategic thinking, quick thinking, and problem-solving abilities. </p>
          <p className='font-light mx-5 mt-2 xs:mx-2'> I'm a continuous learner, leveraging various resources like official documentation, online tutorials, coding platforms, and AI tools like ChatGPT and Gemini, to stay abreast of the latest advancements and develop the most effective solutions for your website needs.</p>
          <p className='font-light mx-5 mt-2 xs:mx-2'> I am confident I can be a valuable asset to your team. My expertise in various web development tools ensures a seamless and efficient experience for your business. I am dedicated to using my skills to elevate your brand's online presence and drive profitability through website optimization strategies.</p>
          <p className='font-light mx-5 mt-2 xs:mx-2'> Driven by my curiosity for the future and a growth mindset informed by past experiences, I am adaptable and thrive in diverse work environments and projects. While I possess the ability to work independently, I also value the collaborative spirit and positive impact of strong team environments.</p>
        </div>

        <div id="journey">
        <h3 className='text-4xl mt-10 mb-3 text-my-theme w-max xs:text-2xl'><a href="#journey">My Journey</a></h3>
        <p className="font-light mx-5 xs:mx-2">My passion for web development blossomed during my final year of college. Witnessing websites lacking in either design appeal or optimal performance sparked my desire to contribute to a more engaging and effective web experience for everyone. This passion, coupled with my lifelong love of coding, motivated me to embark on a self-directed learning journey.</p>
        </div>

        <div id="experience">
          <h3 className='text-4xl mt-10 mb-3 text-my-theme w-max xs:text-2xl'><a href="#experience">Experience</a></h3>
          <div className="flex items-center">
            <img src='oasis-logo.png' alt="oasis logo" className=' inline w-9 h-9 xs:w-7 xs:h-7' />
            <h1 className='text-3xl mx-2 inline xs:text-2xl'>Oasis Infobyte</h1>
          </div>
          <p className='text-sm italic mx-2 my-1'>Web Developer Intern, Feb 2024 - Present</p>
          <p className='text-sm font-light mx-5'>During my web development internship at Oasis Infobyte, I was assigned several individual project tasks that had to be completed within a specified deadline. Throughout the internship, I designed both the front-end and back-end of websites, using my knowledge and skills creatively to build excellent websites. The internship's aim was to teach me how to apply my knowledge and skills to real-world projects, providing me with a taste of how the industry operates. During the internship, I worked on various web technologies such as React.js, Node.js, Express.js, HTML, and Bootstrap CSS. I also learned a new one: Tailwind CSS. To see my work during the internship <a href="https://github.com/anshit2526/OIBSIP" className='underline text-my-theme hover:no-underline' rel='noreferrer' target='_blank'>Click here</a>.</p>


          <div className="flex mt-5 items-center">
            <img src='wayspire-logo.png' alt="wayspire logo" className=' inline w-9 h-9 xs:w-7 xs:h-7' />
            <h1 className='text-3xl mx-2 inline xs:text-2xl'>Wayspire</h1>
          </div>
          <p className='text-sm italic mx-2 my-1'>Full-stack Developer Intern, Jul 2023 - Sep 2023</p>
          <p className='text-sm font-light mx-5'>During my role as a Full-Stack Developer at Wayspire, I honed my skills in both front-end and back-end development. I gained valuable experience and expanded my knowledge of diverse web technologies, learning how to effectively apply them to real-world projects. This internship enriched me with valuable skills, including collaboration with fellow developers, effective communication, and a deeper understanding of various web technologies.</p>

        </div>
      </div>
    </div>


  )
}
