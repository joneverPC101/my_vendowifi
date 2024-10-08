import React from 'react'
import MainLayout from '@/components/layouts/MainLayout'

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-300 mb-6">
          Welcome to our website! We are a team of passionate individuals dedicated to providing high-quality services and products to our customers.
        </p>
        <section className="flex flex-wrap justify-center mt-6">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-300">
              Our mission is to provide innovative solutions that meet the needs of our customers and exceed their expectations.
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h2 className="text-2xl font-bold mb-2">Our Values</h2>
            <p className="text-gray-300">
              We value integrity, teamwork, and customer satisfaction. We strive to build long-term relationships with our customers and partners.
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h2 className="text-2xl font-bold mb-2">Our Team</h2>
            <p className="text-gray-300">
              Our team consists of experienced professionals who are passionate about what they do. We are committed to delivering high-quality results and exceeding our customers' expectations.
            </p>
          </div>
        </section>
        <section className="flex flex-wrap justify-center mt-6">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h2 className="text-2xl font-bold mb-2">Our Services</h2>
            <ul>
              <li className="text-gray-300 mb-2">Service 1</li>
              <li className="text-gray-300 mb-2">Service 2</li>
              <li className="text-gray-300 mb-2">Service 3</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h2 className="text-2xl font-bold mb-2">Our Products</h2>
            <ul>
              <li className="text-gray-300 mb-2">Product 1</li>
              <li className="text-gray-300 mb-2">Product 2</li>
              <li className="text-gray-300 mb-2">Product 3</li>
            </ul>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default AboutPage