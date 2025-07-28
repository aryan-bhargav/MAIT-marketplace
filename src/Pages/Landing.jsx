import { Link } from "react-router-dom";
const Landing = () => {
    return (
        <div className="min-h-screen bg-black text-gray-100">

            {/* Hero Section */}
            <section className="text-center px-4 md:px-10 py-10 bg-black">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-orange-500">
                            Buy & Sell Used College Essentials
                        </h2>
                        <p className="text-base sm:text-lg text-gray-400 mb-6">
                            A student-to-student marketplace for MAITians to trade calculators, drafters,
                            sheet holders, and more.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <Link className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700" to="/browse">Browse Items
                            </Link>

                            <Link className="bg-gray-800 text-white px-6 py-3 rounded border border-gray-600 hover:bg-gray-700" to="/browse">Post an Item
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="w-full md:w-1/2 flex justify-center scale-90 sm:scale-100">
                        <img src="/hero.svg" alt="Hero" className="max-w-xs sm:max-w-sm md:max-w-md" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-900 py-16 px-4 md:px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/1027/1027233.png" alt="Buy" className="h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-orange-400">Buy Smart</h3>
                        <p className="text-gray-400">Affordable second-hand tools from fellow students.</p>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/2331/2331937.png" alt="Sell" className="h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-orange-400">Sell Easily</h3>
                        <p className="text-gray-400">List your unused items in seconds and make extra cash.</p>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png" alt="Secure" className="h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-orange-400">Campus Trusted</h3>
                        <p className="text-gray-400">Only for MAIT students. Connect and trade with confidence.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 text-white py-12 text-center px-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Start Selling or Buying Now</h3>
                <p className="mb-6 text-sm sm:text-base md:text-lg text-gray-100">
                    Join hundreds of MAIT students saving money and reducing waste.
                </p>
                <Link className="bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600" to="/signup">Join the Marketplace</Link>
            </section>

            {/* Footer */}
            <footer className="bg-gray-950 text-gray-400 py-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} MAIT Marketplace. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;
