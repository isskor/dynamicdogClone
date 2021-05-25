import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src='' alt='' />
      <h3>Dynamic Dog</h3>
      <nav>
        <Link href='/'>
          <a>First page</a>
        </Link>
        <Link href='/who-we-are'>
          <a>Who we are</a>
        </Link>
        <Link href='/what-we-do'>
          <a>What we do</a>
        </Link>
        <Link href='/get-in-touch'>
          <a>Get in touch</a>
        </Link>
        <Link href='/careers'>
          <a>Careers</a>
        </Link>
      </nav>
      <ul className={styles.location_list}>
        <li>
          <a href=''>Dynamic Dog digital agency AB</a>
          <span>|</span>
        </li>
        <li>
          <a href=''>Malmö</a>
          <span>|</span>
        </li>
        <li>
          <a href=''>Helsingborg</a>
          <span>|</span>
        </li>
        <li>
          <a href=''>Stockholm</a>
          <span>|</span>
        </li>
        <li>
          <a href=''>Sweden</a>
        </li>
      </ul>
      <ul className={styles.flex}>
        <li>
          +46 40 630 46 30 <span>|</span>
        </li>
        <li>
          <a href='mailto:info@dynamicdog.se'>info@dynamicdog.se</a>
        </li>
      </ul>
      <div className={styles.flex}>
        <a href=''>
          <img
            src='https://dynamicdog.se/wp-content/themes/dynamicdog/img/linkedin.png'
            alt=''
          />
        </a>
        <a href=''>
          <img
            src='https://dynamicdog.se/wp-content/themes/dynamicdog/img/facebook.png'
            alt=''
          />
        </a>
        <a href=''>
          <img src='https://www.instagram.com/dynamicdogab/' alt='' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
