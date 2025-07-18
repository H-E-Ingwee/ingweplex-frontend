import React, { useState } from 'react';
import './PageStyles.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('Sending message...');

    try {
      // IMPORTANT: Replace 'https://ingweplex-backend.vercel.app' with your actual deployed backend URL
      const backendUrl = 'https://ingweplex-backend.vercel.app/api/contact'; // Example: 'https://ingweplex-backend.vercel.app/api/contact'

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmissionStatus(result.message || 'Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmissionStatus(errorData.message || 'Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('An error occurred. Please check your network connection.');
    }
  };

  return (
    <div className="page-content">
      <h2>Get in Touch with Ingweplex</h2>
      <p className="intro-text">
        We'd love to hear from you! Whether you have an inquiry, a project idea, or just want to learn more about our services, feel free to reach out.
      </p>
      <img src="https://placehold.co/800x400/262626/FFFFFF?text=Connect+With+Us" alt="Connect With Us" className="page-image" />

      <div className="contact-details-section">
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> <a href="mailto:Ingweplex@gmail.com">Ingweplex@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+254798936316">+254798936316</a></p>
        <p><strong>Website:</strong> <a href="https://ingweplex.vercel.app" target="_blank" rel="noopener noreferrer">Ingweplex.vercel.app</a></p>
        <p><strong>Social Media:</strong> <a href="https://www.instagram.com/ingweplex_designs_agency/" target="_blank" rel="noopener noreferrer">@Ingweplex_designs_agency</a> (Instagram example)</p>
      </div>

      <div className="contact-form-section">
        <h3>Send Us a Message</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactPage;

// Note: Ensure to replace 'https://ingweplex-backend.vercel.app' with your actual deployed backend URL in the handleSubmit function.
// This code assumes you have a backend endpoint set up to handle the contact form submission.