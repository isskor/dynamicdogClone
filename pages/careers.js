import Head from 'next/head';
import React from 'react';
import PositionCard from '../components/PositionCard';
import styles from '../styles/Careers.module.css';

const positions = [
  {
    name: 'Senior Developer / Architect',
    location: 'Malmö , Stockholm, Helsingborg',
    role: 'In this role, you will be working both as a lead developer on your own projects, but also as as a solution architect for our .NET-based projects, along with other team members. The solutions you will develop should follow known patterns and best practices, in order to ensure maintenance, reusability and structure-logic. You will also define the best way of processing to provide projects and customers with the highest level of accuracy, efficiency and reliability.',
    lookingFor: [
      'Solution-oriented team player',
      'As passsionate about develpment as we are',
      'Interested in market trends and new techonologies such as latest best practices for web development',
    ],
    skills: [
      '+ 5-year experience in .NET development, MVC Framework',
      'Experience with complex data modelling on MS SQL',
      'Languages: Swedish and English',
    ],
    appreciated: [
      'Certified Episerver CMS developer / Episerver commerce',
      'Front-end: HTML, JavaScript, CSS (full-stack)',
      'Other CMS platforms: Umbraco, WordPress',
      'Other languages: Node.js',
    ],
  },
  {
    name: 'Developer',
    location: 'Malmö , Stockholm, Helsingborg',
    role: 'You are genuinely interested in web development with a strong drive and you are always eager to learn and constantly improve. You are familiar with agile methodologies and and have a few years of experience building websites within the .NET framework. At Dynamic Dog you will be part of an agile team and together with other developers, digital art directors, web editors, media strategist and project managers you will create the best digital experience for our customers.',
    lookingFor: [
      'Solution-oriented team player',
      'As passsionate about develpment as we are',
      'Interested in market trends and new techonologies such as latest best practices for web development',
    ],
    skills: [
      '1-3-year experience in .NET development, MVC Framework',
      'Languages: Swedish and English',
    ],
    appreciated: [
      'Certified Episerver CMS developer / Episerver commerce',
      'Front-end: HTML, JavaScript, CSS (full-stack)',
      'Other CMS platforms: Umbraco, WordPress',
      'Other languages: Node.js',
    ],
  },
  {
    name: 'Front-end Developer',
    location: 'Malmö , Stockholm, Helsingborg',
    role: 'You are genuinely interested in web development with a strong drive and you are always eager to learn and constantly improve. You are familiar with agile methodologies and has probably spent the last couple of years working and delivering websites within some CMS framework. At Dynamic Dog you will be part of an agile team and together with other developers, digital art directors, web editors, media strategist and project managers you will create the best digital experience for our customers.',
    lookingFor: [
      'Strong drive to constantly learn and improve',
      'Keen interest in learning about the latest front-line technology within software development',
      'Pixel perfectionist',
    ],
    skills: [
      '+2-year experience',
      'Outstanding skills in HTML, CSS and JavaScript',
      'Extensive knowledge in JavaScript libraries (Backbone.js, Angular.js, or React.js)',
      'Languages: Swedish and English',
    ],
    appreciated: [
      'Experience from e-commerce projects',
      'Knowledge and experience from one or several of the following: Bootstrap, PHP, .NET',
    ],
  },
  {
    name: 'Open application',
    location: 'Malmö , Stockholm, Helsingborg',
  },
];

const careers = () => {
  return (
    <>
      <Head>
        <title>Dynamic Dog / Careers » Dynamic Dog</title>
        <meta name='description' content />
        <link
          rel='shortcut icon'
          href='https://dynamicdog.se/wp-content/themes/dynamicdog/favicon.ico'
        />
      </Head>
      <main className={styles.careers}>
        <div className='row'>
          <div className={`col-xs-12 p-0 col-lg-6 ${styles.background}`}></div>
          <div className={`col p-0 col-lg-6 `}>
            <div className={`${styles.text_block} ${styles.green}`}>
              <h3>Careers</h3>
              <h2>Hello there,</h2>
              <p>
                Do you feel like being a part of an amazing workplace? You have
                landed on the right page. We are Dynamic Dog, a team of about 20
                nerds with a family-like vibe that we cherish. Our gang comes
                from all around the globe, from South America to Europe and
                Australia. We speak 7 different languages! Our broad expert
                knowledge is our strength, and our team is our pride. We value
                human qualities as much as technical skills, and we make sure
                that everyone at the office feels challenged and fulfilled at
                any time.{' '}
              </p>
            </div>
            <div className={styles.text_block}></div>
          </div>
        </div>
        <div className='row'>
          <div className={`col ${styles.positions}`}>
            <h3>Available positions</h3>
            {positions.map((pos) => (
              <PositionCard position={pos} key={pos.name} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default careers;
