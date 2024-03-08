import React from 'react'

export default function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "753bab28-a262-445d-b077-884825b3128c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
        <div className='p-10'>
            <div className='text-xl flex items-center text-my-theme mb-8'>Contact <span className='h-[1px] w-[35dvw] bg-my-theme mx-10 rounded-xl' > </span></div>
                <form onSubmit={onSubmit} name='contact' id='contact' className='flex flex-col border border-my-theme rounded-lg py-2 px-7 w-[50vw] mx-auto'>
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
