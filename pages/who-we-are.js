import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styles from '../styles/About.module.css';
import homeStyles from '../styles/Home.module.css';

import animate from '../styles/Animate.module.css';
import { InView } from 'react-intersection-observer';
import Counter from '../components/Counter';

const maxAge = 35;
const trainers = 11;
const maxCookies = 74385;

const About = () => {
  const [poke, setPoke] = useState(0);
  const [cookies, setCookies] = useState(0);
  const [avgAge, setAvgAge] = useState(0);
  let i = 0;

  // useEffect(() => {
  //   let eatCookie = setInterval(() => {
  //     if (cookies < 50) return setCookies(cookies + 1);
  //     clearInterval(eatCookie);
  //   }, 10);

  //   return () => {
  //     clearInterval(eatCookie);
  //   };
  // });

  // useEffect(() => {
  //   let pokeTime = setInterval(() => {
  //     if (poke < trainers) {
  //       setPoke(poke + 1);
  //     }
  //     if (avgAge < maxAge) return setAvgAge(avgAge + 1);
  //     clearInterval(pokeTime);

  //     return () => {
  //       clearInterval(pokeTime);
  //     };
  //   }, 100);
  // }, [poke, avgAge]);

  return (
    <>
      <Head>
        <title>Dynamic Dog / Who We Are » Dynamic Dog</title>
        <meta name='description' content />
        <link
          rel='shortcut icon'
          href='https://dynamicdog.se/wp-content/themes/dynamicdog/favicon.ico'
        />
      </Head>
      <div>
        <div className={`row ${styles.background}`}></div>
        <div className='row justify-content-lg-end'>
          <div
            className={`col-lg-6  ${homeStyles.text_block} ${homeStyles.whatWeDo}`}
          >
            <h3>What we do</h3>
            <p>
              Founded in the glory days of 1999. We are a strategic digital
              agency that develops concepts and digital solutions using cutting
              edge technology. We go all in and always with a big heart. And we
              love good design with a purpose.
            </p>
          </div>
        </div>
        <div className={`row `}>
          <div
            className={`col  ${styles.text_block} ${animate.animation_block} `}
          >
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`${animate.t_down} ${inView && animate.slideUp} `}
                >
                  <h2>The crew</h2>
                  <p>
                    We are 20 highly skilled individuals and continuously
                    growing. We have our HQ in Malmoe, a newly established
                    office in Stockholm and a smaller office at Mindpark in
                    Helsingborg. We also have a development team in Minsk,
                    Belarus. Together we can size up our development teams very
                    fast and reduce costs for our customers. If you like to join
                    our awesome team here in Sweden, do not hesitate to contact
                    Helena today! She loves meeting new exciting people, and to
                    eat cookies.
                  </p>
                </div>
              )}
            </InView>
          </div>
        </div>
        <div className={`row ${styles.funFacts}`}>
          <ul>
            <li>
              <Counter
                title={'Pokémon Trainers'}
                maxNum={trainers}
                interval={100}
              />
            </li>
            <li>
              <Counter
                title={'   Cookies eaten'}
                maxNum={maxCookies}
                interval={10}
              />
            </li>
            <li>
              <Counter
                title={'Age in average'}
                maxNum={maxAge}
                interval={100}
              />
            </li>
          </ul>
        </div>
        <div className={`row `}>
          <div
            className={`col  ${styles.text_block} ${styles.gray}  ${animate.animation_block}`}
          >
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={` ${animate.t_down} ${inView && animate.slideUp} `}
                >
                  <h2>How we do our magic</h2>
                  <p>
                    We strive to have a close and long term relationship with
                    our customers. The more we understand their brand, processes
                    and needs, the greater value we can create for them. We are
                    our clients' best friend in the digital world. Our projects
                    are based on our three basic principles; being client
                    focused, innovative and responsible. We always go that extra
                    mile and constantly ask ourselves how to be even better.
                  </p>
                </div>
              )}
            </InView>
          </div>
        </div>
        <div
          className={`row align-items-lg-center ${styles.testimonails} ${styles.text_block}  ${animate.animation_block}`}
        >
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`col-lg-6 ${styles.quote}  ${animate.t_down} ${
                  inView && animate.slideUp
                } `}
              >
                <blockquote>
                  “The key is to set realistic customer expectations and then
                  not just meet them, but to exceed them – preferably in
                  unexpected and helpful ways.”
                </blockquote>
                <span>Richard Branson</span>
              </div>
            )}
          </InView>
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`col-lg-6 ${styles.awards}  ${animate.t_down} ${
                  inView && animate.slideUp
                } `}
              >
                <img src='http://dynamicdog.se/wp-content/uploads/2016/05/sdpLarge-1.png' />
                <p>
                  We are awarded with both gold and silver in Svenska
                  Designpriset
                </p>
              </div>
            )}
          </InView>
        </div>
        <div className={`row ${styles.gallery}`}>
          <div className='col-6 col-sm-3 p-0'>
            <img
              src='https://dynamicdog.se/wp-content/uploads/2016/05/1-1.jpg'
              alt=''
            />
          </div>
          <div className='col-6 col-sm-3 p-0'>
            <img
              src='https://dynamicdog.se/wp-content/uploads/2016/05/2.jpg'
              alt=''
            />
          </div>
          <div className='col-6 col-sm-3 p-0'>
            <img
              src='https://dynamicdog.se/wp-content/uploads/2016/05/3.2.jpg'
              alt=''
            />
          </div>
          <div className='col-6 col-sm-3 p-0'>
            <img
              src='https://dynamicdog.se/wp-content/uploads/2016/05/4.jpg'
              alt=''
            />
          </div>
          <div className='col-6 col-sm-3 p-0'>
            <img
              src='https://dynamicdog.se/wp-content/uploads/2016/05/5.jpg'
              alt=''
            />
          </div>
          <div className='col-6 col-sm-3 p-0'>
            <img
              src='https://dynamicdog.se/wp-content/uploads/2016/05/6.jpg'
              alt=''
            />
          </div>
          <div className='col-6 col-sm-3 p-0'>
            <img
              src='https://dynamicdog.se/wp-content/uploads/2016/05/7-1.jpg'
              alt=''
            />
          </div>
          <div className='col-6 col-sm-3 p-0'>
            <img
              src='https://dynamicdog.se/wp-content/uploads/2016/05/8.jpg'
              alt=''
            />
          </div>
        </div>
        <div
          className={`row ${styles.brands} ${styles.text_block}  ${animate.animation_block}`}
        >
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={` ${animate.t_down} ${inView && animate.slideUp} `}
              >
                <h2>A journey in brands</h2>
                <p>
                  ACNE Digital, <span>Agora</span>, Annell Ljus &amp; Form,{' '}
                  <span>AR Packaging Group</span>,{' '}
                  <span>Astrid Lindgrens Barnsjukhus</span>, Audio Video, AU
                  System, <span>Bergendahls Food</span>, Biogaia, Bioprocess
                  Control, Bona, Blå Station, Cartela, Cheapy Byggmarknad,{' '}
                  <span>City Gross</span> <span>Dansukker</span>, DORO, DUX,
                  Duxiana International, <span>Draftit</span>, <span>EKO</span>,{' '}
                  <span>Ekstrands</span>, Entré Malmö, Ericsson Mobile
                  Platforms, Expert, <span>Felix</span>, FLOS Scandinavia,{' '}
                  <span>Liberalerna</span>, FORM12, Garbergs Reklambyrå,
                  Fyrklövern, Grand Mölle, Göteborg Stad, Hafa,{' '}
                  <span>Haldex</span>, Hermods, Human Care,{' '}
                  <span>Hyllinge Cash</span>, Hässleholms kommun, ID
                  Kommunikation, IMP – Mästerkocken,{' '}
                  <span>Jonas Ihreborn AB</span>, <span>KATS</span>, KIA Motors,
                  Kollo, Kung Markatta, <span>Kv Caroli</span>, Landskrona
                  Kommun, Lund Life Science Incubator, Lund NE, Lunds
                  Universitet, Lundbeck A/S, <span>Malmö Brewing Co</span>,
                  Malmö Högskola, Malmö Stad, <span>Matöppet</span>, Max Medica,
                  Norra Station, OATLY, Offecct, PAT, Pergo, Pfizer,{' '}
                  <span>PoG Woody</span>, Region Skåne, Scream Mediebyrå,
                  Securitas, SFERA-Japan, Skandiform, Skogssällskapet
                  Förvaltning, Sydsvenskan, Starcom, Stockholm Stad, Skånes
                  Dansteater, <span>Skånes Universitetssjukhus</span>, Teleca,
                  Telge Energi, <span>Thule</span>, Trelleborgs kommun,
                  Trivector, TT-Line, TVINS, <span>Woody Bygghandel</span>,
                  Westerbergs, Vattenfall, VA-verket Malmö, Wihlborgs
                  Fastigheter, Yangtorp, Yves Rocher, Zonnic – Niconovum och
                  Åhléns.
                </p>
              </div>
            )}
          </InView>
        </div>
        <div
          className={`row align-items-lg-center ${styles.text_block} ${styles.gray}  ${animate.animation_block}`}
        >
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`col-lg-6 ${animate.t_down} ${
                  inView && animate.slideUp
                } `}
              >
                <h2>We are a proud part of Qgroup</h2>
                <p>
                  Qgroup is a rapidly growing group of highly specialized IT
                  consultancy companies. Each company is devoted to their core
                  business only. This ensures state of the art domain knowledge.
                  All consultants are handpicked for their skills, personal
                  reputation and high ambition.
                </p>
              </div>
            )}
          </InView>
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`col-lg-6 text-center ${animate.t_down} ${
                  inView && animate.slideUp
                } `}
              >
                <img
                  src='http://dynamicdog.se/wp-content/uploads/2016/05/q-logo-1.png'
                  alt='Qgroup company logo'
                />
              </div>
            )}
          </InView>
        </div>
      </div>
    </>
  );
};

export default About;
