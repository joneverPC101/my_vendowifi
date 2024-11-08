"use client";

export default function HeroPage() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/h3.png')" }}
    >
      <div className="container mx-auto px-4 pt-1 pb-1 sm:pt-2 sm:pb-3 md:pt-4 md:pb-5 lg:px-16 xl:px-20 2xl:px-24 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
          Welcome to Wifi Vendo Docx
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center text-white mb-4 mt-3">
          Your ultimate guide for setting up and managing a successful WiFi Vendo business.
          Explore expert tips, tools, and resources to grow your network and boost your revenue!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-3 rounded">
            Get Started
          </button>
          <a href="https://m.me/111361465186426" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 hover:bg-orange-700 text-white font-bold py-2 px-3 rounded">
              Buy a License
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
