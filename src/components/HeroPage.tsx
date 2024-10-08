export default function HeroPage() {
    return (
      <div className="h-screen" style={{ backgroundColor: "#1F2937" }}>
        <div className="container mx-auto p-4 pt- md:p-6 lg:px-16 xl:px-20 2xl:px-24">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-7xl font-bold text-white mb-4 mt-24">Welcome to Wifi Vendo Docx</h1>
            <p className="text-3xl text-center text-white mb-6 mt-8">Your ultimate guide for setting up and managing a successful WiFi Vendo business.
              Explore expert tips, tools, and resources to grow your network and boost your revenue!</p>
            <div className="flex justify-center">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-4">Get Started</button>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Buy a License</button>
            </div>
          </div>
        </div>
      </div>
    );
  }