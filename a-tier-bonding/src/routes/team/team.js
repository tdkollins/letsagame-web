import {React} from 'react';
import "./team.css"
import TeamProfile from '../../components/TeamProfile/teamProfile'
const dummyTeamMember = [{
  name: 'Mcnuggies',
  pfpPath: 'dummy',
  description: "here's my blah blah message, here's my blah blah message, here's my blah blah message,here's my blah blah message,here's my blah blah message", 
  socialMediaURLs:{
    twitter: 'https://twitter.com/Lets_A_Game' ,
    instagram: "https://www.instagram.com/lets_a_game/?hl=en",
  }
},
{
  name: 'Mcnuggies2',
  pfpPath: 'dummy2',
  description: "here's my blah blah message, here's my blah blah message, here's my blah blah message,here's my blah blah message,here's my blah blah message", 
  socialMediaURLs:{
    twitch: 'https://www.twitch.tv/phieki' ,
  }
}]; 
function Team() {
  return (
    <div className="profiles-container">
      {dummyTeamMember.map((member)=> {
        return (
          <div className="member-container">
          <TeamProfile member={member}/> 
          </div> 
        )
      })}
       
    </div>
  )
}

export default Team; 