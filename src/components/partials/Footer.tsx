import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-4 mt-4">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-4">Why Us?</h2>
          <p className="text-sm text-gray-300">Starting a WiFi Vendo business allows you to capitalize on the growing
            demand for affordable internet access while generating passive income with low initial investment.
            It's a scalable and flexible venture that benefits both the entrepreneur and the community by providing
            essential connectivity.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="list-none mb-0">
            <li className="mb-2"><a href="iso" className="text-sm text-gray-300 hover:text-white">ISO</a></li>
            <li className="mb-2"><a href="flasher" className="text-sm text-gray-300 hover:text-white">Flasher</a></li>
            <li className="mb-2"><a href="tutorial" className="text-sm text-gray-300 hover:text-white">Tutorial</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-4">Social Media</h2>
          <ul className="list-none mb-0">
            <li className="mb-2"><a href="#" className="text-sm text-gray-300 hover:text-white">Facebook</a></li>
            <li className="mb-2"><a href="#" className="text-sm text-gray-300 hover:text-white">Twitter</a></li>
            <li className="mb-2"><a href="#" className="text-sm text-gray-300 hover:text-white">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto p-4 text-center">
        <p className="text-sm text-gray-300">&copy; 2024 Wifi Vendo Docx. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer