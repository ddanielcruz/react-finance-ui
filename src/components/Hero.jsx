import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

import Button from './Button.jsx'

const Hero = () => {
  const ref = useRef(null)

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ['BTC', 'ETH', 'SASS'],
      typeSpeed: 120,
      backSpeed: 140,
      loop: true
    })

    return () => typed.destroy()
  }, [])

  return (
    <section className="text-white">
      <div className="max-w-3xl -mt-24 w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold py-2">GROWING WITH DATA ANALYTICS</p>
        <h2 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h2>
        <div className="md:text-5xl sm:text-4xl text-xl font-bold flex justify-center items-center gap-1 sm:gap-2 pb-4">
          <p>Fast, flexible financing for</p>
          <span ref={ref} className="text-[#00df9a]" />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTC, ETH and SASS platforms!
        </p>

        <Button className="mx-auto">Get Started</Button>
      </div>
    </section>
  )
}

export default Hero
