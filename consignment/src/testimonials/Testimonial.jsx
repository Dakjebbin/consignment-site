import React, { useEffect, useState } from 'react'
import './testimonial.css'

const Testimonial = () => {
    const [packages, setPackages] = useState(0);
    const [offices, setOffices] = useState(0);
    const [employees, setEmployees] = useState(0);
    const [tons, setTons] = useState(0);

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

    useEffect(() => {
        animateCount(9800, setPackages, 3000);
        animateCount(230, setOffices, 3000);
        animateCount(1200, setEmployees, 3000);
        animateCount(5200, setTons, 3000);
    }, []);
  return (
    <div className='testimonial'>
        <div className='main-testimonial'>
           <div>
            <h2>
            {packages}+
            </h2>
            <p>
                Delivered Packages
            </p>
            </div>

            <div>

            
            <h2>
               {offices}+
            </h2>
            
            <p>
                Offices Worldwide
            </p>

            </div>
            
            <div>
            <h2>
               {employees}+
            </h2>
            <p>
                Employees
            </p>

            </div>

            <div>
            <h2>
            {tons}+
            </h2>
            <p>
                Tons of Goods
            </p>
            </div>
        </div>
        
        </div>
  )
}

export default Testimonial