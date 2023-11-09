import React from 'react';
import ProjectCaseBox from './ProjectCaseBox';
import { Link } from 'react-router-dom';

const ProjectCase = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <div className="project-titles">
                <h6>Project & Case Studies</h6>
                <h2>Let’s Looks Our Global Projects</h2>
            </div>
            <div className="project-grid">
                <ProjectCaseBox title="Grow your business" image="src/assets/images/article-image1.png" imageAlt="hands holding business paper"/>
                <ProjectCaseBox title="Why your clients needs a responsive website" image="src/assets/images/article-image2.png" imageAlt="glasses tablets and pen on a table"/>
                <ProjectCaseBox title="Educate your employees to get better results" image="src/assets/images/article-image3.png" imageAlt="a mug and a calender on a desk"/>
                <ProjectCaseBox title="Business Insights is an important piece of your business" image="src/assets/images/article-image4.png" imageAlt="a laptop showing economic analysis"/>
            </div>
            <div className="project-btn">
                <Link className="btn-black" to="/projects">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></Link>  
            </div>
        </div>
    </section>
  )
}

export default ProjectCase