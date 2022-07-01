import React from "react";
import "../../Styles/Css/Featured.css";
import locationOne from "../../images/cape_coast.jpg";
import locationTwo from "../../images/Elmina_beach_resort.jpg";
import locationThree from "../../images/hotel.jpg";
import { IoNavigateSharp, IoStar } from "react-icons/io5";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={locationOne}
          className="featuredImg"
          alt="Featured Beach Resort"
        />
        <div className="featuredTitles">
          <div className="location">
            <IoNavigateSharp className="navIcon" />
            <h1>Cape Coast</h1>
          </div>
          <div className="subInfo">
            <h2>100 Properties</h2>
            <div className="ratings">
              <IoStar className="rateStar" />
              <IoStar className="rateStar" />
              <IoStar className="rateStar" />
              <IoStar className="rateStar" />
            </div>
          </div>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src={locationTwo}
          className="featuredImg"
          alt="Featured Elmina Resort"
        />
        <div className="featuredTitles">
          <div className="location">
            <IoNavigateSharp className="navIcon" />
            <h1>Elmina</h1>
          </div>
          <div className="subInfo">
            <h2>150 Properties</h2>
            <div className="ratings">
              <IoStar className="rateStar" />
              <IoStar className="rateStar" />
              <IoStar className="rateStar" />
              <IoStar className="rateStar" />
              <IoStar className="rateStar" />
            </div>
          </div>
        </div>
      </div>

      <div className="featuredItem">
        <img src={locationThree} className="featuredImg" alt="Featured hotel" />
        <div className="featuredTitles">
          <div className="location">
            <IoNavigateSharp className="navIcon" />
            <h1>Accra Shore Line</h1>
          </div>
          <div className="subInfo">
            <h2>100 Rooms</h2>
            <div className="ratings">
              <IoStar className="rateStar" />
              <IoStar className="rateStar" />
              <IoStar className="rateStar" />
              <IoStar className="rateStar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
