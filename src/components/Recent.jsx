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
                                Indonesia, officially the Republic of Indonesia, also known locally as Nusantara,
                                is a country located in Asia and to a lesser extent in Oceania.
                                The country consists of an archipelago of 16,056 islands, but this is not 100% certain.
                                This makes the country the world&apos;s largest island nation.
                            </p>
                        </div>

                        <div className="max-w-[350px] flex flex-col mx-auto p-5 shadow-xl rounded-lg gap-3">
                            <img src={Malaysia} alt="indonesia" />
                            <p className="font-bold">Malaysia</p>
                            <p>
                                Indonesia, officially the Republic of Indonesia, also known locally as Nusantara,
                                is a country located in Asia and to a lesser extent in Oceania.
                                The country consists of an archipelago of 16,056 islands, but this is not 100% certain.
                                This makes the country the world&apos;s largest island nation.
                            </p>
                        </div>

                        <div className="max-w-[350px] flex flex-col mx-auto p-5 shadow-xl rounded-lg gap-3">
                            <img src={France} alt="indonesia" />
                            <p className="font-bold">France</p>
                            <p>
                                Indonesia, officially the Republic of Indonesia, also known locally as Nusantara,
                                is a country located in Asia and to a lesser extent in Oceania.
                                The country consists of an archipelago of 16,056 islands, but this is not 100% certain.
                                This makes the country the world&apos;s largest island nation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recent