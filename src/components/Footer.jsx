import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare
} from 'react-icons/fa'

import FooterSection from './FooterSection.jsx'

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 items-center">
      <div>
        <h1 className="z-50 text-3xl font-bold text-[#00df9a]">
          <a href="#">REACT.</a>
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iure eius odio eveniet
          veniam illo!
        </p>
        <div className="flex justify-between md:w-3/4 my-6">
          <a href="#">
            <FaFacebookSquare size={30} />
          </a>
          <a href="#">
            <FaInstagram size={30} />
          </a>
          <a href="#">
            <FaTwitterSquare size={30} />
          </a>
          <a href="#">
            <FaGithubSquare size={30} />
          </a>
          <a href="#">
            <FaDribbbleSquare size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <FooterSection
          title="Solutions"
          items={['Analytics', 'Marketing', 'Commerce', 'Insights']}
        />
        <FooterSection
          title="Support"
          items={['Pricing', 'Documentation', 'Guides', 'API Status']}
        />
        <FooterSection title="Company" items={['About', 'Blog', 'Jobs', 'Press', 'Careers']} />
        <FooterSection title="Legal" items={['Claim', 'Policy', 'Terms']} />
      </div>
    </footer>
  )
}

export default Footer
