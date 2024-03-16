import React, { useState } from 'react';
import bgImage from './bgimg.jpg'; // Import your background image

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ ...styles.page, backgroundImage: `url(${bgImage})` }}>
      <center>
        <h1 style={styles.heading}>FAQ</h1>
        <p style={styles.paragraph}>Here are some frequently asked questions...</p>
      </center>
      <ul style={styles.list}>
        {faqData.map((item, index) => (
          <li key={index}>
            <div style={styles.question} onClick={() => toggleAnswer(index)}>
              <strong>{item.question}</strong>
            </div>
            {activeIndex === index && (
              <p style={styles.answer}>{item.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const faqData = [
  {
    question: 'Can we bring our own tools and equipment for robot maintenance?',
    answer: 'Yes, participants are required to bring their own tools and equipment for robot maintenance.'
  },
  {
    question: 'Are there any restrictions on the use of certain materials or components in the construction of the robots?',
    answer: 'Participants must adhere to the components and materials specified in the respective domain rulebook. Compliance with the guidelines outlined in the rulebook is essential for constructing the robots.'
  },
  {
    question: 'Where will I be staying during the competition?',
    answer: 'We will notify you soon about accommodation arrangements for the competition. Please stay tuned for further updates.'
  },
  {
    question: 'What are the allowed dimensions and weight limits for the robots?',
    answer: 'Please refer to the rulebook for specific guidelines regarding the allowed dimensions and weight limits for the robots. Compliance with the regulations outlined in the rulebook is essential.'
  },
  {
    question: 'Can only undergraduate student can apply to the event?',
    answer: 'Both undergraduate (UG) and postgraduate (PG) students can apply.'
  },
  {
    question: 'Where can we see the Rules & Guidelines About Any Event?',
    answer: 'Refer the Rulebook Attached in the Event page for a Particular Event.'
  },
  {
    question: 'Can you Provide a certificate of Participation for participaints & also can you provide a certificate to winners?',
    answer: 'Yes, we provide a certificate of Participation to participaints & also provide a certificate to winners'
  }
];

const styles = {
  page: {
    maxWidth: '100%',
    color:"#fff",
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  heading: {
    color: '#fff',
    marginBottom: '20px'
  },
  paragraph: {
    color: '#fff',
    lineHeight: '1.5',
    marginBottom: '20px'
  },
  list: {
    padding: 0,
    marginLeft:"100px",
  },
  question: {
    cursor: 'pointer',
    marginBottom: '30px',
  },
  answer: {
    color: '#e3e0e0',
    marginLeft:"20px",
  },
};

export default FAQ;
