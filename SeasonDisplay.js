import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let's heat the beach!",
        iconName: 'sun',
        colorName: 'red'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake',
        colorName: 'blue'
    }
}

const getSeason = (lat, month) => {
    if(month>=3 && month<=8){
        return (lat>0 ? 'summer' : 'winter');
    }
    else 
        return (lat<0 ? 'summer' : 'winter');
}

const SeasonDisplay = (props) => {
        const season = getSeason(props.Lat, new Date().getMonth());
        const {text,iconName,colorName} = seasonConfig[season];

        return(
            <div className={`season_display ${season}`}>
                <i className={`icon-left ${colorName} massive ${iconName} icon`} />
                <h1>{text}</h1>
                <i className={`icon-right ${colorName} massive ${iconName} icon`} />
            </div>
        );

};

export default SeasonDisplay;

