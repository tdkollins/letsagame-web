import {React} from 'react';
import "./team.css"
import TeamProfile from '../../components/TeamProfile/teamProfile'

const dummyTeamMember = [{
  name: 'Mcnuggies',
  pfpPath: '../../assets/background1.jpg',
  description: "here's my blah blah message", 
  socialMediaURLs: {
    twitter: 'https://twitter.com/Lets_A_Game',
    instagram: "https://www.instagram.com/lets_a_game/?hl=en",
  }
}]; 
function Team() {
  return (
    <div>
      <TeamProfile members={dummyTeamMember}/>  
    </div>
  )
}

export default Team; 