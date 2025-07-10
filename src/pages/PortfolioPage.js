import React from 'react';
import './PageStyles.css';

function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Digital Transformation for Retail Chain",
      description: "Implemented AI-driven analytics and cloud infrastructure, leading to a 15% reduction in operational costs and enhanced supply chain efficiency.",
      image: "https://placehold.co/600x350/F25C05/FFFFFF?text=Retail+Transformation",
      category: "Digital Transformation"
    },
    {
      id: 2,
      title: "Brand Revitalization for Tech Startup",
      description: "Developed a fresh brand identity and data-driven marketing strategy, resulting in a 20% increase in brand recognition and customer engagement within six months.",
      image: "https://placehold.co/600x350/D9910B/FFFFFF?text=Tech+Rebrand",
      category: "Branding"
    },
    {
      id: 3,
      title: "CX Optimization for Healthcare Provider",
      description: "Redesigned patient journey touchpoints and integrated real-time feedback systems, improving patient satisfaction scores by 25%.",
      image: "https://placehold.co/600x350/0F1D26/FFFFFF?text=Healthcare+CX",
      category: "CX Optimization"
    },
    {
      id: 4,
      title: "Sustainable Branding for Eco-Friendly Startup",
      description: "Crafted an authentic brand narrative emphasizing eco-conscious practices and impact reporting, boosting brand loyalty by 15%.",
      image: "https://placehold.co/600x350/262626/FFFFFF?text=Eco+Brand",
      category: "Sustainability"
    },
    {
      id: 5,
      title: "Agile Strategy for E-commerce Launch",
      description: "Provided rapid response consulting and iterative strategy development for a new e-commerce platform, achieving market entry within weeks.",
      image: "https://placehold.co/600x350/F25C05/FFFFFF?text=E-commerce+Agility",
      category: "Agile Solutions"
    },
    {
      id: 6,
      title: "ROI-Focused Marketing for Financial Services",
      description: "Developed customized performance dashboards and ROI-aligned marketing campaigns, leading to a 10% increase in qualified leads and conversions.",
      image: "https://placehold.co/600x350/D9910B/FFFFFF?text=Financial+ROI",
      category: "Measurable ROI"
    },
  ];

  return (
    <div className="page-content">
      <h2>Our Portfolio of Success</h2>
      <p className="intro-text">
        Explore a selection of our impactful projects, demonstrating our expertise in transforming client visions into measurable success across various industries.
      </p>

      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className="portfolio-item">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <h3>{project.title}</h3>
            <p className="portfolio-description">{project.description}</p>
            <span className="portfolio-category">{project.category}</span>
          </div>
        ))}
      </div>
      <p className="outro-text">
        We are committed to delivering tangible results that drive growth, loyalty, and market leadership for our clients.
      </p>
    </div>
  );
}

export default PortfolioPage;