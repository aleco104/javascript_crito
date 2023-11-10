import React from 'react'
import MeetTeamBox from './MeetTeamBox'
import meetCarousel from '../assets/images/meet-carousel.svg'
import Button from '../generics/Button'


const MeetTeam = () => {
  return (
    <section className="meet-team">
        <div className="container">
            <div className="meet-team-top">
                <div className="meet-team-titles">
                    <h6>Meet Our Team</h6>
                    <h2>Experience Team Members</h2>
                </div>
                <div className="meet-team-btn">
                    <Button color="yellow" text="Browse Team" url="/ourteam"/> 
                </div>
            </div>
            <div className="meet-team-bottom">
                <div className="meet-team-boxes">
                    <MeetTeamBox name="Kristina Palmer" profession="Chef Operation Officer" image="src/assets/images/meet-team1.png" imageAlt="kristina palmer"/>
                    <MeetTeamBox name="Mark Aubri" profession="Senior Consultant" image="src/assets/images/meet-team2.png" imageAlt="Mark Aubri"/>
                    <MeetTeamBox name="Kimberly Hansen" profession="Senior Consultant" image="src/assets/images/meet-team3.png" imageAlt="Kimberly Hansen"/>
                    <MeetTeamBox name="Justin Willoman" profession="Senior Tech Consultant" image="src/assets/images/meet-team4.png" imageAlt="Justin Willoman"/>
                </div>   
                <div class="meet-team-carousel">
                    <img src={meetCarousel} alt="" />
                </div>
            </div>
        </div>
    </section>

  )
}

export default MeetTeam