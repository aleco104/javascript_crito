import React from 'react';
import chooseUs from '../assets/images/choose-us.png';
import ChooseUsBox from './ChooseUsBox';

const ChooseUs = () => {
  return (
    <section className="choose-us"> 
        <div className="container">
            <div className="choose-us-titles">
                <h6>Why Choose Us</h6>
                <h2>Why We Are The<br/>Best Business<br/>Consulting Agency</h2>
            </div>
            <div className="choose-us-boxes">
                <ChooseUsBox title="Process Excellence" text="Lorem, ipsum dolor sit amet consectetur." image="src/assets/images/choose1.svg" imageAlt="a thumb up" />
                <ChooseUsBox title="Strategic Planning" text="Lorem, ipsum dolor sit amet consectetur." image="src/assets/images/choose2.svg" imageAlt="a pentagon" />
                <ChooseUsBox title="Experience Design" text="Lorem, ipsum dolor sit amet consectetur." image="src/assets/images/choose3.svg" imageAlt="a scale" />
                <ChooseUsBox title="Artificial Inteligence" text="Lorem, ipsum dolor sit amet consectetur." image="src/assets/images/choose4.svg" imageAlt="a brain" />
            </div>
            <div className="choose-us-img">
                <img src={chooseUs} alt="two woman sitting by a table talking" />
            </div>
            <div className="choose-us-rectangle">
            </div>
        </div>
    </section>
  )
}

export default ChooseUs