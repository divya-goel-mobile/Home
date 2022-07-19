//import Banner from '../../AppBanner/src/components/banner'
import {Banner} from '@app/appBanner'
import Claims from './components/Claims';
import Products from './components/Products';
import Testimonial from './components/Testimonial';

export default function Root(props) {
    return  (
      <>
    <Banner text={"Forget Everything You Know About Insurance"} subText={"Instant everything. Incredible prices. Big heart."}/>
    <div style={{height: 50}}></div>
    <Testimonial/>
    <Products />
    <Claims/>
    </>
    )
  ;
}
