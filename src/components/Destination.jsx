import Batangas1 from "../assets/1.jpg"
import Batangas2 from "../assets/2.jpg"


const Destination = () => {
    return (
        <section name="destination" className='w-full'>
            <div className="px-6 max-w-7xl mx-auto pt-[120px]">
                <div className="flex flex-col justify-center items-center text-center gap-5">
                    <p className="flex flex-col gap-2 font-bold text-5xl">Popular <span>Destinations</span></p>
                    <p>Tours give you the opportunity to see a lot, within a time frame.</p>
                </div>

                <div className="w-full pt-7">
                    <div className="flex flex-col justify-center lg:flex-row gap-4">
                        <div className="max-w-[600px] mx-auto flex flex-col justify-center gap-4">
                            <p className="font-bold">Taal Volcano, Batangas</p>
                            <p className="font-light">
                            Taal Volcano has had several violent eruptions in the past, 
                            causing deaths on the island and the populated areas surrounding the lake, 
                            with an overall death toll of about 6,000. Because of its proximity to populated areas and its eruptive history, 
                            the volcano was designated a Decade Volcano, worthy of close study to prevent future natural disasters. 
                            All volcanoes in the Philippines are part of the Ring of Fire.
                            </p>
                        </div>

                        <div className="w-full flex justify-center gap-5">
                            <div style={{ backgroundImage: `url(${Batangas1})` }} className="w-[180px] sm:w-[270px] content-div mt-4"></div>
                            <div style={{ backgroundImage: `url(${Batangas2})` }} className="w-[180px] sm:w-[270px] content-div"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Destination