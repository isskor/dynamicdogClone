import React, { useEffect, useState } from 'react';
import styles from '../styles/Loading.module.css';

const LoadingOverlay = ({ setLoading }) => {
  const [display, setDisplay] = useState({});

  useEffect(() => {
    let delay = setTimeout(() => {
      setDisplay({ display: 'none' });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  });

  return (
    <div style={display} className={styles.overlay}>
      <div className={styles.dog}>
        <div className={styles.dd}>
          <img
            src='https://dynamicdog.se/wp-content/themes/dynamicdog/img/dog2.gif'
            alt='white dog bouncing'
          />
        </div>
        <div className={styles.shadow}>
          <img
            src='https://dynamicdog.se/wp-content/themes/dynamicdog/img/shadow.png'
            alt='shadow of dog'
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
