//import Banner from '../../AppBanner/src/components/banner'
// import {Banner} from '@app/appBanner'
import Claims from './components/Claims'
import InsuranceForLife from './components/InsuranceForLife'
import Products from './components/Products'
import Testimonial from './components/Testimonial'
import YourGoal from './components/yourGoal'
import WhatsHot from './components/whatsHot'
import PersonalizedInsight from './components/personalizedInsight'
import OurPurpose from './components/OurPurpose'
import HomePage from './components/Main'
import { BrowserRouter } from 'react-router-dom'
export default function Root(props) {
  // return  (
  //   <div style={{backgroundColor:"#f8f9fa"}}>
  //     <OurPurpose />
  //     <YourGoal/>

  //     {/* <Testimonial/> */}
  // {/* <Banner text={"Forget Everything You Know About Insurance"} subText={"Instant everything. Incredible prices. Big heart."}/> */}
  // <div style={{height: 50}}></div>
  // <InsuranceForLife />
  // <WhatsHot/>
  // <PersonalizedInsight/>
  // </div>
  // )

  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  )
}
