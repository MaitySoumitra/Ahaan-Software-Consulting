import React, { useEffect, useState } from 'react';
import './CounterSection.css';

const Counter = ({ end, label, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="circle-counter">
      <h2 style={{ color: color }}>{count}+</h2>
      <p>{label}</p>
    </div>
  );
};

const CounterSection = () => {
  return (
    <section className="counter-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text and Headline */}
          <div className="col-md-6 text-start content-left mb-5 mb-md-0 section-header-tech">
                    <h6 className="subtitle">
          Achievement <span className="divider"></span>
        </h6>
            <h2 className="title">
              Over <span className="highlight">100+</span> Projects Completed
            </h2>
            <p className="description">
            With over 100+ projects successfully completed, Ahaan Software Consulting specializes in delivering innovative and high-quality software solutions. Our expertise spans a wide range of industries, ensuring efficient and tailored solutions that drive business growth and technological advancement. Trust us to transform your vision into reality.
            </p>
          </div>

          {/* Right Column: Counters */}
          <div className="col-md-6 text-center">
            <div className="main-circle mx-auto position-relative">
              <div className="center-text">
                <h2>
                  <Counter end={125} label="Happy Users" color="#0052d4" />
                </h2>
              </div>

              <div className="circle top-circle">
                <Counter end={5} label="Awards" color="#f26574" />
              </div>
              <div className="circle left-circle">
                <Counter end={30} label="Team" color="#7ddb96" />
              </div>
              <div className="circle right-circle">
                <Counter end={100} label="Success" color="#6c2ef5" />
              </div>

              {/* Individual background dots */}
              <div className="bg-dot dot-1"></div>
              <div className="bg-dot dot-2"></div>
              <div className="bg-dot dot-3"></div>
              <div className="bg-dot dot-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
