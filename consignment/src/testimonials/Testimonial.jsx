import React, { useEffect, useState, useRef } from 'react';
import './testimonial.css';

const Testimonial = () => {
  const [packages, setPackages] = useState(0);
  const [offices, setOffices] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [tons, setTons] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // To track if the animation has started

  const testimonialRef = useRef(null); // To reference the component

  const animateCount = (endValue, setState, duration) => {
    let start = 0;
    const increment = endValue / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setState(endValue);
        clearInterval(counter);
      } else {
        setState(Math.ceil(start));
      }
    }, 50);
  };

  // Function to start animations when the component is visible
  const startAnimations = () => {
    if (!hasAnimated) {
      animateCount(9800, setPackages, 2000);
      animateCount(230, setOffices, 2000);
      animateCount(1200, setEmployees, 2000);
      animateCount(5200, setTons, 2000);
      setHasAnimated(true); // Prevent re-triggering the animation
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimations();
            observer.unobserve(entry.target); // Stop observing once the animation has started
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, [hasAnimated]); // Only run this effect once

  return (
    <div className='testimonial' ref={testimonialRef}>
      <div className='main-testimonial'>
        <div>
          <h2>{packages}+</h2>
          <p>Delivered Packages</p>
        </div>

        <div>
          <h2>{offices}+</h2>
          <p>Offices Worldwide</p>
        </div>

        <div>
          <h2>{employees}+</h2>
          <p>Employees</p>
        </div>

        <div>
          <h2>{tons}+</h2>
          <p>Tons of Goods</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
