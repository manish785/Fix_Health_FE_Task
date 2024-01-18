import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import HeroImage from "./HeroImage";
import BookingForm from "./BookingForm";
import Testimonials from "./Testimonials";


const LandingPage = () => {
    const location = useLocation();
    const [cityOverride, setCityOverride] = useState(null);
  
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const cityParam = urlParams.get('city');
  
      if (cityParam) {
        setCityOverride(cityParam);
      }
    }, [location.search]);
  
    return (
        <div style={{ background: '#1a1a1a', color: '#fff', minHeight: '100vh', display: 'flex' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '300px', margin: 'auto', marginTop: '0px' }}>
          <BookingForm cityOverride={cityOverride} />
        </div>
        <div style={{ flex: 2 }}>
          <HeroImage />
          <Testimonials />
        </div>
        {/* <div style={{ flex: 2}}>
          <Testimonials />
        </div> */}
      </div>
    );
};
  

export default LandingPage;