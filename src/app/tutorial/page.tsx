"use client";

import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { useRouter } from 'next/navigation'; // Import useRouter to redirect on exit

const Tutorial: React.FC = () => {
  const router = useRouter(); // Initialize router for navigation

  const videos = [
    { 
      id: "bwjCaNk60Mo", 
      title: "HOW TO SETUP WIFI5 E-LOAD",
      embedUrl: "https://www.youtube.com/embed/bwjCaNk60Mo?si=3PNrQoCaLgcfYqXh"
    },
    { 
      id: "uY13nKcIGW", 
      title: "WIFI5-SOFT HOW TO BIND A LAN BASE SUB VENDO TO MAIN", 
      embedUrl: "https://www.youtube.com/embed/uY13nKcIGW4?si=ghP0LV03YiHxBpCj"
    },
    { 
      id: "TyIYU-bkXxM", 
      title: "WIFI5-SOFT HOW TO SET UP AUTO SELECT VENDO W/ MANAGEABLE SWITCH (SINGLE MANAGEABLE SWITCH)",
      embedUrl: "https://www.youtube.com/embed/TyIYU-bkXxM?si=HjSIF3E1DpmB5GxP"
    },
    { 
      id: "HCnhJyDrKIQ", 
      title: "WIFI5-SOFT HOW TO FLASH SOFTWARE ON ESP32 OR ESP8266 & BIND TO MAIN",
      embedUrl: "https://www.youtube.com/embed/HCnhJyDrKIQ?si=_F3d7z0vJElqQ1g4"
    },
    { 
      id: "bFKsck-Vm5Y", 
      title: "WIFI5-SOFT HOW TO EDIT VENDO RATES", 
      embedUrl: "https://www.youtube.com/embed/bFKsck-Vm5Y?si=HVYxwv75f3wYS62q"
    },
    { 
      id: "F1impHjf7qQ", 
      title: "WIFI5-SOFT HOW TO USE ZEROTIER & NGROK IN THE SAME TIME.", 
      embedUrl: "https://www.youtube.com/embed/F1impHjf7qQ?si=tRce_OLGM_Vx-VzA"
    },
    { 
      id: "NRcVhlf7hMo", 
      title: "WIFI5-SOFT HOW TO EDIT WIFI NAME OR SSID", 
      embedUrl: "https://www.youtube.com/embed/NRcVhlf7hMo?si=Mx3aWNBdRIfYmMKw"
    },
    { 
      id: "OOFPtQY8cpQ", 
      title: "HOW TO USE WIFI5 ONLINE PAYMENT (BUY TIME & VOUCHER VIA GCASH/MAYA/SHOPPE PAY", 
      embedUrl: "https://www.youtube.com/embed/OOFPtQY8cpQ?si=YiD1cjvYLsSvMdfr"
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(true); // Modal state
  const [isTutorialVisible, setTutorialVisible] = useState(false); // Tutorial visibility state

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleConfirm = () => {
    setShowModal(false); // Hide modal
    setTutorialVisible(true); // Show tutorial content
  };

  const handleExit = () => {
    router.push('/'); // Navigate to homepage
  };

  return (
    <MainLayout>
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-600 p-6 rounded-lg max-w-sm text-center">
            <h2 className="text-xl font-semibold mb-4">All video tutorials are credited to their rightful owners.
              Any errors or faults are the responsibility of the video creators. Third-party applications have no
              authority to take action based on this content.
            </h2>
            <div className="flex justify-around">
              <button
                onClick={handleConfirm}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
              >
                Confirm
              </button>
              <button
                onClick={handleExit}
                className="px-6 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tutorial Content */}
      {isTutorialVisible && (
        <div>
          {/* Header Section */}
          <div className="bg-[#1F2937] text-white text-center p-4 mb-10 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Tutorials</h1>
            
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/2"
            />
          </div>

          {/* Video Grid Section */}
          <div className="container mx-auto mb-10 px-15">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredVideos.map((video, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  {/* Video Title */}
                  <p className="mt-2 text-white font-medium text-center">{video.title}</p>
                </div>
              ))}
            </div>

            {/* Message if no videos match */}
            {filteredVideos.length === 0 && (
              <p className="text-center text-gray-500 mt-6">No tutorials match your search.</p>
            )}
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Tutorial;
