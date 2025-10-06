import React from 'react'
import DetailCover from '../components/sections/DetailCover'
import LatestArticles from '../components/sections/LatestArticles'
import BrandSection from '../components/sections/BrandSection'
import Footer from '../components/sections/Footer'
import Blog from '../components/sections/Blog'
import TestimonialsSection from '../components/sections/TestimonialsSection'

const BlogDetailpage = () => {
    return (
        <div className='p-1 md:p-1 lg:p-10 xl:p-22 2xl:p-30 overflow-x-hidden'>

            <DetailCover />
            <Blog />
            <LatestArticles />
            <BrandSection />
            <TestimonialsSection theme="white" />
            <Footer />
        </div>
    )
}

export default BlogDetailpage