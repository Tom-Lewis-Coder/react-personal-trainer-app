import React from 'react'

import { Navbar } from '../../Components/index.js'
import {
    Header,
    About,
    Services,
    Contact,
    Workout,
    Blog,
    Reviews,
    Footer
} from '../../Container/index.js'

const AppMain = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Services />
            <Blog />
            <Workout />
            <Contact />
            <Reviews />
            <Footer />
        </div>
    )
}

export default AppMain
