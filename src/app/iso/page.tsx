import React from 'react';
import Image from 'next/image';
import MainLayout from '@/components/layouts/MainLayout';

const Iso: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-[#1F2937] text-white text-center p-4 mb-10">
        <h1 className="text-3xl font-bold">ISO/Image File</h1>
      </div>
      <div className="flex justify-center mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className="w-full bg-transparent border border-gray-200 p-4 m-4 rounded shadow-md flex flex-col items-center justify-center mx-auto">
          <h2 className="text-2xl font-bold mb-4">WiFi5 Soft</h2>
          <Image src="/wifi5.png" alt="wifi5" width={64} height={64} className="mb-4" />
            <a href="https://files.wifi5-soft.com/" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Browse
            </button>
            </a>

          </div>
          <div className="w-full bg-transparent border border-gray-200 p-4 m-4 rounded shadow-md flex flex-col items-center justify-center mx-auto">
            <h2 className="text-2xl font-bold mb-4">LPB Pisoft</h2>
            <Image src="/lpb.png" alt="LPB" width={64} height={64} className="mb-4" />
            <a href="https://download.lpbpisowifi.com/" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Browse
            </button>
            </a>
          </div>
          <div className="w-full bg-transparent border border-gray-200 p-4 m-4 rounded shadow-md flex flex-col items-center justify-center mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ado Soft</h2>
            <Image src="/ado.png" alt="Ado" width={64} height={64} className="mb-4" />
            <a href="https://www.adopisoft.com/downloads" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Browse
            </button>
            </a>
          </div>
          <div className="w-full bg-transparent border border-gray-200 p-4 m-4 rounded shadow-md flex flex-col items-center justify-center mx-auto">
            <h2 className="text-2xl font-bold mb-4">PisoFi</h2>
            <Image src="/pisofi.png" alt="PisoFi" width={64} height={64} className="mb-4" />
            <a href="https://drive.google.com/drive/folders/1HG3G_HsYXH1AkcX5G9O_AcCrf1ih1SUk" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Browse
            </button>
            </a>
          </div>
          <div className="w-full bg-transparent border border-gray-200 p-4 m-4 rounded shadow-md flex flex-col items-center justify-center mx-auto">
            <h2 className="text-2xl font-bold mb-4">1Click System</h2>
            <Image src="/1click.png" alt="1click" width={64} height={64} className="mb-4" />
            <a href="https://web.facebook.com/share/p/atSGPrjNmY1SEWQV/" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Browse
            </button>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Iso;