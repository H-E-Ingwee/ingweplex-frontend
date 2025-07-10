import React from 'react';
import './PageStyles.css';

function HomePage() {
  return (
    <div className="page-content">
      <h2>Welcome to Ingweplex Business and Branding Consultancy!</h2>
      <p className="intro-text">
        Empowering Brands, Inspiring Success. Ingweplex Business and Branding Consultancy is dedicated to delivering innovative, data-driven, and client-centric solutions that empower businesses to thrive in a competitive landscape.
      </p>
      <img src="https://placehold.co/800x400/F25C05/FFFFFF?text=Empowering+Brands" alt="Empowering Brands" className="page-image" />

      <h3>Our Mission</h3>
      <p>
        To empower brands and inspire success by providing innovative and data-driven business and branding solutions that help clients achieve their strategic goals and navigate the evolving market landscape.
      </p>

      <h3>Our Vision</h3>
      <p>
        To be a leading and trusted business and branding consultancy, renowned for transforming client visions into reality, fostering growth, loyalty, and market leadership through specialized expertise and unparalleled value.
      </p>

      <h3>Core Values</h3>
      <ul className="values-list">
        <li><strong>Innovation:</strong> Embracing cutting-edge technology and creative approaches to deliver forward-thinking solutions.</li>
        <li><strong>Data-Driven:</strong> Basing strategies on real-time market insights and analytics to ensure measurable outcomes and targeted growth.</li>
        <li><strong>Client-Centric:</strong> Prioritizing client needs and building long-term partnerships through personalized attention and bespoke strategies.</li>
        <li><strong>Integrity:</strong> Upholding honesty, transparency, and ethical practices in all interactions and solutions.</li>
        <li><strong>Impact:</strong> Driving measurable and positive change for our clients, ensuring tangible business growth and success.</li>
        <li><strong>Agility:</strong> Providing flexible and adaptive solutions that respond effectively to changing market conditions.</li>
      </ul>
      <p className="outro-text">
        At Ingweplex, we are uniquely positioned to meet the evolving needs of businesses in 2025 by focusing on digital transformation, personalized strategies, sustainability, CX optimization, agile solutions, measurable ROI, and niche expertise. We deliver unparalleled value, driving us to transform client visions into reality.
      </p>
    </div>
  );
}

export default HomePage;