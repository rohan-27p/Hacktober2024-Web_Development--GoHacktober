import React from 'react';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <div>
    <Navbar/>
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
      ACM at Jabalpur Engineering College brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges.
     <br></br> As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.

      </p>
      <h2 style={styles.subHeading}>Our Team</h2>
      <p style={styles.paragraph}>
        We are proud to have an incredible team of talented individuals, each with a unique background and skillset.
        Together, we bring diverse perspectives, innovative ideas, and a shared passion for excellence. Our leadership
        team encourages creativity, collaboration, and a culture of continuous learning and growth.
      </p>
      <h2 style={styles.subHeading}>Our Mission</h2>
      <p style={styles.paragraph}>
      Let’s come together to build a society where coding is in the aura, research in our minds, technology is all hearts and problems all solved.


      </p>
    </div>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '15px',
  },
  paragraph: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
};

export default AboutUs;
