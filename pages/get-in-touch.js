import Head from 'next/head';
import React from 'react';
import styles from '../styles/Contact.module.css';
import animate from '../styles/Animate.module.css';
import { InView } from 'react-intersection-observer';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Dynamic Dog / Get in Touch » Dynamic Dog</title>
        <meta name='description' content />
        <link
          rel='shortcut icon'
          href='https://dynamicdog.se/wp-content/themes/dynamicdog/favicon.ico'
        />
      </Head>
      <main>
        <div className='row'>
          <div className={styles.background}></div>
        </div>
        <div className='row justify-content-lg-end'>
          <div className={`col-lg-8 ${styles.addresses_block}`}>
            <div className={`row ${styles.address_block}`}>
              <div className={`col-12 col-sm-6 ${styles.address}`}>
                <h3>Malmö</h3>
                <p>
                  <a target='_blank' href='https://goo.gl/maps/fEgx1c3R5DE2'>
                    Dynamic Dog digital agency
                    <br />
                    Engelbrektsgatan 6 <br />
                    211 33 Malmö <br />
                    Sweden
                  </a>
                </p>
              </div>
              <div className={`col-12 col-sm-6 ${styles.address}`}>
                <h3>Helsingborg</h3>
                <p>
                  <a target='_blank' href='https://goo.gl/maps/XEX8ESVs4Zo'>
                    Dynamic Dog digital agency
                    <br />
                    Bredgatan 11 <br />
                    252 25 Helsingborg <br />
                    Sweden
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`row ${styles.contact_block}`}>
          <div
            className={`col-lg-6 ${styles.text_block} ${animate.animation_block}`}
          >
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={` ${animate.t_down} ${inView && animate.slideUp} `}
                >
                  <h2>Contact us</h2>
                  <p>
                    We love to meet new people! Get in touch with us about new
                    projects, jobs, internships or any other enquiry. Or just
                    say hi! Get hold of the right person below.
                    <br />
                    <br />
                    +46 40 630 46 30 <br />
                    <a href='mailto:info@dynamicdog.se'>info@dynamicdog.se</a>
                  </p>
                </div>
              )}
            </InView>
          </div>
        </div>
        <div className={`row ${styles.contact_persons}`}>
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`col-md-6 ${styles.persons_left} ${animate.t_down} ${
                  inView && animate.slideUp
                } `}
              >
                <h4>New Business</h4>
                <span>Björn Alexandersson</span>
                <p>CEO/Creative Strategist</p>
                <a href='mailto:bjorn.alexandersson@dynamicdog.se'>
                  bjorn.alexandersson@dynamicdog.se
                </a>
                <h4>Jobs/Internships</h4>
                <span>Mathias Olofsson</span>
                <p>Head of Operations</p>
                <p>+46 733 73 46 31</p>
                <a href='mailto:mathias.olofsson@dynamicdog.se'>
                  mathias.olofsson@dynamicdog.se
                </a>
              </div>
            )}
          </InView>
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`col-md-6 ${styles.persons_right} ${
                  animate.t_down
                } ${inView && animate.slideUp} `}
              >
                <h4>Current Business</h4>
                <span>Celie Gunnarsson</span>
                <p>Project Manager</p>
                <a href='mailto:celie.gunnarsson@dynamicdog.se'>
                  celie.gunnarsson@dynamicdog.se
                </a>
                <span>Jennifer Meurling</span>
                <p>Project Manager </p>
                <a href='mailto:jennifer.meurling@dynamicdog.se'>
                  jennifer.meurling@dynamicdog.se
                </a>
                <span>Jenny Hedin</span>
                <p>Project Manager </p>
                <a href='mailto:jenny.hedin@dynamicdog.se'>
                  jenny.hedin@dynamicdog.se
                </a>
              </div>
            )}
          </InView>
        </div>
      </main>
    </>
  );
};

export default Contact;
