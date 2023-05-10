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
                            <p className="font-light">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.
                                Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw,
                                toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde
                                om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook,
                                vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren
                                &apos;60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum
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