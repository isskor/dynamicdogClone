import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import OpenNav from './OpenNav';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [navStyles, setNavStyles] = useState({});
  const [navIconStyles, setNavIconStyles] = useState({});
  const router = useRouter();

  const { pathname } = router;
  const path = router.pathname.replace(/-/g, ' ').slice(1);

  function getPath(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleCloseNav = () => {
    setOpen(false);
  };

  function changeStyle() {
    setScrollY(window.pageYOffset);
    if (window.pageYOffset === 0) {
      setNavStyles({});
      setNavIconStyles({});
      return;
    }

    if (window.pageYOffset < scrollY) {
      setNavStyles({
        background: '#000',
        color: '#fff',
        transform: 'translateY(0)',
      });
      setNavIconStyles({ background: '#fff' });
      return;
    }
    if (window.pageYOffset > 200) {
      return setNavStyles({ transform: 'translateY(-100%)' });
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', changeStyle);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', changeStyle);
    };
  });

  return (
    <>
      <div
        id='header'
        style={open ? { background: 'transparent' } : navStyles}
        className={`${styles.navbar} ${
          pathname === '/what-we-do' || pathname === '/careers'
            ? styles.navbar_black
            : ''
        }`}
      >
        <div className={open ? styles.logo_hidden : styles.logo}>
          <h3>
            <Link href='/'>
              <a>Dynamic Dog</a>
            </Link>
            <span>
              {getPath(path).length > 0
                ? ' /' + getPath(path)
                : ' digital agency'}
            </span>
          </h3>
        </div>
        <div
          id='nav-icon'
          onClick={() => setOpen(!open)}
          className={`${styles.nav_icon} ${open ? styles.nav_icon_open : ''}`}
        >
          <span style={navIconStyles}></span>
          <span style={navIconStyles}></span>
          <span style={navIconStyles}></span>
          <span style={navIconStyles}></span>
          <span style={navIconStyles}></span>
          <span style={navIconStyles}></span>
        </div>
      </div>
      <OpenNav open={open} handleCloseNav={handleCloseNav} />
    </>
  );
};

export default Navbar;
