import React from 'react'

export default function Contact() {
    return (
        <div className='p-10'>
            <div className='text-xl flex items-center text-my-theme mb-8'>Contact <span className='h-[1px] w-[35dvw] bg-my-theme mx-10 rounded-xl' > </span></div>
                <form action="#" name='contact' id='contact' className='flex flex-col border border-my-theme rounded-lg py-2 px-7 w-[50vw] mx-auto'>
                    <label htmlFor="name">Name*</label>
                    <input type="text" name='name' id='name' required />

                    <label htmlFor="email">Email*</label>
                    <input type='mail' name='email' id='email' required />
                    
                    <label htmlFor="Message">Message</label>
                    <textarea type="text" name='message' id='message' rows={4}/>

                    <button className='bg-my-theme w-max px-4 rounded-md mx-auto mt-5'>Send</button>
                </form>
        </div>
    )
}
