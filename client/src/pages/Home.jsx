import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const trendingTopics = [
    'Data Structures & Algorithms',
    'Company Specific Prep',
    'Quantitative Aptitude',
    'Verbal Ability',
    'TCS',
    'COGNIZANT',
  ];

  const productHighlights = [
    {
      id: 1,
      title: 'Company-Based MCQs',
      desc: 'Prepare for company-specific technical MCQs covering core CS fundamentals, language-specific quirks, and platform tests.',
      icon: '📝',
      tag: 'Practice'
    },
    {
      id: 2,
      title: 'Company-Based Aptitude & Reasoning',
      desc: 'Master quantitative aptitude, logical reasoning, and verbal ability tests customized to your dream company pattern.',
      icon: '🧠',
      tag: 'Timed'
    },
    {
      id: 3,
      title: 'Company-Based Coding Challenges',
      desc: 'Solve the exact coding questions previously asked in top tech giants with optimized compilers and test cases.',
      icon: '💻',
      tag: 'Hands-on'
    },
    {
      id: 4,
      title: 'Mock Interviews',
      desc: 'Simulate the final frontier with live, tech-expert behavioral or technical mock interview slots.',
      icon: '👥',
      tag: 'Live'
    }
  ];

  return (
    <div className="home-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="nav-logo">
          <div className="logo-icon"></div>
          <span>placement<span>Nova</span></span>
        </div>
        <ul className="nav-links">
          <li><a href="#aptitude">Aptitude</a></li>
          <li><a href="#programming">Programming</a></li>
          <li><a href="#company">Company Specific</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
        <div className="nav-auth">
          <button className="btn-login">Log in</button>
          <button className="btn-signup">Sign up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="grid-overlay"></div>
        <h1 className="hero-title">
         Where <span>Preparation</span> Meets Opportunity.
        </h1>

        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search aptitude, coding, companies, or more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn-search">Search</button>
        </div>

        <div className="trending-container">
          <span className="trending-label">📈 Trending</span>
          <div className="trending-tags">
            {trendingTopics.map((topic, idx) => (
              <span key={idx} className="tag">{topic}</span>
            ))}
          </div>
        </div>
      </header>

      {/* Product Highlights Section */}
      <section className="product-highlights">
        <div className="section-header">
          <h2>Product Highlights</h2>
          <p>Kickstart your career with expert solutions designed for every stage of landing your first job.</p>
        </div>

        <div className="highlight-cards-grid">
          {productHighlights.map((card) => (
            <div key={card.id} className="highlight-card">
              <div className="card-top">
                <span className="card-icon">{card.icon}</span>
                <span className="card-badge">{card.tag}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="card-hover-border"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Background Neural Brain Element */}
      <div className="background-brain-glow"></div>
    </div>
  );
};

export default Home;