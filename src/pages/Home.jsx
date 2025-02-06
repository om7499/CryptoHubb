import React from 'react'

import Herosection from '../components/common/Herosection';
import Specialities from '../components/common/Specialities';
import AboutSection from '../components/common/AboutSection';
import FetureSection from '../components/common/FetureSection';
import RoadMap from '../components/common/RoadMap';
import GreatEffeciency from '../components/common/GreatEffeciency';
import OutTeam from '../components/common/OutTeam';
import ContactUsSection from '../components/common/ContactUsSection';
const Home = () => {
  return (
    <>
      {/* Hero section */}
       <Herosection/>

       {/* all Specialities section */}
       <Specialities/>

       {/* About Section */}
       <AboutSection/>

       {/* Fetures Section */}
       <FetureSection/>

       {/* Road map section */}
       <RoadMap/>

       {/* best coin section */}
       <GreatEffeciency/>

       {/* Team Member section */}
       <OutTeam/>

       {/* contactus section */}
       <ContactUsSection/>
    </>
  )
}

export default Home
