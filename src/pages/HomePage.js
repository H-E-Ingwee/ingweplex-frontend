import React from 'react';
import './PageStyles.css';
import { Lightbulb, Database, Award, Handshake, TrendingUp, CheckCircle, Target, Eye, Shield, Users, Rocket, BarChart2 } from 'lucide-react'; // Added more icons

function HomePage() {
  return (
    <>
      {/* Hero Section - Already enhanced */}
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

      {/* About Us Overview Section */}
      <section className="about-overview-section container">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-subtitle">Ingweplex Business and Branding Consultancy is dedicated to delivering innovative, data-driven, and client-centric solutions that empower businesses to thrive in a competitive landscape.</p>
        <div className="about-grid">
          <div className="about-card">
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Diverse team collaborating" className="about-card-image" />
            <h3>Our Story</h3>
            <p>Founded with a vision to empower brands, Ingweplex has evolved to meet the dynamic needs of businesses. We are an ongoing strategic partner, not just a one-off vendor, rooted in real-time market insights.</p>
          </div>
          <div className="about-card">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Business strategy meeting" className="about-card-image" />
            <h3>Our Approach</h3>
            <p>We specialize in high-demand sectors like e-commerce, healthcare, and tech startups, offering tailored strategies informed by deep market knowledge. Our boutique advantage ensures personalized attention.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section container">
        <h2 className="section-title">Our Mission & Vision</h2>
        <div className="mission-vision-grid">
          <div className="mission-vision-card">
            <Target size={40} className="mv-icon" />
            <h3>Our Mission</h3>
            <p>To empower brands and inspire success by providing innovative and data-driven business and branding solutions that help clients achieve their strategic goals and navigate the evolving market landscape.</p>
          </div>
          <div className="mission-vision-card">
            <Eye size={40} className="mv-icon" />
            <h3>Our Vision</h3>
            <p>To be a leading and trusted business and branding consultancy, renowned for transforming client visions into reality, fostering growth, loyalty, and market leadership through specialized expertise and unparalleled value.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Inspired by Pawatech */}
      <section className="why-choose-us-section container">
        <h2 className="section-title">Why Choose Ingweplex?</h2>
        <p className="section-subtitle">Our commitment to excellence and client success sets us apart.</p>
        <div className="choose-us-grid">
          <div className="choose-us-card">
            <Lightbulb size={40} className="choose-us-icon" />
            <h3>Innovative Solutions</h3>
            <p>We embrace cutting-edge technology and creative approaches to deliver forward-thinking solutions tailored to your unique needs.</p>
          </div>
          <div className="choose-us-card">
            <BarChart2 size={40} className="choose-us-icon" />
            <h3>Data-Driven Impact</h3>
            <p>Our strategies are built on real-time market insights and analytics, ensuring measurable outcomes and targeted growth for your business.</p>
          </div>
          <div className="choose-us-card">
            <Handshake size={40} className="choose-us-icon" />
            <h3>Trusted Partnerships</h3>
            <p>We act as an ongoing strategic partner, providing personalized attention and building lasting trust through our client-centric approach.</p>
          </div>
          <div className="choose-us-card">
            <Shield size={40} className="choose-us-icon" />
            <h3>Agile & Adaptive</h3>
            <p>Our agile methodologies ensure rapid response and flexible solutions that adapt quickly to changing market conditions.</p>
          </div>
          <div className="choose-us-card">
            <Rocket size={40} className="choose-us-icon" />
            <h3>Measurable ROI</h3>
            <p>We focus on delivering clear, trackable results, ensuring every investment translates into tangible business growth and market leadership.</p>
          </div>
          <div className="choose-us-card">
            <Users size={40} className="choose-us-icon" />
            <h3>Niche Expertise</h3>
            <p>Benefit from our deep industry knowledge in high-demand sectors, offering specialized guidance for sustainable success.</p>
          </div>
        </div>
      </section>

      {/* Core Values Section - Retained from previous, but now a distinct section */}
      <section className="core-values-section container">
        <h2 className="section-title">Our Core Values</h2>
        <p className="section-subtitle">The principles that guide our every action and interaction.</p>
        <ul className="values-list">
          <li><Lightbulb size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} /><strong>Innovation:</strong> Embracing cutting-edge technology and creative approaches to deliver forward-thinking solutions.</li>
          <li><Database size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} /><strong>Data-Driven:</strong> Basing strategies on real-time market insights and analytics to ensure measurable outcomes and targeted growth.</li>
          <li><Award size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} /><strong>Client-Centric:</strong> Prioritizing client needs and building long-term partnerships through personalized attention and bespoke strategies.</li>
          <li><Handshake size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} /><strong>Integrity:</strong> Upholding honesty, transparency, and ethical practices in all interactions and solutions.</li>
          <li><TrendingUp size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} /><strong>Impact:</strong> Driving measurable and positive change for our clients, ensuring tangible business growth and success.</li>
          <li><CheckCircle size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} /><strong>Agility:</strong> Providing flexible and adaptive solutions that respond effectively to changing market conditions.</li>
        </ul>
      </section>
    </>
  );
}

export default HomePage;
