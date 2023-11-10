import React from 'react'
import TestimonialBox from './TestimonialBox'
import Button from '../generics/Button'

const Testimonial = () => {
  return (
    <section>
        <div className="testimonial">
            <div className="container">
                <div className="testimonial-white-box"></div>
                <div className="testimonial-titles">
                    <h6>Testimonial</h6>
                    <h2>What Our Clients Say</h2>
                </div>
                <div className="testimonial-boxes">
                    <TestimonialBox text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" name="Cassandra Warren" profession="Business Manager, Dorfus" image="src/assets/images/testimonial-cassandra.png" imageAlt="Cassandra Warren" />
                    <TestimonialBox text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" name="Amanda Tulling" profession="Senior Developer, Square" image="src/assets/images/testomonial-amanda.png" imageAlt="Amanda Tulling" />
                    <TestimonialBox text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" name="Jack McDogglas" profession="Key Account Manager, Gobona" image="src/assets/images/testimonial-jack.png" imageAlt="Jack McDogglas" />  
                </div>
                <div className="all-reviews-btn">
                    <Button color="black" text="All Reviews" url="/reviews"/> 
                </div>
            </div>    
        </div>
    </section>

  )
}

export default Testimonial