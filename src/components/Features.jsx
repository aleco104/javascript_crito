import React from 'react';
import FeaturesBox from './FeaturesBox';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className="features">
        <div className="container">
            <div className="features-border"></div>
            <div className="section-left">
                <h6>Features</h6>
                <h2>Our Accounting is trusted by thousand of companies</h2>
                <div className="features-left-btn">
                    <Link to="/features" className="btn-yellow">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
                </div>
            </div>
            <div className="section-right">
                <FeaturesBox title="Business Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." image="src/assets/images/features1.svg" imageAlt="business advice"/>
                <FeaturesBox title="Startup Business" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." image="src/assets/images/features2.svg" imageAlt="startup business"/>
                <FeaturesBox title="Financial Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." image="src/assets/images/features3.svg" imageAlt="financial advice"/>
                <FeaturesBox title="Risk Management" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." image="src/assets/images/features4.svg" imageAlt="risk management"/>
            </div>
        </div>
    </section>
  )
}

export default Features