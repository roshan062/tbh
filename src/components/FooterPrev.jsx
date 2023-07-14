import React from 'react'
import styles from './FooterPrev.module.css'
import { FaLinkedinIn } from 'react-icons/fa';
import { SlSocialInstagram } from 'react-icons/sl';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const FooterPrev = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_logo}>
                    <div>
                        <h2>The <br />Big <br />House</h2>
                    </div>
                    <div className={styles.footer_title}>
                        <h2> The Big is a charity transforming the lives of care leaver and at-risk young people
                            through the power of performance.</h2>
                    </div>
                    <div className={styles.footer_references}>
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
                <div className={styles.copyright_social}><p>©️The Big House Theatre</p>
                    <div className={styles.footer_social_icons}>
                        <FaFacebookF />
                        <BsTwitter />
                        <SlSocialInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterPrev