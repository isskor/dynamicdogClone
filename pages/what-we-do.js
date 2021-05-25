import Head from 'next/head';
import React from 'react';
import styles from '../styles/Work.module.css';
import TextStyles from '../styles/Typography.module.css';

const Work = () => {
  return (
    <>
      <Head>
        <title>Dynamic Dog / What We Do » Dynamic Dog</title>
        <meta name='description' content />
        <link
          rel='shortcut icon'
          href='https://dynamicdog.se/wp-content/themes/dynamicdog/favicon.ico'
        />
      </Head>
      <main className={styles.whatWeDo}>
        <div className='row'>
          <div className={`col-xs-12 col-lg-6 p-0 ${styles.background}`}></div>
          <div className={`col-lg-6 p-0 ${styles.services}`}>
            <div className={`${styles.text_block} ${styles.green}`}>
              <h3>Our way of working</h3>
              <h2>
                We cover the entire customer experience lifecycle of a digital
                project
              </h2>
              <p>
                We develop and grow our clients’ business and create more value
                to their brand through digital channels. We love structure and
                agile methodology. We develop as a team by constantly evaluating
                new trends and technologies that improve or facilitate our work,
                and benefit our customers.
              </p>
            </div>
            <div className={styles.text_block}>
              <div className={styles.title_icon}>
                <img
                  src='https://dynamicdog.se/wp-content/uploads/2016/08/1_strategy.png'
                  alt=''
                />
                <h3>DIGITAL STRATEGY & ANALYSIS</h3>
              </div>
              <h2>We love to really get to know our customers</h2>
              <p>
                After we have found out the overall business objectives, we
                break them down to actual measurable digital targets to meet the
                goals of our customer. We will then show how the digital project
                has direct impact on their business objectives.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className={`col-xs-12 col-lg-6 ${styles.text_block} ${styles.black}`}
          >
            <div className={styles.title_icon}>
              <img
                src='https://dynamicdog.se/wp-content/uploads/2016/08/2_design_ux.png'
                alt='eye icon'
              />
              <h3> Design &amp; user experience </h3>
            </div>
            <h2>We design for the end users</h2>
            <p>
              When we know the needs and requirements of our target groups we
              can create a dynamic concept design of workflows, wireframes, site
              map and graphic design. In the design phase we develop a detailed
              specification and a clickable prototype with all templates and
              modules that should be included in the final production.
            </p>
          </div>
          <div className='col-xs-12 col-lg-6 p-0'>
            <img
              src='https://dynamicdog.se/wp-content/uploads/2016/08/photo-14.jpg'
              alt=''
              className={styles.col_img}
            />
          </div>
        </div>
        <div className={`row ${styles.quote} ${styles.text_block}`}>
          <blockquote>
            Our broad knowledge is our strength. We are truly digital experts
            who can take your digital presence to a higher level and make it a
            natural part of your business
          </blockquote>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-lg-6 p-0'>
            <img
              src='https://dynamicdog.se/wp-content/uploads/2016/10/developer.jpg'
              alt=''
              className={styles.col_img}
            />
          </div>
          <div
            className={`col-xs-12 col-lg-6 ${styles.text_block} ${styles.black}`}
          >
            <div className={styles.title_icon}>
              <img
                src='https://dynamicdog.se/wp-content/uploads/2016/10/3_dev-2.png'
                alt='hammer and wrench icon'
              />
              <h3> development &amp; integration </h3>
            </div>
            <h2>This is our magic</h2>
            <p>
              We have a vast experience of business critical projects, often
              including e-commerce, and we are experts when it comes to advanced
              system development and integrations. However, we also find it
              thrilling to work with smaller digital campaigns or brand building
              websites where we can use our creative and innovative height to
              the fullest.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className={`col-xs-12 col-lg-6  ${styles.text_block}`}>
            <div className={styles.title_icon}>
              <img
                src='https://dynamicdog.se/wp-content/uploads/2016/08/5_training-1.png'
                alt='graduation hat'
              />
              <h3> Training &amp; Documentation </h3>
            </div>
            <h2>We aim to serve</h2>
            <p>
              As a part of our projects we provide CMS training for our
              customers. We also produce comprehensive training manuals that
              explains how a customer specific solution works in an easy to
              understand manner. It can be digital, or on paper as well as in an
              e-learning video format.
            </p>
          </div>
          <div className='col-xs-12 col-lg-6 p-0'>
            <img
              src='https://dynamicdog.se/wp-content/uploads/2016/10/training2.jpg'
              alt=''
              className={styles.col_img}
            />
          </div>
        </div>
        <div className='row'>
          <div
            className={`col-xs-12 col-lg-6 ${styles.black} ${styles.img_block}`}
          >
            <img
              src='https://dynamicdog.se/wp-content/uploads/2016/10/snurran_800x800.png'
              alt=''
            />
          </div>
          <div className={`col-lg-6 p-0 `}>
            <div className={`${styles.text_block} `}>
              <div className={styles.title_icon}>
                <img
                  src='https://dynamicdog.se/wp-content/uploads/2016/08/4_cont-1.png'
                  alt=''
                />
                <h3> Content management </h3>
              </div>
              <h2>Fresh and customized content makes all the difference </h2>
              <p>
                We provide our customers with guidelines describing how content
                should be created for their different digital channels. Our
                talented web editors, designers and copywriters help them to
                create new material such as text, images, videos and more.
              </p>
            </div>
            <div className={`${styles.text_block} ${styles.green}`}>
              <div className={styles.title_icon}>
                <img
                  src='https://dynamicdog.se/wp-content/uploads/2016/08/6_improve_vit-1.png'
                  alt=''
                />
                <h3> improvement &amp; support</h3>
              </div>
              <h2>We believe in long term relations</h2>
              <p>
                We take full responsibility for the development and support
                after the launch of a project. We are continuously measuring and
                monitoring in order to guide our customers in the best way
                possible. We have a content and management team which offers
                maintenance, content management and support after a model
                developed within Qgroup.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Work;
