import React from "react";
import "../styling/SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Brr it's cold!",
    iconName: "snowflake",
  },
};

const getHemisphere = (lat) => {
  return lat > 0 ? "northern" : "southern";
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9)
    return getHemisphere(lat) === "northern" ? "summer" : "winter";
  else return getHemisphere(lat) === "northern" ? "winter" : "summer";
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
