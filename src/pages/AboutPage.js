import React from 'react';
import './PageStyles.css'; // Use the shared page styles

function AboutPage() {
  return (
    <div className="page-content">
      <h2>About Ingweplex Group</h2>
      <p className="intro-text">
        Ingweplex Business and Branding Consultancy is dedicated to delivering innovative, data-driven, and client-centric solutions that empower businesses to thrive in a competitive landscape. We are committed to transforming client visions into reality, fostering growth, loyalty, and market leadership.
      </p>

      <img src="https://placehold.co/800x400/0F1D26/FFFFFF?text=Ingweplex+Team" alt="Ingweplex Team" className="page-image" />

      <h3>Our Journey and Commitment</h3>
      <p>
        Founded with a vision to empower brands and inspire success, Ingweplex has evolved to meet the dynamic needs of businesses in 2025. Our approach is rooted in real-time market insights and industry trends, allowing us to identify and address critical client needs effectively. We pride ourselves on being an ongoing strategic partner, not just a one-off vendor.
      </p>
      <p>
        We specialize in high-demand sectors such as e-commerce, healthcare, and tech startups, offering tailored strategies informed by deep market knowledge. Our boutique advantage emphasizes personalized attention, with dedicated account managers and customized deliverables that build lasting trust.
      </p>

      <h3>Core Client Needs We Address</h3>
      <ul className="values-list"> {/* Reusing values-list style for consistency */}
        <li><strong>Digital Transformation Expertise:</strong> Integrating AI, data analytics, and cloud technologies.</li>
        <li><strong>Personalized & Data-Driven Strategies:</strong> Crafting bespoke campaigns based on deep insights.</li>
        <li><strong>Sustainability & Ethical Branding:</strong> Aligning brands with eco-friendly and socially responsible practices.</li>
        <li><strong>Customer Experience (CX) Optimization:</strong> Creating seamless and personalized customer journeys.</li>
        <li><strong>Agile & Flexible Solutions:</strong> Delivering iterative solutions that adapt to changing markets.</li>
        <li><strong>Measurable Return on Investment (ROI):</strong> Ensuring clear, trackable results for every investment.</li>
        <li><strong>Niche Specialization & Trusted Partnerships:</strong> Offering deep industry knowledge and acting as a trusted advisor.</li>
      </ul>

      <h3>Our Value Proposition</h3>
      <p className="outro-text">
        Our niche expertise and client-first approach build lasting trust, delivering solutions that drive 10–20% growth in market share. We empower brands with specialized, trusted guidance, inspiring sustainable success and transforming client visions into reality.
      </p>
    </div>
  );
}

export default AboutPage;
