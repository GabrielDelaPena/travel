import HomeImage from "../assets/home.jpg"

const Home = () => {
    return (
        <div name="home" className=''>
            <img className="w-full h-screen object-cover object-left" src={HomeImage} alt="/" />

            {/** overlay */}
            <div className="w-full h-screen absolute top-0 left-0">
                {/** content inside onverlay */}
                <div className="max-w-[700px] mx-auto h-full flex flex-col justify-center items-center gap-12">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="text-white font-bold text-5xl md:text-7xl">Your Journey</h1>
                        <h1 className="text-white font-bold text-5xl md:text-7xl">Your Story</h1>
                    </div>
                    <p className="text-white font-light text-lg">Choose Your Favourite Destination</p>
                    <button className="border-2 text-black px-8 py-3 bg-white rounded-md font-medium">Destination</button>
                </div>
            </div>
        </div>
    )
}

export default Home