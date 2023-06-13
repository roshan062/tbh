import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footer-logo'>
                    <div>
                        <h2>The <br />Big <br />House</h2>
                    </div>
                    <div className='footer-title'>
                        <h2> The Big is a charity transforming the lives of care leaver and at-risk young people
                            through the power of performance.</h2>
                    </div>
                    <div className='footer-references'>
                        <div>BIG HOUSE
                            <p>About</p>
                            <p>Jobs</p>
                            <p>Divrersity, Equity & Inclusion</p>
                            <p>Press</p>
                        </div>
                        <div>JOIN US
                            <p>Become a member</p>
                            <p>Jobs at Big House</p>
                            <p>I work in care</p>
                            <p>Partnerships</p>
                        </div>

                        <div>SUPPORT US
                            <p>Donate</p>
                            <p>Volunteers</p>
                            <p>Partners</p>
                            <p>Press</p>
                        </div>

                        <div>HIRE US
                            <p>Event Space</p>
                            <p>WorkShops</p>
                            <p>Something else</p>
                            <p>Press</p>
                        </div>

                        <div>FOLLOW US
                            <p>About</p>
                            <p>Jobs</p>
                            <p>Divrersity, Equity & Inclusion</p>
                            <p>Press</p>
                        </div>
                    </div>
                </div>
                <div className='copyright-social'><p>©️The Big House Theatre</p><p>Insta Twitter Facebook</p></div>
            </footer>
        </>
    )
}

export default Footer