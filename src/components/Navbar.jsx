import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <nav className='fixed w-full h-[100px] px-5 py-4 z-10'>
            <div className='bg-white flex justify-between items-center px-4 h-full shadow-xl rounded-lg md:px-8'>
                {/** logo */}
                <div>
                    <p className='font-bold text-3xl'>Trippy.</p>
                </div>

                {/** menu */}
                <ul className='hidden md:flex md:gap-10'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>

                {/** hamburger */}
                <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                {/** mobile menu */}
                <ul className={!nav ? 'hidden' : 'absolute w-full h-screen top-0 left-0 flex flex-col justify-center items-center gap-8 bg-white'}>
                    <li className='text-3xl' >Home</li>
                    <li className='text-3xl' >About</li>
                    <li className='text-3xl' >Service</li>
                    <li className='text-3xl' >Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar