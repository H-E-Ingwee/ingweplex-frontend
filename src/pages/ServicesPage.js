import React from 'react'; // This should be the ONLY React import
import './PageStyles.css';
import { Lightbulb, TrendingUp, Leaf, Users, Zap, DollarSign, ShieldCheck } from 'lucide-react'; // New imports

function ServicesPage() {
  return (
    <div className="page-content">
      <h2>Our Comprehensive Services</h2>
      <p className="intro-text">
        Ingweplex Business and Branding Consultancy offers a suite of tailored services designed to address the critical needs of businesses in today's dynamic market.
      </p>
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Business professionals discussing data analytics" className="page-image" />

      <div className="service-list">
        <div className="service-item">
          <h3><Lightbulb size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Digital Transformation Expertise</h3>
          <p>Businesses seek consultants who can integrate AI, data analytics, and cloud technologies to enhance operational efficiency and customer engagement, with a focus on actionable implementation over theoretical advice.</p>
          <ul>
            <li>AI-Driven Business Optimization</li>
            <li>Digital Infrastructure Audits</li>
            <li>Training Programs</li>
          </ul>
          <p className="value-prop">Value Proposition: We transform businesses into digital-first leaders by combining cutting-edge technology with practical strategies, ensuring measurable outcomes like 15% operational cost reductions or 20% customer engagement growth.</p>
        </div>

        <div className="service-item">
          <h3><TrendingUp size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Personalized and Data-Driven Strategies</h3>
          <p>Clients demand bespoke strategies informed by data analytics, including customer behavior insights, market trends, and purchasing patterns, to drive targeted growth.</p>
          <ul>
            <li>Data-Driven Brand Strategy</li>
            <li>Customer Data Analysis</li>
            <li>Personalized Marketing Plans</li>
          </ul>
          <p className="value-prop">Value Proposition: Our data-centric approach ensures every strategy is unique, delivering measurable results like increased conversion rates or brand recall.</p>
        </div>

        <div className="service-item">
          <h3><Leaf size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Sustainability and Ethical Branding</h3>
          <p>Clients prioritize consultants who integrate sustainability and ethical practices into branding, aligning with consumer demand for eco-friendly and socially responsible businesses.</p>
          <ul>
            <li>Sustainable Branding Roadmaps</li>
            <li>Ethical Messaging Workshops</li>
            <li>Impact Reporting</li>
          </ul>
          <p className="value-prop">Value Proposition: We position brands as purpose-driven leaders, boosting market perception while contributing to a sustainable future, with potential for 15% growth in brand loyalty.</p>
        </div>

        <div className="service-item">
          <h3><Users size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Customer Experience (CX) Optimization</h3>
          <p>Businesses seek consultants to create seamless, personalized customer experiences across touchpoints, leveraging AI and real-time feedback to drive loyalty and retention.</p>
          <ul>
            <li>Customer Journey Mapping</li>
            <li>AI-Powered Personalization</li>
            <li>Feedback Integration</li>
          </ul>
          <p className="value-prop">Value Proposition: We enhance customer satisfaction by 20% through personalized, tech-enabled experiences, driving repeat business and referrals.</p>
        </div>

        <div className="service-item">
          <h3><Zap size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Agile and Flexible Solutions</h3>
          <p>Clients value consultants who adopt agile methodologies, delivering iterative solutions that adapt to changing market conditions and provide quick, tangible results.</p>
          <ul>
            <li>Iterative Strategy Development</li>
            <li>Rapid Response Consulting</li>
            <li>Scalable Solutions</li>
          </ul>
          <p className="value-prop">Value Proposition: Our agile approach ensures clients see results within weeks, adapting to their needs with minimal disruption and maximum impact.</p>
        </div>

        <div className="service-item">
          <h3><DollarSign size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Measurable Return on Investment (ROI)</h3>
          <p>Clients demand consultants who deliver clear, trackable results, such as increased revenue, brand awareness, or customer engagement, avoiding vague or unquantifiable outcomes.</p>
          <ul>
            <li>Performance Dashboards</li>
            <li>ROI-Focused Strategies</li>
            <li>Post-Project Analysis</li>
          </ul>
          <p className="value-prop">Value Proposition: We guarantee measurable results, ensuring every dollar invested translates into tangible business growth.</p>
        </div>

        <div className="service-item">
          <h3><ShieldCheck size={24} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Niche Specialization and Trusted Partnerships</h3>
          <p>Clients prefer consultants with deep industry knowledge and a trusted advisor approach, favoring boutique firms for personalized, agile service over large consultancies.</p>
          <ul>
            <li>Industry-Specific Consulting</li>
            <li>Long-Term Partnerships</li>
            <li>Boutique Advantage</li>
          </ul>
          <p className="value-prop">Value Proposition: Our niche expertise and client-first approach build lasting trust, delivering solutions that drive 10–20% growth in market share.</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
