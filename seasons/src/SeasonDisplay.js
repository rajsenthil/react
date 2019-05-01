import './SeasonDisplay.css'
import React from 'react'

const SeasonDisplay = (props) => {
    console.log(props.lat)
    const season = getSeason(props.lat, new Date().getMonth())
    console.log(season);
    
    const {text, iconName} = seasonConfig[season];

    console.log('icon ' + iconName);

    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    );

};

const seasonConfig = {
  Summer: {
    text: 'Lets hist the beach',
    iconName: 'sun'
  },
  Winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9){
      return lat > 0 ? 'Summer' : 'Winter';
  } else {
      return lat < 0 ? 'Winter' : 'Summer';
  }
}

export default SeasonDisplay;
