import React from 'react'
import customer1 from '../assets/images/customer1.svg'
import customer2 from '../assets/images/customer2.svg'
import customer3 from '../assets/images/customer3.svg'
import customer4 from '../assets/images/customer4.svg'
import customer5 from '../assets/images/customer5.svg'


const Customers = () => {
  return (
    <section className="customers">
      <div className="container">
        <img src={customer1} className="customer1" alt="paperz" />
        <img src={customer2} className="customer2" alt="dorfus" />
        <img src={customer3} className="customer3" alt="martino" />
        <img src={customer4} className="customer4" alt="square" />
        <img src={customer5} className="customer5" alt="gobana" />
      </div>
    </section>
  )
}

export default Customers