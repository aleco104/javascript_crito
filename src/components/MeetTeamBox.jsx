import React from 'react'

const MeetTeamBox = ({name, profession, image, imageAlt}) => {
  return (
    <div className="meet-team-box">
        <img src={image} alt={imageAlt} />
        <h3>{name}</h3>
        <p>{profession}</p>
    </div>
  )
}

export default MeetTeamBox