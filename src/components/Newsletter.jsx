import React from 'react'

import Button from './Button.jsx'

const Newsletter = () => {
  return (
    <section className="w-full py-16 text-white px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 mb-10 lg:mt-10">
          <h3 className="md:text-4l sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h3>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className="my-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <Button>Notify Me</Button>
          </div>
          <p>
            We care about the protection of your data. Read our{' '}
            <a href="#" className="text-[#00df9a] underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
