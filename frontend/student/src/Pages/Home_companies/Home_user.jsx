import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import ResultSlider from "./ResultSlider";
import { useNavigate } from "react-router-dom"
import ProfileButton from "./profile";

function Home_user() {
  const navigate = useNavigate()
  const { result_for_profile } = useContext(StoreContext);
  const gotoProfile = () => {
    navigate("/profile")
  }
  return (
    <div className="bg-gray-900 text-white ">
      {/* Hero Section */}
      <header
        className="bg-cover bg-center bg-no-repeat text-white py-10 animate-slideInUp"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?career,technology')" }}
      >
        <div className="flex items-center justify-between px-10">
          {/* Logo */}
          <div className="w-2/12">
            <img src="/images/placement7.png" alt="Logo" className="h-4/5" />
          </div>

          {/* Title and Description */}
          <div className="text-center w-3/5 ">
            <h1 className="text-4xl font-bold">Welcome to the Placement Portal</h1>
            <p className="text-lg mt-4">Your path to a successful career begins here.</p>
          </div>

          {/* Profile Shortcut */}
          <ProfileButton/>
        </div>

      </header>


      <main className="container mx-auto px-4 py-10">
        {/* Statistics Section */}
        <section className="grid md:grid-cols-3 gap-6 text-center h-56">
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:scale-105 hover:rotate-1 hover:shadow-2xl transition-all duration-500 ease-in-out shadow-blue-400 relative overflow-hidden group animate-slideInLeft">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
            <h2 className="text-4xl mt-14 font-bold text-blue-300 transition-all duration-500 ease-in-out group-hover:text-blue-400 group-hover:drop-shadow-lg">
              500+
            </h2>
            <p className="mt-2 text-gray-300 group-hover:text-white transition-all duration-300">
              Offer made
            </p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:scale-105 hover:rotate-1 hover:shadow-2xl transition-all duration-500 ease-in-out shadow-blue-400 relative overflow-hidden group animate-slideInUp">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
            <h2 className="text-4xl mt-14 font-bold text-blue-300 transition-all duration-500 ease-in-out group-hover:text-blue-400 group-hover:drop-shadow-lg">
              75 LPA
            </h2>
            <p className="mt-2 text-gray-300 group-hover:text-white transition-all duration-300">
              Highest CTC
            </p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:scale-105 hover:rotate-1 hover:shadow-2xl transition-all duration-500 ease-in-out shadow-blue-400 relative overflow-hidden group animate-slideInRight">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
            <h2 className="text-4xl mt-14 font-bold text-blue-300 transition-all duration-500 ease-in-out group-hover:text-blue-400 group-hover:drop-shadow-lg">
              200+
            </h2>
            <p className="mt-2 text-gray-300 group-hover:text-white transition-all duration-300">
              Recruiting Companies
            </p>
          </div>

        </section>

        {/* About College Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden my-10 animate-fadeIn">
          {/* Background animated overlay */}
          <div className="absolute inset-0 bg-[url('/images/overlay-pattern.png')] opacity-10 animate-pulse"></div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-8 transition-transform duration-700 transform hover:scale-105">
              About Our College
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img
                  src="./images/golden jublie.jpg"
                  alt="Golden Jubilee"
                  className="rounded-lg shadow-lg w-full md:w-3/4 transition-transform duration-700 hover:scale-105 hover:shadow-2xl"
                />
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p className="transition-colors duration-500 hover:text-white">
                  Established in <strong>1963</strong>, our institute is ranked among the top technical institutions.
                </p>
                <p className="transition-colors duration-500 hover:text-white">
                  We offer <strong>state-of-the-art labs</strong>, world-class faculty, and a strong alumni network.
                </p>
                <p className="transition-colors duration-500 hover:text-white">
                  Our Training &amp; Placement Cell bridges the gap between academia and industry.
                </p>
                <p className="font-semibold text-blue-400 mt-4 transition-all duration-500 hover:tracking-wider">
                  Join us in shaping the future!
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Slider Section */}
        <header className="text-center py-10 animate-fadeInUp">
          <h1 className="text-4xl font-bold">Some Best Offers</h1>
        </header>
        <div className="h-96 flex items-center justify-center animate-slideInDown">
          <ResultSlider student={result_for_profile} />
        </div>

        {/* Success Stories Section */}
        <section className="mt-10 bg-gray-900 py-20 px-6 md:px-40 rounded-sm">
          <h2 className="text-2xl font-bold text-center text-white mb-8 transition-transform duration-500 ease-in-out hover:scale-105">
            Alumni Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {["John Doe", "Jane Smith", "Chris Johnson"].map((name, index) => (
              <div
                key={index}
                className="bg-gray-800 shadow-2xl rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-blue-400"
              >
                <p className="text-gray-300 italic transition-colors duration-500 hover:text-gray-100">
                  "This portal helped me achieve my dream career!"
                </p>
                <strong className="block mt-4 text-white text-right transition-colors duration-500 hover:text-blue-400">
                  - {name}
                </strong>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>
          &copy; 2025 Placement Portal. All Rights Reserved. {" "}
          <a href="/TP_Cell_Guidelines.pdf" target='_blank' rel='noopener noreferrer' className="text-blue-400 hover:underline">TNP Guidelines</a> | {" "}
          <a href="/contact-us" className="text-blue-400 hover:underline">Contact Us</a> | {" "}
          <a href="/about" className="text-blue-400 hover:underline">About Us</a>
        </p>
      </footer>
    </div>
  );
}

export default Home_user;
