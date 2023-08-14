import React from 'react'
import styles from './Footer.module.css'
import { FaLinkedinIn } from 'react-icons/fa';
import { SlSocialInstagram } from 'react-icons/sl';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_logo}>
                    <div>
                        <h2>The <br />Big <br />House</h2>
                    </div>
                    <div className={styles.news_letter}>SUBSCRIBE TO OUR NEWS LETTER</div>
                    <div className={styles.subscribe}>
                        <input type='text' placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className={styles.footer_area}>
                    <div className={styles.footer_content_address}>
                        <p className={styles.footer_content}>
                            The Big House is a charity transforming the lives of care leavers and at-risk young people
                            through the power of performance.
                        </p>
                        <p className={styles.address}>
                            151 Englefield Road <br /> London <br /> N13LH
                        </p>
                        <p className={styles.contact}>
                            T: 0207923 9655 <br />
                            <Link to='mailto:example.com'>Email Us</Link>
                        </p>
                    </div>

                    <div className={styles.quick_links}>
                        <h4>Quick Links</h4>
                        <p>Donate</p>
                        <p>Become A Member</p>
                        <p>Volunteer</p>
                        <p>Hire Us</p>
                    </div>
                    <div className={styles.info}>
                        <h4>INFO</h4>
                        <p>Policies</p>
                        <p>Term</p>
                        <p>FAQ</p>
                        <p>Casting</p>
                    </div>
                    <div className={styles.footer_social_icons}>
                        <Link to='facebook'>
                            <FaFacebookF />
                        </Link>
                        <Link to='twitter'>
                            <BsTwitter />
                        </Link>
                        <Link to='instagram'>
                            <SlSocialInstagram />
                        </Link>
                        <Link to='linkedIn'>
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
                <p className={styles.copyright}>©️THE BIG HOUSE THEATRE | Charity Number 1151106</p>
            </footer>
        </>
    )
}

export default Footer