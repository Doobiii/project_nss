import React, { useState, useEffect } from "react";
import pastEventsData from "../../db/past-event.json"; 
import Cardimg from "../images/img1.jpg";

const Filter = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [showEventDropdown, setShowEventDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const eventOptions = [
  
    "Survey",
    "Donation Drive",
    "Awareness",
    "Blood Donation",
    "Cleanliness",
    "Selection Process",
    "Specials",
  ];

  const yearOptions = ["2023", "2024"];

  // Load the data using useEffect once
  useEffect(() => {
    setEvents(pastEventsData); 
    setFilteredEvents(pastEventsData); 
  }, []);

  // Filtering logic
  useEffect(() => {
    const filterResults = events.filter((event) => {
      return (
        
        (selectedEvent === "" || event.event_type === selectedEvent) &&
        (selectedYear === "" || event.year === parseInt(selectedYear))
      );
    });
    setFilteredEvents(filterResults);
  }, [selectedEvent, selectedYear, events]);

  //Reset Filter
  const resetEvents = () => {
    setSelectedEvent("");        
    setSelectedYear("");   
    setFilteredEvents(events);  
  };

  const FilterOptions = ({ options, onSelect, selected }) => {
    return (
      <div className="py-1">
        
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option)}
            className={`block w-full px-4 py-2 text-left text-sm text-gray-700 ${
              selected === option ? "bg-gray-200" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
    <div className="filter w-100 flex justify-start">
      {/* Event Dropdown */}
      <div className="relative inline-block text-left mx-2">
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => setShowEventDropdown(!showEventDropdown)}
        >
          {selectedEvent || "Event"}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {showEventDropdown && (
          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <FilterOptions
              options={eventOptions}
              onSelect={(event) => {
                setSelectedEvent(event);
                setShowEventDropdown(false);
              }}
              selected={selectedEvent}
            />
          </div>
        )}
      </div>

      {/* Year Dropdown */}
      <div className="relative inline-block text-left mx-2">
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => setShowYearDropdown(!showYearDropdown)}
        >
          {selectedYear || "Year"}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {showYearDropdown && (
          <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <FilterOptions
              options={yearOptions}
              onSelect={(year) => {
                setSelectedYear(year);
                setShowYearDropdown(false);
              }}
              selected={selectedYear}
            />
          </div>
        )}
      </div>

      {/* Reset Events */}
      <div className="relative inline-block text-left mx-2">
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => {resetEvents();
            setShowYearDropdown(false);
            setShowEventDropdown(false);
          }}
        >
          {"All Events"}
         
        </button>
      </div>

    </div>
     {/* Display Filtered Events */}
     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
       
       {filteredEvents.length > 0 ? (
         filteredEvents.map((event, index) => (
           <div className="containerrr"  
            key = {index}>
     <article className="card__article">
       <img
         src={event.imgUrl ? event.imgUrl : Cardimg}
         alt={event.title}
         className="card__img"
       />

       <div className="card__data">
         {/* <span className="card__description">{event.content}</span> */}
         <h2 className="card__title">{event.title}</h2>
       </div>
     </article>
   </div>
         ))
       ) : (
         <div>No events found</div>
       )}
     </div>
    </>
  );
};

export default Filter;
