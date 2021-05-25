import Link from 'next/link';
import React from 'react';

import styles from '../styles/Navbar.module.css';

const links = [
  {
    name: 'First page',
    path: '/',
  },
  {
    name: 'Who we are',
    path: '/who-we-are',
  },
  {
    name: 'What we do',
    path: '/what-we-do',
  },
  {
    name: 'Get in touch',
    path: '/get-in-touch',
  },
  {
    name: 'Careers',
    path: '/careers',
  },
];

const locations = [
  {
    name: 'Dynamic Dog',
    address: 'Engelbreksgatan 6',
    zipCode: '211 33',
    city: 'Malmö',
    country: 'Sweden',
    link: 'https://www.google.se/maps/place/Engelbrektsgatan+6,+211+33+Malm%C3%B6/@55.6049552,12.9956041,17z/data=!3m1!4b1!4m5!3m4!1s0x4653a3fe70d0c9b7:0xfb75193dc0c3fdda!8m2!3d55.6049552!4d12.9977928',
  },
  {
    name: 'Dynamic Dog Sthlm',
    address: 'Engelbrektsplan 2, 4 tr',
    zipCode: '114 34',
    city: 'Stockholm',
    country: 'Sweden',
    link: 'https://www.google.se/maps/place/Engelbrektsplan+2,+114+34+Stockholm/@59.3374523,18.0687533,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9d5cd1b6db41:0x780dcc89519c383c!8m2!3d59.3374523!4d18.070942',
  },
  {
    name: 'Dynamic Dog',
    address: 'Bredgatan 11',
    zipCode: '252 25',
    city: 'Helsingborg',
    country: 'Sweden',
    link: 'https://www.google.se/maps/place/Mindpark+Meeting+-+Konferens+i+Helsingborg/@56.038049,12.6963652,17z/data=!3m1!4b1!4m5!3m4!1s0x465233b43f3e2fcb:0xdb03a7aaa5740022!8m2!3d56.038049!4d12.6985539?shorturl=1',
  },
];

const OpenNav = ({ open, handleCloseNav }) => {
  return (
    <nav
      className={`${styles.navbar_show} ${open ? styles.show : styles.hidden}`}
    >
      <div className={styles.menu}>
        <ul className={styles.nav_list}>
          {links.map((listItem, i) => (
            <li
              className={`${styles.list_item} ${open ? styles.slideIn : ''}`}
              key={i}
              onClick={handleCloseNav}
            >
              <Link href={listItem.path}>
                <a>{listItem.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.location_list}>
        {locations.map((loc) => (
          <div className={styles.location} key={loc.zipCode}>
            <p>
              <span>{loc.city.toUpperCase()}</span>
              <br />
              {loc.name}
              <br />
              {loc.address}
              <br />
              {loc.zipCode} {loc.city}
              <br />
              {loc.country}
            </p>
            <Link href={loc.link}>
              <a>Find us</a>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default OpenNav;
