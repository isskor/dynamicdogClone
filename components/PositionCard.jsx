import { useState } from 'react';

import styles from '../styles/Careers.module.css';
const PositionCard = ({ position }) => {
  const [open, setOpen] = useState(false);

  if (position.name === 'Open application')
    return (
      <>
        <div
          onClick={() => setOpen(!open)}
          className={`${styles.position_card} ${open ? styles.card_open : ''}`}
        >
          <div className='col-10'>
            <h2>{position.name}</h2>
            <span>{position.location}</span>
          </div>
          <div className='col-2 '>
            <div
              className={`${styles.toggle} ${open ? styles.toggle_open : ''}`}
            ></div>
          </div>
        </div>
        <div
          className={`${styles.position_card_desc} ${
            open ? styles.position_card_desc_open : ''
          }`}
        >
          <p>
            We love meeting new people and we are constantly looking for new
            talents. If you think you would be a good fit at Dynamic Dog, just
            send an email to <b>Mathias Olofsson</b> at{' '}
            <a href='mailto:mathias.olofsson@dynamicdog.se'>
              <b>mathias.olofsson@dynamicdog.se</b>
            </a>{' '}
            with a short description of your skills and experience and he’ll get
            back to you asap. We are looking forward to hearing from you!
          </p>
        </div>
      </>
    );

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className={`${styles.position_card} ${open ? styles.card_open : ''}`}
      >
        <div className='col-10'>
          <h2>{position.name}</h2>
          <span>{position.location}</span>
        </div>
        <div className='col-2 '>
          <div
            className={`${styles.toggle} ${open ? styles.toggle_open : ''}`}
          ></div>
        </div>
      </div>

      <div
        className={`${styles.position_card_desc} ${
          open ? styles.position_card_desc_open : ''
        }`}
      >
        <h5>Your role at Dynamic Dog:</h5>
        <p>{position.role}</p>
        <h5>Who we think you are:</h5>
        <ul>
          {position.lookingFor?.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
        <h5>Skills & Requirements</h5>
        <ul>
          {position.skills?.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
        <h5>Appreciated</h5>
        <ul>
          {position.appreciated?.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
        <p>
          Send an email to <b>Mathias Olofsson</b> at
          <a href='mailto:mathias.olofsson@dynamicdog.se'>
            <b> mathias.olofsson@dynamicdog.se </b>
          </a>
          with a short description of your skills and experience. He’ll get in
          touch with you asap! We are looking forward to hearing from you!
        </p>
      </div>
    </>
  );
};

export default PositionCard;
