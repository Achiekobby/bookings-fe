import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../../Styles/Css/Header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar, DateRange } from "react-date-range";
import { format } from "date-fns/esm";

const Header = ({type}) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOpenDate = () => {
    setOpenDate(!openDate);
  };

  const handleOpenOptions = () => {
    setOpenOptions(!openOptions);
  };

  //* functions to increase and decrease the number options
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };


  return (
    <div className="header">
      <div className={type==="list" ? "headerContainer listMode":"headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
        </div>
        {type!=="list"&&<>
        <h1 className="headerTitle">A lifetime of discount? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free KwaBooking account.
        </p>
        <button className="headerBtn">Sign-in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerSearchIcon" />
            <input
              type="text"
              placeholder="where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem" onClick={handleOpenDate}>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="headerSearchIcon dateClick"
            />
            <span className="headerSearchText">{`${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                onChange={(item) => setDate([item.selection])}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
            <span onClick={handleOpenOptions} className="headerSearchText">{`${options.adult} adults . ${options.children} children . ${options.room} room(s)`}</span>
            {openOptions && (
              <div className="option">
                <div className="optionItems">
                  <span className="optionText">Adult</span>
                  <div className="optionCount">
                    <button disabled={options.adult<2} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption('adult','i')}>+</button>
                  </div>
                </div>

                <div className="optionItems">
                  <span className="optionText">Children</span>
                  <div className="optionCount">
                    <button disabled={options.children<1} className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                  </div>
                </div>
                <div className="optionItems">
                  <span className="optionText">Room(s)</span>
                  <div className="optionCount">
                    <button disabled={options.room<2} className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
        </>}
      </div>
    </div>
    
  );
};

export default Header;
