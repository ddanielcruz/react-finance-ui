import React from 'react'

import Button from './Button.jsx'

const PLANS = [
  {
    id: 1,
    image: 'single.png',
    name: 'Single User',
    price: 149,
    storage: '500 GB',
    users: 1,
    traffic: '2 GB'
  },
  {
    id: 2,
    image: 'double.png',
    name: 'Partnership',
    price: 199,
    storage: '1 TB',
    users: 3,
    traffic: '10 GB'
  },
  {
    id: 3,
    image: 'triple.png',
    name: 'Group Account',
    price: 299,
    storage: '5 TB',
    users: 10,
    traffic: '20 GB'
  }
]

const Pricing = () => {
  return (
    <section className="w-full py-40 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {PLANS.map((plan, idx) => (
          <div
            key={plan.id}
            className={`w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 ${
              idx === 1 ? 'my-8 md:my-0 bg-gray-100' : 'my-4'
            }`}
          >
            <img src={plan.image} alt={plan.name} className="w-20 mx-auto -mt-12 bg-transparent" />
            <h3 className="text-2xl font-bold text-center py-8">{plan.name}</h3>
            <p className="text-center text-4xl font-bold">${plan.price}</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">{plan.storage} Storage</p>
              <p className="py-2 border-b mx-8">
                {plan.users} Granted User{plan.users === 1 ? '' : 's'}
              </p>
              <p className="py-2 border-b mx-8">Send up to {plan.traffic}</p>
            </div>
            <Button variant={idx === 1 ? 'secondary' : 'primary'}>Start Trial</Button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
