import React from 'react'
import Image from 'next/image'
import MainLayout from '@/components/layouts/MainLayout'

const iso: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-[#1F2937] text-white text-center p-4 mb-10">
        <h1 className="text-3xl font-bold">ISO/Image File</h1>
      </div>
      <div className="flex justify-center mb-4">
        <div className="flex flex-nowrap justify-center">
          <div className="w-64 h-80 bg-transparent border border-gray-200 p-4 m-4 rounded shadow-md flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">WiFi5 Soft</h2>
            <Image src="/wifi5.png" alt="wifi5" width={24} height={24} className="mb-4" />
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Browse
            </button>
          </div>
          <div className="w-64 h-80 bg-transparent border border-gray-200 p-4 m-4 rounded shadow-md flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">LPB Pisoft</h2>
            <Image src="/logo2.png" alt="LPB" width={24} height={24} className="mb-4" />
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Browse
            </button>
          </div>
          <div className="w-64 h-80 bg-transparent border border-gray-200 p-4 m-4 rounded shadow-md flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Ado Soft</h2>
            <Image src="/logo3.png" alt="Ado" width={24} height={24} className="mb-4" />
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Browse
            </button>
          </div>
          <div className="w-64 h-80 bg-transparent border border-gray-200 p-4 m-4 rounded shadow-md flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">PisoFi</h2>
            <Image src="/logo3.png" alt="PisoFi" width={24} height={24} className="mb-4" />
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Browse
            </button>
          </div>
          <div className="w-64 h-80 bg-transparent border border-gray-200 p-4 m-4 rounded shadow-md flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">1Click System</h2>
            <Image src="/logo3.png" alt="1click" width={24} height={24} className="mb-4" />
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Browse
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default iso