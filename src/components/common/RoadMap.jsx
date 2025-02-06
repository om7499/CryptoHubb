import React, { useState, useEffect } from 'react';
import { Popover, Steps } from 'antd';
import "../../styles/RoadmapModule.css"
const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );
  const description = 'You can hover on the dot.';
const RoadMap = () => {

    const [direction, setDirection] = useState("horizontal");

  useEffect(() => {
    const updateDirection = () => {
      setDirection(window.innerWidth < 768 ? "vertical" : "horizontal");
    };

    updateDirection();
    window.addEventListener("resize", updateDirection);
    return () => window.removeEventListener("resize", updateDirection);
  }, []);

  return (
    <div className='container p-5 border-bottom border-2'>
        <div className='text-center p-3 my-3'>
            <h1 className='text-info'>Road Map</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
        </div>
      <div className=' border border-info border-2 rounded-1 shadow-lg p-5 mb-5'>
      <Steps
            current={1}
            progressDot={customDot}
            direction={direction}
            items={[
            {
                title: 'January 2025',
                description:"Exchange Bitcontent to Bitcoin",
            },
            {
                title: 'In Progress',
                description,
            },
            {
                title: 'February 2025',
                description:"BTCC mode of payment in Bitconcent",
            },
            {
                title: 'March 2025',
                description:"Exchange Bitcontent to Bitcoin",
            },
            {
                title: 'April 2025',
                description:"Send-Receive coin Bitconcent & mobile",
            },
            {
                title: 'May 2025',
                description:"Coin Marketcap, World Coin Index",
            },
            ]}
        />
      </div>
    </div>
  )
}

export default RoadMap
