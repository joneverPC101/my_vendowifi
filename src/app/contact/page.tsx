// contact/page.tsx
'use client'  // <-- Make sure this is at the top

import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  // Handle changes in the form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/submitContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        console.error('API error:', data.message);  // Log the error message from the API
        setStatusMessage(data.message || 'Something went wrong.');
        return;
      }

      const data = await res.json();
      setStatusMessage(data.message || 'Your message has been sent successfully!');
    } catch (error) {
      console.error('An error occurred:', error);  // Log the error to understand the issue
      setStatusMessage('An error occurred. Please try again.');
    }
  };

  return (
    <MainLayout>
      <div className="bg-[#1F2937] text-white text-center p-4 mb-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </div>
      <div className="max-w-md mx-auto p-4 mt-4 mb-10 border border-gray-300 rounded-md">
        <h2 className="text-lg font-bold mb-4">Fill out the form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-400">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Send</button>
        </form>

        {/* Display status message */}
        {statusMessage && <p className="mt-4">{statusMessage}</p>}
      </div>
    </MainLayout>
  );
};

export default Contact;
