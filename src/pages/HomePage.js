import React from 'react';
import './PageStyles.css';
import { Lightbulb, Database, Award, Handshake, TrendingUp, CheckCircle } from 'lucide-react';

function HomePage() {
  return (
    <> {/* Use a React Fragment to return multiple top-level elements */}
      {/* Hero Section - Inspired by Pawatech's hero */}
      <section className="hero-section">
        <div className="container hero-content">
          <h1>Empowering Brands, Inspiring Success</h1>
          <p className="hero-subtitle">Innovative, Data-Driven, and Client-Centric Solutions for a Competitive Landscape</p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Discover Our Services</a>
            <a href="#contact" className="btn btn-secondary">Get a Free Consultation</a>
          </div>
        </div>
      </section>

      {/* Existing About/Mission/Values content now within a page-content container */}
      <div className="page-content">
        <h2>About Ingweplex Business and Branding Consultancy!</h2>
        <p className="intro-text">
          Ingweplex Business and Branding Consultancy is dedicated to delivering innovative, data-driven, and client-centric solutions that empower businesses to thrive in a competitive landscape.
        </p>
        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team collaborating on business strategy" className="page-image" />

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
          <li><Lightbulb size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} /><strong>Innovation:</strong> Embracing cutting-edge technology and creative approaches to deliver forward-thinking solutions.</li>
          <li><Database size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} /><strong>Data-Driven:</strong> Basing strategies on real-time market insights and analytics to ensure measurable outcomes and targeted growth.</li>
          <li><Award size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} /><strong>Client-Centric:</strong> Prioritizing client needs and building long-term partnerships through personalized attention and bespoke strategies.</li>
          <li><Handshake size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} /><strong>Integrity:</strong> Upholding honesty, transparency, and ethical practices in all interactions and solutions.</li>
          <li><TrendingUp size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} /><strong>Impact:</strong> Driving measurable and positive change for our clients, ensuring tangible business growth and success.</li>
          <li><CheckCircle size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} /><strong>Agility:</strong> Providing flexible and adaptive solutions that respond effectively to changing market conditions.</li>
        </ul>
        <p className="outro-text">
          At Ingweplex, we are uniquely positioned to meet the evolving needs of businesses in 2025 by focusing on digital transformation, personalized strategies, sustainability, CX optimization, agile solutions, measurable ROI, and niche expertise. We deliver unparalleled value, driving us to transform client visions into reality.
        </p>
      </div>
    </>
  );
}

export default HomePage;
