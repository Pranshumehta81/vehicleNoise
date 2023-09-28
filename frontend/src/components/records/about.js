import React from 'react';
// import DrBrindKumarImage from './dr_brind_kumar.jpg'; // Import images for Dr. Brind Kumar, Pranshu Mehta, and Amardeep Pandey
// import PranshuMehtaImage from './pranshu_mehta.jpg';
// import AmardeepPandeyImage from './amardeep_pandey.jpg';
// import './About.css'; // Include CSS for styling if needed

const About = () => {
  return (
    <div className="about-page">
      <h1>About Our Department</h1>
      <p>
        This tool has been developed for the ease of analyzing noise emissions from various sources all in one place. It utilizes a model developed by our esteemed professor, Dr. Brind Kumar, along with pre-existing equations for the model. If the noise exceeds a certain threshold, this tool also offers guidance for mitigation.
      </p>

      <h2>Research and Innovation</h2>
      <p>
        At IIT(BHU), we are at the forefront of civil engineering research. Our faculty and students are engaged in groundbreaking research projects that address real-world challenges and drive innovation in the industry.
      </p>

      <h2>Contact Information</h2>
      <div className="contact-info">
        <div className="contact-card">
          {/* <img src={DrBrindKumarImage} alt="Dr. Brind Kumar" /> */}
          <h3>Dr. Brind Kumar</h3>
          <p>Email: dr.brindkumar@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="contact-card">
          {/* <img src={PranshuMehtaImage} alt="Pranshu Mehta" /> */}
          <h3>Pranshu Mehta</h3>
          <p>Email: pranshu.mehta@example.com</p>
          <p>Phone: +1 (234) 567-8901</p>
        </div>
        <div className="contact-card">
          {/* <img src={AmardeepPandeyImage} alt="Amardeep Pandey" /> */}
          <h3>Amardeep Pandey</h3>
          <p>Email: amardeep.pandey@example.com</p>
          <p>Phone: +1 (345) 678-9012</p>
        </div>
      </div>
    </div>
  );
};

export default About;
