import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-300 mb-6">
          Welcome to our website! We are a team of passionate individuals dedicated to providing high-quality services and products to our customers.
        </p>

        {/* Mission, Values, and Team Section */}
        <section className="flex flex-wrap justify-center mt-6 gap-4">
          {[
            {
              title: "Our Mission",
              content:
                "Our mission is to provide innovative solutions that meet the needs of our customers and exceed their expectations.",
            },
            {
              title: "Our Values",
              content:
                "We value integrity, teamwork, and customer satisfaction. We strive to build long-term relationships with our customers and partners.",
            },
            {
              title: "Our Team",
              content:
                "Our team consists of experienced professionals who are passionate about what they do. We are committed to delivering high-quality results and exceeding our customers' expectations.",
            },
          ].map((section, index) => (
            <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-4">
              <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
              <p className="text-gray-300">{section.content}</p>
            </div>
          ))}
        </section>

        {/* Services and Products Section */}
        <section className="flex flex-wrap justify-center mt-6 gap-4">
          {[
            {
              title: "Our Services",
              items: ["Service 1", "Service 2", "Service 3"],
            },
            {
              title: "Our Products",
              items: ["Product 1", "Product 2", "Product 3"],
            },
          ].map((section, index) => (
            <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-4">
              <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300 mb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
