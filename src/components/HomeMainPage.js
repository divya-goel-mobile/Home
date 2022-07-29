import React from 'react'
import InsuranceForLife from './InsuranceForLife'
import YourGoal from './yourGoal'
import WhatsHot from './whatsHot'
import PersonalizedInsight from './personalizedInsight'
import OurPurpose from './OurPurpose'
import '../styles/HomeMainPage.css'

export default function HomeMainPage() {
  return (
    <div className="home">
      <OurPurpose />
      <YourGoal />
      {/* <Testimonial/> */}
      <div style={{ height: 50 }}></div>
      <InsuranceForLife />
      <WhatsHot />
      <PersonalizedInsight />
    </div>
  )
}
