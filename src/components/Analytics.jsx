import React from 'react'

const Analytics = () => {
  // TODO Create Button component
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">
        <img src="/laptop.jpg" alt="Laptop" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h3 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">
            Manage Data Analytics Centrally
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed aspernatur hic odio
            quaerat fugiat nihil accusantium consectetur neque minima adipisci non sapiente possimus
            qui magni doloribus ratione ea, doloremque fugit.
          </p>
          <button className="bg-black text-[#00df9a] w-48 rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:opacity-80">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Analytics
