import Indonesia from "../assets/img.jpg"
import Malaysia from "../assets/10.jpg"
import France from "../assets/4.jpg"

const Recent = () => {
    return (
        <section name="recent" className="w-full">
            <div className="flex-col max-w-7xl mx-auto justify-center items-center pt-[120px]">
                <div className="flex flex-col justify-center items-center gap-5">
                    <p className="flex flex-col gap-2 font-bold text-5xl">Recent Trips</p>
                    <p>You can discover unique destination using Google Maps.</p>
                </div>

                <div className="w-full pt-7">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="max-w-[350px] flex flex-col mx-auto p-5 shadow-xl rounded-lg gap-3">
                            <img src={Indonesia} alt="indonesia" />
                            <p className="font-bold">Indonesia</p>
                            <p>
                                As the world&apos;s third largest democracy,
                                Indonesia is a presidential republic with an elected legislature.
                                It has 38 provinces, of which nine have special status.
                                The country&apos;s capital, Jakarta, is the world&apos;s second-most populous urban area.
                                Indonesia shares land borders with Papua New Guinea, East Timor,
                                and the eastern part of Malaysia, as well as maritime borders with Singapore, Vietnam, Thailand, the Philippines,
                                Australia, Palau, and India.
                            </p>
                        </div>

                        <div className="max-w-[350px] flex flex-col mx-auto p-5 shadow-xl rounded-lg gap-3">
                            <img src={Malaysia} alt="indonesia" />
                            <p className="font-bold">Malaysia</p>
                            <p>
                                Malaysia has its origins in the Malay kingdoms, which, from the 18th century on,
                                became subject to the British Empire, along with the British Straits Settlements protectorate.
                                During World War Two, British Malaya, along with other nearby British and American colonies,
                                was occupied by the Empire of Japan.[13] Following three years of occupation,
                                peninsular Malaysia was unified
                                as the Malayan Union in 1946 and then restructured as the Federation of Malaya in 1948.
                            </p>
                        </div>

                        <div className="max-w-[350px] flex flex-col mx-auto p-5 shadow-xl rounded-lg gap-3">
                            <img src={France} alt="indonesia" />
                            <p className="font-bold">France</p>
                            <p>
                            Inhabited by archaic humans since the Paleolithic era, 
                            the territory of Metropolitan France was settled during the Iron 
                            Age by Celtic tribes known as Gauls. Rome annexed the area in 51 BC, 
                            leading to a distinct Gallo-Roman culture that laid the foundation of the French language. 
                            The Germanic Franks formed the Kingdom of Francia, which became the heartland 
                            of the Carolingian Empire. The Treaty of Verdun of 843 partitioned the empire, 
                            with West Francia becoming the Kingdom of France in 987. 
                            In the High Middle Ages, France was a powerful but highly decentralised feudal kingdom.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recent