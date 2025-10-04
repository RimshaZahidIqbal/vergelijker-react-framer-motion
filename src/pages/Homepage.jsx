import React from 'react'
import Navbar from '../components/sections/Navbar'
import CompareSection from '../components/sections/CompareSection'
import CardSection from '../components/sections/CardSection'
import InfoSection from '../components/sections/InfoSection'
import InsuranceSection from '../components/sections/InsuranceSection'
import Slider from '../components/ui/Slider'
import sliderData from '../utils/SliderData'
import BrandSection from '../components/sections/BrandSection'
import ComparisonSection from '../components/sections/ComparisonSection '
const Homepage = () => {
    return (
        <div className='p-1 md:p-6 lg:p-12 xl:p-24 2xl:p-32 overflow-x-hidden'>
            <Navbar />
            <CompareSection />

            <br />
            {/* <AnimatedButton /> */}

            <CardSection />
            <InsuranceSection />
            <InfoSection />

            <Slider items={sliderData} />
            <ComparisonSection />
            <BrandSection />

        </div>
    )
}

export default Homepage