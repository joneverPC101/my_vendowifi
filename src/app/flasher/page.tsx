import React from 'react'
import MainLayout from '@/components/layouts/MainLayout'

const flasher: React.FC = () => {
  return (
    <MainLayout>
        <div className="bg-[#1F2937] text-white text-center p-4 mb-10">
        <h1 className="text-3xl font-bold">Flasher</h1>
      </div>
    </MainLayout>
  )
}

export default flasher