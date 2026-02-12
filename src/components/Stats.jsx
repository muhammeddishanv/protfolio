import React from 'react';

const Stats = () => {
  const stats = [
    { value: "3+", label: "Years of Professional Experience" },
    { value: "120+", label: "Successful Projects Delivered" },
    { value: "15+", label: "Industry Awards & Recognition" },
    { value: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="stats-section">
      <div className="stats-grid animate-fade-in">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h2 className="stat-value">{stat.value}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
