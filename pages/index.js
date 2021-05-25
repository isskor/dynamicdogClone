import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import animate from '../styles/Animate.module.css';
import { InView } from 'react-intersection-observer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dynamic Dog / Dynamic Dog Digital Agency » Dynamic Dog</title>
        <meta name='description' content />
        <link
          rel='shortcut icon'
          href='https://dynamicdog.se/wp-content/themes/dynamicdog/favicon.ico'
        />
      </Head>
      <div>
        <div className={`row ${styles.background}`}></div>
        <div className='row justify-content-lg-end'>
          <div className={`col-lg-6  ${styles.text_block} ${styles.whatWeDo}`}>
            <h3>What we do</h3>
            <p>
              Founded in the glory days of 1999. We are a strategic digital
              agency that develops concepts and digital solutions using cutting
              edge technology. We go all in and always with a big heart. And we
              love good design with a purpose.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className={`col ${styles.text_block_alt}`}>
            <div className='container'>
              <img
                src='https://dynamicdog.se/wp-content/themes/dynamicdog/img/herewecome.png'
                alt='text - Here we come'
              />
              <p>
                We have now opened our Stockholm office and we are very excited
                about that. We are also happy to welcome Anna Åkerlund as
                partner and CEO for the Stockholm business. Anna comes from
                Hyper Island where she was Head of Tailored Learning in Sweden
                and has helped companies and individuals adapt and thrive in the
                new digital landscape.
              </p>
              <p>
                The one thing we need now is talented, creative and happy people
                to become a part of our growing team and join us in creating
                great value for our clients.
              </p>
              <p>
                And, we want to work with new clients as well! Clients that can
                challenge us with creative and complex assignments. And where we
                can help to achieve their goals.
              </p>

              <p> Hope to see you in Stockholm soon! </p>
            </div>
          </div>
        </div>
        <div
          className={`row align-items-lg-center ${styles.services}  ${animate.animation_block}`}
        >
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`col-lg-6  ${styles.text_block}  ${animate.t_down} ${
                  inView && animate.slideUp
                } `}
              >
                <h3>Services</h3>
                <h2>
                  We offer highly skilled strategy, content and technology
                  solutions for web, social channels and mobile platforms.
                </h2>
                <p>
                  Our broad expert knowledge is our strength. We do everything
                  from digital strategy, requirement analysis and digital
                  communication to Design/UX and development of digital
                  projects. And of course hard core cutting edge programming.
                </p>
              </div>
            )}
          </InView>
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`col-lg-6 text-center   ${styles.img_block} ${
                  animate.t_down
                }  ${inView && animate.slideUp}  `}
              >
                <img
                  src='https://dynamicdog.se/wp-content/uploads/2016/10/snurran_400x400-1.png'
                  alt=''
                />
              </div>
            )}
          </InView>
        </div>
        <div className={`row  ${styles.partners}`}>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <img src='https://dynamicdog.se/wp-content/uploads/2016/08/EpiPartner2-1.png' />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <img src='https://dynamicdog.se/wp-content/uploads/2018/01/registered-partner-logo-1.png' />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <img src='https://dynamicdog.se/wp-content/uploads/2016/08/wordpress.png' />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-3'>
            <img src='https://dynamicdog.se/wp-content/uploads/2016/08/google.png' />
          </div>
        </div>
        <div
          className={`row align-items-lg-center ${styles.awards} ${styles.text_block} ${animate.animation_block}`}
        >
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`col-lg-6  ${animate.t_down}  ${
                  inView && animate.slideUp
                }  `}
              >
                <blockquote>
                  We put the right expertise in the right place, in order to add
                  the utmost digital value to our clients' business
                </blockquote>
              </div>
            )}
          </InView>
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`col-lg-6  ${animate.t_down}  ${
                  inView && animate.slideUp
                }  `}
              >
                <img
                  src='https://dynamicdog.se/wp-content/uploads/2016/05/sdp-1.png'
                  alt='Svenska Designpriset logo'
                />
                <p>
                  We have been awarded with both gold and silver in Svenska
                  Designpriset
                </p>
              </div>
            )}
          </InView>
        </div>
      </div>
    </>
  );
}
