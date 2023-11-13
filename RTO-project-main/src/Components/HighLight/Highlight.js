import React from 'react';
import './Highlight.css';

import { BsCurrencyRupee } from 'react-icons/bs';
import { AiOutlineCar } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';

const Highlight = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="left-inner">
            <div className="icon">
              <BsCurrencyRupee />
            </div>
            <div className="headline">offer's you Best Fare</div>
            <div className="desc">Specify a ride fare and accept a suitable offer</div>
          </div>
        </div>
        <div className="center">
          <div className="left-inner">
            <div className="icon">
              <AiOutlineCar />
            </div>
            <div className="headline">Choose a driver</div>
            <div className="desc">You see the driver's rating and number of rides before you accept the offer</div>
          </div>
        </div>
        <div className="right">
          <div className="left-inner">
            <div className="icon">
              <HiOutlineUserGroup />
            </div>
            <div className="headline">Share your ride with others</div>
            <div className="desc">Shared rides are even more profitable: you pay only for your seat</div>
          </div>
        </div>
        <div className="extreme-right">
          <div className="left-inner">
            <div className="icon">
              {/* Add your icon for the extreme right here */}
            </div>
            <div className="headline">Your Extreme Right Headline</div>
            <div className="desc">Your Extreme Right Description</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlight;
