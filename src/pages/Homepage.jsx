import React from 'react'
import Navbar from '../components/sections/Navbar'
import CompareSection from '../components/sections/CompareSection'
import CardSection from '../components/sections/CardSection'
import InfoSection from '../components/sections/InfoSection'
import InsuranceSection from '../components/sections/InsuranceSection'
import Slider from '../components/ui/Slider'
import sliderData from '../utils/SliderData'
import BrandSection from '../components/sections/BrandSection'
import Footer from '../components/sections/Footer'
import ComparisonSection from '../components/sections/ComparisonSection '
import HeroSection from '../components/sections/HeroSection'
const Homepage = () => {
    return (
        <div className='p-1 md:p-1 lg:p-10 xl:p-22 2xl:p-30 overflow-x-hidden'>
            <Navbar />
            <HeroSection />
            <br />
            <CardSection />
            <InsuranceSection />
            <ComparisonSection />
            <CompareSection />
            <InfoSection />
            <Slider items={sliderData} />
            <BrandSection />
            <br />
            {/* <AnimatedButton /> */}
            <Slider items={sliderData} />
            <BrandSection />
            <Footer />
        </div>
    )
}

export default Homepage