import React from 'react'
import MainLayout from '@/components/layouts/MainLayout'

const contact: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-[#1F2937] text-white text-center p-4 mb-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </div>
      <div className="max-w-md mx-auto p-4 mt-4 mb-10 border border-gray-300 rounded-md">
        <h2 className="text-lg font-bold mb-4">Fill out the form</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
            <input type="text" id="name" name="name" className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
            <input type="email" id="email" name="email" className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-400">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
            <textarea id="message" name="message" className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Send</button>
        </form>
      </div>
    </MainLayout>
  )
}

export default contact