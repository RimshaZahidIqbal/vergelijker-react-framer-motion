import React from 'react'
import Navbar from '../components/sections/Navbar'
import CompareSection from '../components/sections/CompareSection'
import CardSection from '../components/sections/CardSection'
import InfoSection from '../components/sections/InfoSection'
import InsuranceSection from '../components/sections/InsuranceSection'

const Homepage = () => {
    return (
        <div className='p-1 md:p-6 lg:p-12 xl:p-24 2xl:p-32 '>
            <Navbar />
            <CompareSection />

            <br />
            {/* <AnimatedButton /> */}

            <CardSection />
            <InsuranceSection />
            <InfoSection />

        </div>
    )
}

export default Homepage