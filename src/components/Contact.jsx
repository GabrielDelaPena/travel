const Contact = () => {
  return (
    <div name="contact" className='w-full py-[120px]'>
      <form action="https://getform.io/f/b35292d3-5d88-4d0f-8cbf-6be4728cec41" className='max-w-4xl mx-auto'>
        <div className='flex flex-col justify-center items-center text-center gap-5'>
          <p className='font-bold text-5xl'>Contact</p>
          <p className='font-light'>Send a message to us!</p>
        </div>

        <div className='flex flex-col px-5 max-w-2xl mx-auto gap-5 mt-5'>
          <input className='border pl-3 h-12' type="text" placeholder='name' name='name' />
          <input className='border pl-3 h-12' type="text" placeholder='email' name='email' />
          <textarea className='border pl-3 py-3' name="message" rows="10" placeholder='message'></textarea>

          <button className="border-2 text-black px-8 py-3 rounded-md font-medium">Send Message</button>
        </div>

      </form>
    </div>
  )
}

export default Contact