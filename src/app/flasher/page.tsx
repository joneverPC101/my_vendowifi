import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const Flasher: React.FC = () => {
  return (
    <MainLayout>
      {/* Header Section */}
      <div className="bg-[#1F2937] text-white text-center p-4 mb-10">
        <h1 className="text-3xl font-bold">Flasher</h1>
      </div>

      {/* Tool Sections */}
      {[
        {
          imgSrc: "/rufus.png",
          title: "Rufus",
          description:
            "Rufus is a free and open-source portable application for Microsoft Windows that allows users to format and create bootable USB flash drives or Live USBs. It is particularly useful for installing operating systems and flashing BIOS or other firmware.",
          link: "https://rufus.ie/en/",
        },
        {
          imgSrc: "/balena.png",
          title: "Balena Etcher",
          description:
            "Balena Etcher is a free and open-source utility used for writing image files such as .iso and .img files, as well as zipped folders onto storage media to create live SD cards and USB flash drives. Balena Etcher is super user-friendly and has a bunch of cool features that make it easy to prepare your devices for use.",
          link: "https://etcher.balena.io/",
        },
        {
          imgSrc: "/cmd.webp",
          title: "DiskPart",
          description:
            "DiskPart is a command-line disk partitioning utility included in Windows operating systems. It allows users to manage disks, partitions, and volumes through text-based commands, providing flexibility and control over disk configurations without a graphical user interface.",
          link: "https://www.filehorse.com/download-microsoft-diskpart/",
        },
        {
          imgSrc: "/wifi5.png",
          title: "WiFi5-Soft Tool",
          description:
            "WiFi5-Soft Tool is a utility that provides command-line disk partitioning functionality within Windows operating systems. It enables users to manage disks, partitions, and volumes with control and flexibility through a text-based interface.",
          link: "https://files.wifi5-soft.com/?dir=others",
        },
      ].map((tool, index) => (
        <div
          key={index}
          className="flex flex-col items-center mt-10 gap-8 sm:flex-row sm:justify-center"
        >
          <div className="w-full sm:w-3/4 md:w-1/2 bg-transparent rounded-md shadow-md p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <img src={tool.imgSrc} alt={`${tool.title} Logo`} className="w-8 h-8 sm:w-10 sm:h-10" />
              <h2 className="text-xl sm:text-2xl font-bold">{tool.title}</h2>
            </div>
            <p className="text-gray-300 mb-6">{tool.description}</p>
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Download
            </a>
          </div>
        </div>
      ))}
    </MainLayout>
  );
};

export default Flasher;
