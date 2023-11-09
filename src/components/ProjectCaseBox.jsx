import React from 'react'

const ProjectCaseBox = ({ title, image, imageAlt }) => {
  return (
    <>
        <div className="project-box">
            <div className="image-box">
                <img src={image} alt={imageAlt} />
            </div>
            <h3>{title}</h3>
            <div className="box-btn">
                <a href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </>
  )
}

export default ProjectCaseBox