import React from 'react'
import BlogCover from '../components/sections/BlogCover'
import Footer from '../components/sections/Footer'
import DiscoverSection from '../components/sections/DiscoverSection'
import ContactInfo from '../components/sections/ContactInfo '
import BrandSection from '../components/sections/BrandSection'
import LatestArticles from '../components/sections/LatestArticles'

const BlogListingpage = () => {
    return (
        <div className='p-1 md:p-1 lg:p-10 xl:p-22 2xl:p-30 overflow-x-hidden'>
            <BlogCover />
            <DiscoverSection />
            <LatestArticles />
            <ContactInfo />
            <BrandSection />
            <Footer />
        </div>
    )
}

export default BlogListingpage