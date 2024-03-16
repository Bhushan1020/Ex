import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import closeIcon from './window.jpg';
import Image from '../images/main.jpg';

const Main = () => {
  const targetDate = new Date('2024-04-10T23:59:59').getTime();
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    window.location.href = '/events';
  };

  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '700px',
          overflow: 'hidden',
          backgroundImage: `url(${Image})`
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <h1 style={{ fontSize: '3rem', marginTop: "90px", marginBottom: '20px' }}>Welcome to <br />Excalibur</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Participate in events and Explore the prizes</p>
          <Button
            className="start-button"
            variant="outline-info"
            onClick={() => setShowModal(true)}
            style={{ marginBottom: '100px' }}
          >
            <h4>Start</h4>
          </Button>
          <center><h2 style={{marginBottom:"10px"}}>Register Now</h2></center>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CountdownBlock label="Days" value={remainingTime.days} />
            <CountdownBlock label="Hours" value={remainingTime.hours} />
            <CountdownBlock label="Minutes" value={remainingTime.minutes} />
            <CountdownBlock label="Seconds" value={remainingTime.seconds} />
          </div>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}>
          <Modal.Body style={{ backgroundColor: 'transparent', textAlign: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img src={closeIcon} alt="Close" style={{ width: '100%', height: 'auto' }} />
              <Button variant="outline-light" onClick={handleCloseModal} style={{ position: 'absolute', top: '10px', right: '10px' }}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

const CountdownBlock = ({ label, value }) => (
  <div style={{ margin: '0 10px', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '8px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', flex: '1 0 120px' }}>
    <p style={{ fontSize: '1.2rem', color: "white", marginBottom: '5px' }}>{label}</p>
    <p style={{ fontSize: '2rem', color: "white", fontWeight: 'bold' }}>{value}</p>
  </div>
);

export default Main;
