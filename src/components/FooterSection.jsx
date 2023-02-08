import React from 'react'

const FooterSection = ({ title, items = [] }) => {
  return (
    <div>
      <h4 className="font-medium text-gray-400">{title}</h4>
      <ul>
        {items.map(item => (
          <li key={item} className="py-2 text-sm">
            <a href="#" className="hover:opacity-80">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterSection
